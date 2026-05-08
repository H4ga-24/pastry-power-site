import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useAuth } from '../AuthContext';
import { MessageCircle, TrendingUp, Clock, Plus, ChevronUp } from 'lucide-react';

const CATEGORIES = [
  { id: 'all',      label: 'Tout',               emoji: '🍰' },
  { id: 'question', label: 'Questions',          emoji: '❓' },
  { id: 'recette',  label: 'Recettes partagées', emoji: '📋' },
  { id: 'astuce',   label: 'Astuces & conseils', emoji: '💡' },
  { id: 'photo',    label: 'Mes réalisations',   emoji: '📸' },
];

export default function CommunautePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('recent');
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadPosts(); }, [category, sort]);

  async function loadPosts() {
    setLoading(true);
    let query = supabase
      .from('forum_posts')
      .select('id, title, category, tags, upvotes, created_at, body, profiles(username, email), forum_replies(count)');

    if (category !== 'all') query = query.eq('category', category);
    query = sort === 'popular'
      ? query.order('upvotes', { ascending: false })
      : query.order('created_at', { ascending: false });

    const { data } = await query.limit(30);
    setPosts(data ?? []);
    setLoading(false);
  }

  const getDisplayName = (profiles) => {
    if (!profiles) return 'Anonyme';
    return profiles.username || profiles.email?.split('@')[0] || 'Anonyme';
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4">

        <div className="mb-10">
          <h1 className="text-3xl font-serif text-white mb-2">
            Communauté <span className="text-[#D4AF37]">PastryPower</span>
          </h1>
          <p className="text-gray-400 text-sm">Posez vos questions, partagez vos recettes et astuces avec les autres passionnés.</p>
        </div>

        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          {user ? (
            <button
              onClick={() => navigate('/communaute/nouveau')}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-bold rounded-xl text-sm transition-colors"
            >
              <Plus size={16} /> Nouveau post
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm">
              <span className="text-gray-400">Lecture libre —</span>
              <Link to="/login" className="text-[#D4AF37] hover:underline font-medium">
                Connectez-vous pour participer
              </Link>
            </div>
          )}

          <div className="flex items-center gap-1 bg-white/5 rounded-xl p-1">
            <button
              onClick={() => setSort('recent')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${sort === 'recent' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <Clock size={12} /> Récents
            </button>
            <button
              onClick={() => setSort('popular')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${sort === 'popular' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <TrendingUp size={12} /> Populaires
            </button>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                category === c.id
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                  : 'border-white/10 text-gray-400 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1,2,3].map(i => <div key={i} className="bg-white/5 rounded-xl h-24 animate-pulse" />)}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-4xl mb-3">🍰</p>
            <p>Aucun post dans cette catégorie.</p>
            {user && (
              <button onClick={() => navigate('/communaute/nouveau')} className="mt-4 text-[#D4AF37] hover:underline text-sm">
                Soyez le premier à poster !
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map(post => (
              <Link
                key={post.id}
                to={`/communaute/${post.id}`}
                className="block bg-white/5 hover:bg-white/[0.08] border border-white/5 hover:border-[#D4AF37]/30 rounded-xl px-5 py-4 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center min-w-[40px] text-center">
                    <ChevronUp size={16} className="text-gray-500" />
                    <span className={`text-sm font-bold ${post.upvotes > 0 ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
                      {post.upvotes}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-2 py-0.5 rounded-full">
                        {CATEGORIES.find(c => c.id === post.category)?.emoji} {post.category}
                      </span>
                      {post.tags?.map(tag => (
                        <span key={tag} className="text-xs text-gray-500">#{tag}</span>
                      ))}
                    </div>
                    <p className="font-medium text-white group-hover:text-[#D4AF37] transition-colors truncate">{post.title}</p>
                    <p className="text-gray-500 text-xs mt-1 truncate">{post.body?.slice(0, 100)}…</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
                      <span>par <span className="text-gray-400">{getDisplayName(post.profiles)}</span></span>
                      <span>·</span>
                      <span>{new Date(post.created_at).toLocaleDateString('fr-FR')}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle size={11} />
                        {post.forum_replies?.[0]?.count ?? 0} réponse{post.forum_replies?.[0]?.count > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
