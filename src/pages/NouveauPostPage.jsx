import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabase';
import { useAuth } from '../AuthContext';

const CATEGORIES = [
  { id: 'question', label: '❓ Question',         desc: 'Posez une question à la communauté' },
  { id: 'recette',  label: '📋 Recette partagée', desc: 'Partagez une de vos recettes' },
  { id: 'astuce',   label: '💡 Astuce / Conseil', desc: 'Un truc qui vous a bien aidé ?' },
  { id: 'photo',    label: '📸 Ma réalisation',   desc: 'Montrez votre travail !' },
];

export default function NouveauPostPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState('question');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!user) {
    return (
      <div className="min-h-screen bg-[#121212] text-white pt-28 flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400">Vous devez être connecté pour poster.</p>
        <Link to="/login" className="px-5 py-2 bg-[#D4AF37] text-black rounded-xl font-bold text-sm">Se connecter</Link>
      </div>
    );
  }

  async function handleSubmit() {
    if (!title.trim() || !body.trim()) { setError('Le titre et le contenu sont obligatoires.'); return; }
    setSubmitting(true);
    setError('');
    const tags = tagsInput.split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
    const { data, error: err } = await supabase
      .from('forum_posts')
      .insert({ user_id: user.id, category, title: title.trim(), body: body.trim(), tags })
      .select('id')
      .single();
    if (err) { setError('Une erreur est survenue. Réessayez.'); setSubmitting(false); return; }
    navigate(`/communaute/${data.id}`);
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <Link to="/communaute" className="text-gray-500 hover:text-[#D4AF37] text-sm mb-6 block transition-colors">← Retour à la communauté</Link>
        <h1 className="text-2xl font-serif mb-8">Créer un post</h1>
        <div className="space-y-6">
          <div>
            <label className="text-sm text-gray-400 mb-3 block">Type de post</label>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.map(c => (
                <button key={c.id} onClick={() => setCategory(c.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${category === c.id ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-white/10 hover:border-white/20'}`}>
                  <p className="text-sm font-medium">{c.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Titre *</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}
              placeholder="Ex: Comment rattraper une ganache qui a tranché ?"
              maxLength={150}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
            <p className="text-xs text-gray-600 mt-1 text-right">{title.length}/150</p>
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Contenu *</label>
            <textarea value={body} onChange={e => setBody(e.target.value)}
              placeholder="Décrivez votre question, recette ou astuce en détail…"
              rows={8}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Tags <span className="text-gray-600">(optionnel, séparés par des virgules)</span></label>
            <input type="text" value={tagsInput} onChange={e => setTagsInput(e.target.value)}
              placeholder="Ex: ganache, chocolat, tempérage"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button onClick={handleSubmit} disabled={submitting}
            className="w-full py-3 bg-[#D4AF37] hover:bg-[#D4AF37]/80 disabled:opacity-40 text-black font-bold rounded-xl transition-colors">
            {submitting ? 'Publication en cours…' : 'Publier'}
          </button>
        </div>
      </div>
    </div>
  );
}
