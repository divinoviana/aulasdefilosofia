import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send, MessageCircle, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const targetEmail = "divino.viana@professor.to.gov.br"; 
  const teacherPhone = "63999191919";

  const handleWhatsApp = () => {
    if (!name.trim()) {
      alert("Por favor, preencha pelo menos seu nome para iniciar a conversa.");
      return;
    }
    const text = `*Olá, Professor Divino.*\n\nSou o aluno(a) *${name}*.\n\n*Mensagem:*\n${message || '(Gostaria de tirar uma dúvida)'}`;
    const encodedText = encodeURIComponent(text);
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    
    window.open(`${baseUrl}?phone=55${teacherPhone}&text=${encodedText}`, '_blank');
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    const subject = `Contato Portal Filosofia: ${name}`;
    const bodyContent = `Nome do Aluno: ${name}\nE-mail para retorno: ${email}\n\n--- MENSAGEM ---\n\n${message}`;
    
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl min-h-[80vh] flex flex-col">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-tocantins-blue mb-6 font-medium transition-colors w-fit">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para o início
      </Link>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
        
        {/* Lado Esquerdo / Topo - Cabeçalho Visual */}
        <div className="bg-slate-900 text-white p-8 md:w-1/3 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
              <MessageCircle className="w-6 h-6 text-tocantins-yellow" />
            </div>
            <h2 className="text-2xl font-serif font-bold mb-4">Fale com o Professor</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Envie suas dúvidas, sugestões ou atividades pendentes diretamente por aqui.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Mail className="w-4 h-4 text-tocantins-yellow" />
              <span>divino.viana@professor.to.gov.br</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle className="w-4 h-4 text-tocantins-green" />
              <span>Canal Oficial</span>
            </div>
          </div>
        </div>

        {/* Lado Direito / Baixo - Formulário */}
        <div className="p-8 md:w-2/3 bg-white">
          <form onSubmit={handleEmailSend} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
                Seu Nome
              </label>
              <input 
                id="name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition"
                placeholder="Ex: João Silva - 3º A"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="email">
                Seu E-mail
              </label>
              <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition"
                placeholder="Ex: joao@email.com"
                required
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
                rows={4}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition resize-none"
                placeholder="Escreva sua mensagem aqui..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-tocantins-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Abrir E-mail para Enviar
            </button>
            
            <p className="text-xs text-center text-slate-400 mt-2">
              Isso abrirá seu aplicativo de e-mail padrão.
            </p>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-center text-sm text-slate-500 mb-4">Prefere uma resposta mais rápida?</p>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};