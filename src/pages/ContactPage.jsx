import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message de ${form.name} — Pastry Power`);
    const body = encodeURIComponent(`Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:pastrypower76@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 pt-32 pb-20 px-6 font-sans">
      <Helmet>
        <title>Contact | Pastry Power</title>
        <meta name="description" content="Contactez l'équipe Pastry Power pour toute question, suggestion ou collaboration." />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-white mb-4">Contact</h1>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6" />
          <p className="text-gray-400">Une question, une suggestion ou une proposition de collaboration ? Écrivez-nous.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nom</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/60 transition-colors resize-none"
              placeholder="Votre message…"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Envoyer le message
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-8">
          Ou écrivez directement à{' '}
          <a href="mailto:pastrypower76@gmail.com" className="text-[#D4AF37] hover:underline">
            pastrypower76@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
