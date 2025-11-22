import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert("Por favor, preencha seu nome e a mensagem.");
      return;
    }

    const email = "divino.viana@professor.to.gov.br";
    const mailSubject = encodeURIComponent(`Contato pelo Site: ${subject} - ${name}`);
    const mailBody = encodeURIComponent(`Nome: ${name}\n\nMensagem:\n${message}`);
    
    // Abre o cliente de email padrão
    window.location.href = `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-tocantins-blue mb-6 font-medium">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para o início
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-tocantins-blue rounded-full mb-4">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-800">Fale com o Professor</h2>
          <p className="text-slate-600 mt-2">
            Envie suas dúvidas, sugestões ou comentários diretamente para o e-mail institucional.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
              Seu Nome
            </label>
            <input 
              id="name"
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition"
              placeholder="Digite seu nome completo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="subject">
              Assunto
            </label>
            <input 
              id="subject"
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition"
              placeholder="Sobre o que você quer falar?"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition"
              placeholder="Escreva sua mensagem aqui..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-tocantins-blue hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Enviar E-mail
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            Ao clicar em enviar, seu aplicativo de e-mail padrão será aberto com a mensagem preenchida.
            <br/>
            E-mail de destino: <span className="font-semibold">divino.viana@professor.to.gov.br</span>
          </p>
        </div>
      </div>
    </div>
  );
};