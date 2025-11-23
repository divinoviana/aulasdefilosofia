import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send, ExternalLink, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const teacherEmail = "divinoviana@gmail.com";
  const teacherPhone = "63999191919";

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      alert("Por favor, preencha seu nome e a mensagem para que o professor possa te identificar.");
      return;
    }

    const text = `*Olá, Professor Divino.*\n\nSou o aluno(a) *${name}*.\n\n*Mensagem:*\n${message}`;
    const encodedText = encodeURIComponent(text);
    
    // Verifica se é dispositivo móvel para usar a API correta
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    
    window.open(`${baseUrl}?phone=55${teacherPhone}&text=${encodedText}`, '_blank');
  };

  const handleEmail = () => {
    if (!name.trim() || !message.trim()) {
      alert("Por favor, preencha seu nome e a mensagem.");
      return;
    }

    const subject = encodeURIComponent(`Contato Portal Filosofia - Aluno: ${name}`);
    const body = encodeURIComponent(`Nome do Aluno: ${name}\n\nMensagem:\n${message}`);
    
    window.location.href = `mailto:${teacherEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl min-h-[80vh] flex flex-col">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-tocantins-blue mb-6 font-medium transition-colors w-fit">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para o início
      </Link>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex-grow">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-tocantins-blue rounded-full mb-4">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-800">Fale com o Professor</h2>
          <p className="text-slate-600 mt-2">
            Tire suas dúvidas ou envie sugestões diretamente.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
              Seu Nome <span className="text-red-500">*</span>
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
            <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="message">
              Sua Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea 
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition resize-none"
              placeholder="Escreva aqui o que você gostaria de falar com o professor..."
              required
            />
          </div>

          <div className="grid gap-4 pt-4">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar para o WhatsApp do Professor
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">ou preferir e-mail</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            <button
              type="button"
              onClick={handleEmail}
              className="w-full bg-white border-2 border-slate-200 hover:border-tocantins-blue text-slate-700 hover:text-tocantins-blue font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Abrir aplicativo de E-mail
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
             <p className="text-xs text-slate-400">
               Ao clicar nos botões acima, você será redirecionado para o aplicativo correspondente instalado no seu dispositivo.
             </p>
        </div>
      </div>
    </div>
  );
};