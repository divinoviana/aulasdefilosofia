import React, { useState, useEffect } from 'react';
import { Send, Copy, CheckCircle, Phone, Settings, Mail } from 'lucide-react';

interface Props {
  studentName: string;
  schoolClass: string;
  lessonTitle: string;
  answers: Record<string, string>;
  teacherEmail?: string; // Kept for fallback
}

export const SubmissionBar: React.FC<Props> = ({ 
  studentName, 
  schoolClass, 
  lessonTitle, 
  answers,
  teacherEmail = "divino.viana@professor.to.gov.br"
}) => {
  const [teacherPhone, setTeacherPhone] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Load saved phone number on mount
  useEffect(() => {
    const savedPhone = localStorage.getItem('teacherPhone');
    if (savedPhone) {
      setTeacherPhone(savedPhone);
    } else {
      // Default placeholder or empty
      setShowPhoneInput(true);
    }
  }, []);

  const savePhone = (phone: string) => {
    // Remove non-digits for storage
    const cleanPhone = phone.replace(/\D/g, '');
    setTeacherPhone(cleanPhone);
    localStorage.setItem('teacherPhone', cleanPhone);
  };

  const validate = () => {
    if (!studentName.trim()) {
      alert("Por favor, preencha seu nome antes de enviar.");
      return false;
    }
    if (!schoolClass.trim()) {
      alert("Por favor, preencha sua turma.");
      return false;
    }
    const hasAnswers = Object.values(answers).some(a => a.trim().length > 0);
    if (!hasAnswers) {
      alert("Responda pelo menos uma questão.");
      return false;
    }
    return true;
  };

  const formatMessage = () => {
    let msg = `*ATIVIDADE DE FILOSOFIA*\n\n`;
    msg += `*Aluno:* ${studentName}\n`;
    msg += `*Turma:* ${schoolClass}\n`;
    msg += `*Aula:* ${lessonTitle}\n`;
    msg += `--------------------------------\n\n`;
    
    let count = 1;
    Object.entries(answers).forEach(([key, value]) => {
      if (value && value.trim()) {
        msg += `*Questão ${count}:*\n${value}\n\n`;
        count++;
      }
    });
    return msg;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;

    if (!teacherPhone || teacherPhone.length < 10) {
      alert("Por favor, configure o número do professor corretamente.");
      setShowPhoneInput(true);
      return;
    }

    const text = formatMessage();
    const encodedText = encodeURIComponent(text);
    // Determine current device type to choose API
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    
    window.open(`${baseUrl}?phone=55${teacherPhone}&text=${encodedText}`, '_blank');
  };

  const handleCopy = () => {
    if (!validate()) return;
    const text = formatMessage();
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  };

  const handleMailto = () => {
    if (!validate()) return;
    const subject = `Atividade: ${studentName} - ${schoolClass}`;
    const body = formatMessage();
    window.location.href = `mailto:${teacherEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto max-w-3xl">
        
        {/* Phone Input Config (Collapsible) */}
        {showPhoneInput && (
          <div className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 animate-in fade-in slide-in-from-bottom-2">
            <label className="block text-sm font-bold text-yellow-800 mb-2">
              Configure o WhatsApp do Professor (apenas uma vez):
            </label>
            <div className="flex gap-2">
              <input 
                type="tel" 
                placeholder="DDD + Número (ex: 63999999999)"
                className="flex-1 p-2 border rounded-md border-yellow-400 focus:ring-2 focus:ring-yellow-500"
                value={teacherPhone}
                onChange={(e) => savePhone(e.target.value)}
              />
              <button 
                onClick={() => setShowPhoneInput(false)}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-700"
              >
                Salvar
              </button>
            </div>
            <p className="text-xs text-yellow-700 mt-2">Este número ficará salvo no seu dispositivo para as próximas atividades.</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Controls */}
          <div className="flex w-full space-x-2">
            
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex-1 md:flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              title="Copiar Respostas"
            >
              {copyFeedback ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              <span>{copyFeedback ? "Copiado" : "Copiar"}</span>
            </button>

             {/* Email Fallback (Icon only on mobile, text on desktop) */}
             <button
              onClick={handleMailto}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              title="Enviar por E-mail (App)"
            >
              <Mail className="w-5 h-5" />
            </button>

            {/* WhatsApp Button (Primary) */}
            <button
              onClick={handleWhatsApp}
              className="flex-[2] bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Enviar no WhatsApp</span>
            </button>

            {/* Settings Toggle */}
            <button 
              onClick={() => setShowPhoneInput(!showPhoneInput)}
              className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition"
              title="Configurar Número"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};