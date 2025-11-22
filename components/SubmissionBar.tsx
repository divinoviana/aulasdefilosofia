import React, { useState, useEffect } from 'react';
import { Send, Copy, CheckCircle, Settings, Mail } from 'lucide-react';

export interface SubmissionItem {
  activityTitle: string;
  question: string;
  answer: string;
}

interface Props {
  studentName: string;
  schoolClass: string;
  submissionDate: string;
  lessonTitle: string;
  submissionData: SubmissionItem[];
  teacherEmail?: string;
}

export const SubmissionBar: React.FC<Props> = ({ 
  studentName, 
  schoolClass, 
  submissionDate,
  lessonTitle, 
  submissionData,
  teacherEmail = "divino.viana@professor.to.gov.br"
}) => {
  // Número padrão definido pelo professor
  const DEFAULT_PHONE = "63981127876";

  const [teacherPhone, setTeacherPhone] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Carregar telefone salvo ao iniciar ou usar o padrão
  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem('teacherPhone');
      if (savedPhone) {
        setTeacherPhone(savedPhone);
      } else {
        // Se não tiver salvo, usa o padrão e salva silenciosamente ou apenas define no state
        setTeacherPhone(DEFAULT_PHONE);
        // Não forçamos a abertura do input pois já temos o número do professor
        setShowPhoneInput(false);
      }
    } catch (error) {
      console.warn("Não foi possível acessar o localStorage:", error);
      setTeacherPhone(DEFAULT_PHONE);
    }
  }, []);

  const savePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    setTeacherPhone(cleanPhone);
    try {
      localStorage.setItem('teacherPhone', cleanPhone);
    } catch (error) {
      console.warn("Não foi possível salvar no localStorage:", error);
    }
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
    if (!submissionDate.trim()) {
      alert("Por favor, preencha a data.");
      return false;
    }
    if (submissionData.length === 0) {
      alert("Responda pelo menos uma questão.");
      return false;
    }
    return true;
  };

  const getFormattedDate = () => {
    if (!submissionDate) return '';
    const [year, month, day] = submissionDate.split('-');
    return `${day}/${month}/${year}`;
  };

  const formatMessage = () => {
    let msg = `*ATIVIDADE DE FILOSOFIA*\n`;
    msg += `📚 *Aula:* ${lessonTitle}\n`;
    msg += `👤 *Aluno:* ${studentName}\n`;
    msg += `🏫 *Turma:* ${schoolClass}\n`;
    msg += `📅 *Data:* ${getFormattedDate()}\n`;
    msg += `--------------------------------\n\n`;
    
    submissionData.forEach((item, index) => {
      msg += `📝 *Questão ${(index + 1)}* (${item.activityTitle})\n`;
      msg += `❓ _${item.question}_\n`;
      msg += `✅ *R:* ${item.answer}\n\n`;
    });
    
    return msg;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;

    if (!teacherPhone || teacherPhone.length < 10) {
      alert("Por favor, configure o número do professor corretamente (DDD + Número).");
      setShowPhoneInput(true);
      return;
    }

    const text = formatMessage();
    const encodedText = encodeURIComponent(text);
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    
    // Adiciona o 55 (Brasil) antes do número
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
    const subject = `Atividade: ${studentName} - ${schoolClass} - ${getFormattedDate()}`;
    const body = formatMessage();
    window.location.href = `mailto:${teacherEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto max-w-3xl">
        
        {showPhoneInput && (
          <div className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200 animate-in fade-in slide-in-from-bottom-2">
            <label className="block text-sm font-bold text-yellow-800 mb-2">
              Configure o WhatsApp do Professor:
            </label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input 
                type="tel" 
                placeholder="DDD + Número (ex: 63999999999)"
                className="flex-1 p-2 border rounded-md border-yellow-400 focus:ring-2 focus:ring-yellow-500"
                value={teacherPhone}
                onChange={(e) => savePhone(e.target.value)}
              />
              <div className="flex gap-2">
                <button 
                  onClick={() => savePhone(DEFAULT_PHONE)}
                  className="bg-slate-200 text-slate-700 px-4 py-2 rounded-md font-semibold hover:bg-slate-300 text-sm"
                  title="Restaurar número padrão"
                >
                  Padrão
                </button>
                <button 
                  onClick={() => setShowPhoneInput(false)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded-md font-bold hover:bg-yellow-700 flex-1 sm:flex-none"
                >
                  Fechar
                </button>
              </div>
            </div>
            <p className="text-xs text-yellow-700 mt-2">Número atual configurado: {teacherPhone || "Nenhum"}</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          <div className="flex w-full space-x-2">
            
            <button
              onClick={handleCopy}
              className="flex-1 md:flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              title="Copiar Respostas"
            >
              {copyFeedback ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              <span className="hidden md:inline">{copyFeedback ? "Copiado" : "Copiar"}</span>
            </button>

             <button
              onClick={handleMailto}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              title="Enviar por E-mail"
            >
              <Mail className="w-5 h-5" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex-[2] bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Enviar WhatsApp</span>
            </button>

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