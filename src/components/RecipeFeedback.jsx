import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useAuth } from '../AuthContext';

const StarRating = ({ userScore, onRate }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map(n => (
      <button
        key={n}
        onClick={() => onRate(n)}
        className={`text-2xl transition-all duration-150 hover:scale-110 ${
          n <= (userScore ?? 0) ? 'text-[#D4AF37]' : 'text-gray-600 hover:text-[#D4AF37]/60'
        }`}
      >★</button>
    ))}
  </div>
);

export default function RecipeFeedback({ recipeId }) {
  const { user } = useAuth();
  const [userScore, setUserScore] = useState(null);
  const [avgScore, setAvgScore] = useState(null);
  const [totalRatings, setTotalRatings] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { loadData(); }, [recipeId, user?.id]);

  async function loadData() {
    setLoading(true);
    const { data: ratings } = await supabase
      .from('recipe_ratings')
      .select('score, user_id')
      .eq('recipe_id', recipeId);

    if (ratings?.length) {
      const avg = ratings.reduce((s, r) => s + r.score, 0) / ratings.length;
      setAvgScore(avg.toFixed(1));
      setTotalRatings(ratings.length);
      if (user) {
        const mine = ratings.find(r => r.user_id === user.id);
        if (mine) setUserScore(mine.score);
      }
    }

    const { data: cmts } = await supabase
      .from('recipe_comments')
      .select('id, body, created_at, user_id, profiles(username, email)')
      .eq('recipe_id', recipeId)
      .is('parent_id', null)
      .order('created_at', { ascending: false })
      .limit(20);

    setComments(cmts ?? []);
    setLoading(false);
  }

  async function handleRate(score) {
    if (!user) return;
    await supabase.from('recipe_ratings').upsert(
      { recipe_id: recipeId, user_id: user.id, score },
      { onConflict: 'recipe_id,user_id' }
    );
    setUserScore(score);
    loadData();
  }

  async function handleComment() {
    if (!user || !newComment.trim() || submitting) return;
    setSubmitting(true);
    await supabase.from('recipe_comments').insert({
      recipe_id: recipeId,
      user_id: user.id,
      body: newComment.trim(),
    });
    setNewComment('');
    await loadData();
    setSubmitting(false);
  }

  async function handleDelete(id) {
    await supabase.from('recipe_comments').delete().eq('id', id);
    setComments(prev => prev.filter(c => c.id !== id));
  }

  const getDisplayName = (profiles) => {
    if (!profiles) return 'Anonyme';
    return profiles.username || profiles.email?.split('@')[0] || 'Anonyme';
  };

  return (
    <div className="mt-12 border-t border-white/10 pt-10 space-y-8">
      {/* Notation */}
      <div className="bg-white/5 rounded-xl p-6 space-y-3">
        <h3 className="text-white font-serif text-lg">Notez cette recette</h3>
        <div className="flex items-center gap-4 flex-wrap">
          <StarRating userScore={userScore} onRate={handleRate} />
          {avgScore ? (
            <span className="text-gray-400 text-sm">{avgScore}/5 · {totalRatings} avis</span>
          ) : (
            <span className="text-gray-600 text-sm">Aucun avis pour l'instant</span>
          )}
        </div>
        {!user && (
          <p className="text-gray-500 text-sm">
            <Link to="/login" className="text-[#D4AF37] hover:underline">Connectez-vous</Link> pour noter cette recette.
          </p>
        )}
        {user && userScore && (
          <p className="text-gray-500 text-xs">Votre note : {userScore}★ (cliquez pour modifier)</p>
        )}
      </div>

      {/* Commentaires */}
      <div className="space-y-4">
        <h3 className="text-white font-serif text-lg">
          Commentaires {comments.length > 0 && <span className="text-gray-500 text-sm font-sans">({comments.length})</span>}
        </h3>

        {user ? (
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-bold text-sm flex-shrink-0">
              {(user.email?.[0] ?? '?').toUpperCase()}
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <textarea
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Partagez votre expérience avec cette recette…"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                rows={3}
              />
              <button
                onClick={handleComment}
                disabled={!newComment.trim() || submitting}
                className="self-end px-5 py-2 bg-[#D4AF37] hover:bg-[#D4AF37]/80 disabled:opacity-40 disabled:cursor-not-allowed text-black rounded-lg text-sm font-bold transition-colors"
              >
                {submitting ? 'Publication…' : 'Publier'}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white/5 rounded-xl p-5 text-center">
            <p className="text-gray-400 text-sm mb-3">Rejoignez la communauté pour laisser un commentaire</p>
            <Link to="/login" className="inline-block px-5 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-lg text-sm font-bold transition-colors">
              Se connecter
            </Link>
          </div>
        )}

        {loading ? (
          <p className="text-gray-600 text-sm">Chargement…</p>
        ) : comments.length === 0 ? (
          <p className="text-gray-600 text-sm">Soyez le premier à commenter cette recette !</p>
        ) : (
          <div className="space-y-3">
            {comments.map(c => (
              <div key={c.id} className="flex gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 font-bold text-sm flex-shrink-0">
                  {(getDisplayName(c.profiles)?.[0] ?? '?').toUpperCase()}
                </div>
                <div className="flex-1 bg-white/5 rounded-xl px-4 py-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[#D4AF37] text-sm font-medium">{getDisplayName(c.profiles)}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-xs">{new Date(c.created_at).toLocaleDateString('fr-FR')}</span>
                      {user?.id === c.user_id && (
                        <button onClick={() => handleDelete(c.id)} className="text-gray-600 hover:text-red-400 text-xs transition-colors">
                          Supprimer
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
