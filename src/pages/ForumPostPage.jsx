import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useAuth } from '../AuthContext';
import { ChevronUp, MessageCircle, Trash2 } from 'lucide-react';

export default function ForumPostPage() {
  const { postId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  useEffect(() => { loadPost(); }, [postId, user?.id]);

  async function loadPost() {
    const { data: postData } = await supabase
      .from('forum_posts').select('*, profiles(username, email)').eq('id', postId).single();
    setPost(postData);

    const { data: repliesData } = await supabase
      .from('forum_replies').select('*, profiles(username, email)')
      .eq('post_id', postId).order('created_at', { ascending: true });
    setReplies(repliesData ?? []);

    if (user) {
      const { data: upvote } = await supabase.from('forum_upvotes')
        .select('user_id').eq('user_id', user.id).eq('post_id', postId).maybeSingle();
      setHasUpvoted(!!upvote);
    }
    setLoading(false);
  }

  async function handleUpvote() {
    if (!user || !post) return;
    if (hasUpvoted) {
      await supabase.from('forum_upvotes').delete().eq('user_id', user.id).eq('post_id', postId);
      await supabase.from('forum_posts').update({ upvotes: (post.upvotes ?? 1) - 1 }).eq('id', postId);
      setPost(p => ({ ...p, upvotes: (p.upvotes ?? 1) - 1 }));
      setHasUpvoted(false);
    } else {
      await supabase.from('forum_upvotes').insert({ user_id: user.id, post_id: postId });
      await supabase.from('forum_posts').update({ upvotes: (post.upvotes ?? 0) + 1 }).eq('id', postId);
      setPost(p => ({ ...p, upvotes: (p.upvotes ?? 0) + 1 }));
      setHasUpvoted(true);
    }
  }

  async function handleReply() {
    if (!user || !newReply.trim() || submitting) return;
    setSubmitting(true);
    await supabase.from('forum_replies').insert({ post_id: postId, user_id: user.id, body: newReply.trim() });
    setNewReply('');
    await loadPost();
    setSubmitting(false);
  }

  async function handleDeletePost() {
    if (!window.confirm('Supprimer ce post définitivement ?')) return;
    await supabase.from('forum_posts').delete().eq('id', postId);
    navigate('/communaute');
  }

  async function handleDeleteReply(id) {
    await supabase.from('forum_replies').delete().eq('id', id);
    setReplies(prev => prev.filter(r => r.id !== id));
  }

  const getDisplayName = (profiles) => {
    if (!profiles) return 'Anonyme';
    return profiles.username || profiles.email?.split('@')[0] || 'Anonyme';
  };

  if (loading) return <div className="min-h-screen bg-[#121212] pt-28 flex items-center justify-center"><p className="text-gray-500">Chargement…</p></div>;
  if (!post) return <div className="min-h-screen bg-[#121212] pt-28 flex flex-col items-center justify-center gap-4"><p className="text-gray-400">Post introuvable.</p><Link to="/communaute" className="text-[#D4AF37] hover:underline">Retour</Link></div>;

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/communaute" className="text-gray-500 hover:text-[#D4AF37] text-sm mb-6 block transition-colors">← Retour à la communauté</Link>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1">
              <button onClick={handleUpvote}
                className={`p-2 rounded-lg transition-colors ${hasUpvoted ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-500 hover:text-[#D4AF37] hover:bg-white/5'} ${!user ? 'cursor-default' : ''}`}>
                <ChevronUp size={20} />
              </button>
              <span className={`text-sm font-bold ${post.upvotes > 0 ? 'text-[#D4AF37]' : 'text-gray-500'}`}>{post.upvotes ?? 0}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-2 py-0.5 rounded-full">{post.category}</span>
                {post.tags?.map(tag => <span key={tag} className="text-xs text-gray-500">#{tag}</span>)}
              </div>
              <h1 className="text-xl font-serif text-white mb-4">{post.title}</h1>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{post.body}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xs text-gray-600">
                  par <span className="text-gray-400">{getDisplayName(post.profiles)}</span> · {new Date(post.created_at).toLocaleDateString('fr-FR')}
                </p>
                {user?.id === post.user_id && (
                  <button onClick={handleDeletePost} className="flex items-center gap-1 text-xs text-gray-600 hover:text-red-400 transition-colors">
                    <Trash2 size={12} /> Supprimer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <h2 className="text-sm font-medium text-gray-400 flex items-center gap-2">
            <MessageCircle size={14} /> {replies.length} réponse{replies.length > 1 ? 's' : ''}
          </h2>
          {replies.map(r => (
            <div key={r.id} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 font-bold text-xs flex-shrink-0">
                {(getDisplayName(r.profiles)?.[0] ?? '?').toUpperCase()}
              </div>
              <div className="flex-1 bg-white/5 rounded-xl px-4 py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#D4AF37] text-sm font-medium">{getDisplayName(r.profiles)}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-xs">{new Date(r.created_at).toLocaleDateString('fr-FR')}</span>
                    {user?.id === r.user_id && (
                      <button onClick={() => handleDeleteReply(r.id)} className="text-gray-600 hover:text-red-400 text-xs transition-colors">Supprimer</button>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{r.body}</p>
              </div>
            </div>
          ))}
        </div>

        {user ? (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-sm text-gray-400 mb-3">Votre réponse</p>
            <textarea value={newReply} onChange={e => setNewReply(e.target.value)}
              placeholder="Apportez votre expertise…" rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-[#D4AF37]/50 transition-colors mb-3" />
            <button onClick={handleReply} disabled={!newReply.trim() || submitting}
              className="px-5 py-2 bg-[#D4AF37] hover:bg-[#D4AF37]/80 disabled:opacity-40 text-black font-bold rounded-xl text-sm transition-colors">
              {submitting ? 'Envoi…' : 'Répondre'}
            </button>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <p className="text-gray-400 text-sm mb-3">Connectez-vous pour répondre à ce post</p>
            <Link to="/login" className="inline-block px-5 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-xl text-sm font-bold transition-colors">Se connecter</Link>
          </div>
        )}
      </div>
    </div>
  );
}
