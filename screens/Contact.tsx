import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, Send, Loader2, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const teacherEmail = "divino.viana@professor.to.gov.br";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Por favor, preencha seu nome, seu e-mail e a mensagem.");
      return;
    }

    setStatus('loading');

    try {
      // Usando FormSubmit.co para envio direto via AJAX
      // Adicionado _honey para evitar bots e _replyto explícito
      const response = await fetch(`https://formsubmit.co/ajax/${teacherEmail}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email, 
          _replyto: email, // Garante que o responder vá para o aluno
          subject: subject || "Nova mensagem do Portal de Filosofia",
          message: message,
          _subject: `[Filosofia] Contato de ${name}`, 
          _template: "table",
          _captcha: "false",
          _honey: "" // Campo honeypot (deve estar vazio)
        })
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.error("Erro no servidor de e-mail", response);
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setStatus('error');
    }
  };

  const handleManualEmail = () => {
    const mailSubject = subject ? encodeURIComponent(subject) : encodeURIComponent(`Contato Site Filosofia - ${name}`);
    const mailBody = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
    window.location.href = `mailto:${teacherEmail}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-tocantins-blue mb-6 font-medium transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para o início
      </Link>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-tocantins-blue rounded-full mb-4">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-800">Fale com o Professor</h2>
          <p className="text-slate-600 mt-2">
            Envie suas dúvidas, sugestões ou comentários.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Mensagem Enviada!</h3>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Sua mensagem foi processada. Caso não receba resposta em breve, utilize o método manual abaixo para garantir que não foi bloqueada pelo filtro institucional.
            </p>
            <div className="flex flex-col gap-3 justify-center">
              <button 
                onClick={() => setStatus('idle')}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-xl transition-colors"
              >
                Enviar outra mensagem
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
                Seu Nome <span className="text-red-500">*</span>
              </label>
              <input 
                id="name"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Digite seu nome completo"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="email">
                Seu E-mail <span className="text-red-500">*</span>
              </label>
              <input 
                id="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Para onde devo enviar a resposta?"
                required
                disabled={status === 'loading'}
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
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Ex: Dúvida sobre a Aula 10"
                disabled={status === 'loading'}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="message">
                Mensagem <span className="text-red-500">*</span>
              </label>
              <textarea 
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent outline-none transition disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                placeholder="Escreva sua mensagem aqui..."
                required
                disabled={status === 'loading'}
              />
            </div>

            {/* Honeypot hidden field */}
            <input type="text" name="_honey" style={{display: 'none'}} />

            {status === 'error' && (
               <div className="bg-red-50 text-red-600 p-4 rounded-lg flex flex-col gap-2 text-sm border border-red-100 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-2 font-bold">
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <p>O envio automático falhou.</p>
                  </div>
                  <p>Isso pode acontecer devido a bloqueios de segurança do e-mail institucional. Por favor, use o botão "Enviar pelo App de E-mail" abaixo.</p>
               </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-tocantins-blue hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-8 pt-8 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
            <p className="text-sm text-slate-600 mb-3 font-medium">
              O envio automático não funcionou ou prefere usar seu próprio e-mail?
            </p>
            <button
              onClick={handleManualEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-slate-300 hover:border-tocantins-blue hover:text-tocantins-blue text-slate-700 font-semibold rounded-lg transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Enviar pelo App de E-mail (Garantido)
            </button>
            <p className="text-xs text-slate-400 mt-2">
              Isso abrirá o Outlook, Gmail ou app padrão do seu dispositivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
