import React, { useState, useEffect } from 'react';
import { Send, Copy, CheckCircle, Settings, Mail, Sparkles, Loader2 } from 'lucide-react';
import { AIResponse, evaluateActivities } from '../services/aiService';

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
  aiData?: AIResponse | null;
  theory: string;
}

export const SubmissionBar: React.FC<Props> = ({ 
  studentName, 
  schoolClass, 
  submissionDate,
  lessonTitle, 
  submissionData,
  teacherEmail = "divinoviana@gmail.com",
  aiData,
  theory
}) => {
  const DEFAULT_PHONE = "63999191919";

  const [teacherPhone, setTeacherPhone] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem('teacherPhone');
      if (savedPhone) {
        setTeacherPhone(savedPhone);
      } else {
        setTeacherPhone(DEFAULT_PHONE);
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

    // Validação estrita da data (somente hoje)
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`;

    if (submissionDate !== todayStr) {
      alert(`A data de envio deve ser exatamente a data de hoje (${day}/${month}/${year}).\nO sistema não aceita envios retroativos ou antecipados.`);
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

  const formatMessage = (dataToUse: AIResponse | null | undefined) => {
    let msg = `*ATIVIDADE DE FILOSOFIA*\n`;
    msg += `📚 *Aula:* ${lessonTitle}\n`;
    msg += `👤 *Aluno:* ${studentName}\n`;
    msg += `🏫 *Turma:* ${schoolClass}\n`;
    msg += `📅 *Data:* ${getFormattedDate()}\n`;

    if (dataToUse && dataToUse.corrections.length > 0) {
       const totalScore = dataToUse.corrections.reduce((acc, curr) => acc + curr.score, 0);
       const avgScore = (totalScore / dataToUse.corrections.length).toFixed(1);
       msg += `👨‍🏫 *Nota do Professor:* ${avgScore}/10\n`;
    }

    msg += `--------------------------------\n\n`;
    
    submissionData.forEach((item, index) => {
      msg += `📝 *Questão ${(index + 1)}* - ${item.activityTitle}\n`;
      msg += `_${item.question}_\n`;
      msg += `*R:* ${item.answer}\n`;

      if (dataToUse && dataToUse.corrections && dataToUse.corrections[index]) {
          const c = dataToUse.corrections[index];
          // Formatação especial para parecer feedback direto do professor
          msg += `✍️ *Professor:* ${c.feedback} _(Nota: ${c.score})_\n`;
      }
      msg += `\n`;
    });

    if (dataToUse) {
        msg += `--------------------------------\n`;
        msg += `📜 *Parecer Geral do Professor:*\n_${dataToUse.generalComment}_\n`;
    }
    
    return msg;
  };

  const handleWhatsApp = async () => {
    if (!validate()) return;

    if (!teacherPhone || teacherPhone.length < 10) {
      alert("Por favor, configure o número do professor corretamente (DDD + Número).");
      setShowPhoneInput(true);
      return;
    }

    let currentAIData = aiData;

    // Se ainda não tiver feedback da IA, gera automaticamente antes de enviar
    if (!currentAIData) {
      setIsGenerating(true);
      try {
        const questionsForAI = submissionData.map(item => ({
          question: item.question,
          answer: item.answer
        }));
        
        currentAIData = await evaluateActivities(lessonTitle, theory, questionsForAI);
      } catch (error) {
        console.error("Erro na geração automática:", error);
        alert("Ocorreu um erro ao gerar a correção automática. A mensagem será enviada sem a correção.");
      } finally {
        setIsGenerating(false);
      }
    }

    const text = formatMessage(currentAIData);
    const encodedText = encodeURIComponent(text);
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    
    window.open(`${baseUrl}?phone=55${teacherPhone}&text=${encodedText}`, '_blank');
  };

  const handleCopy = () => {
    if (!validate()) return;
    const text = formatMessage(aiData);
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  };

  const handleMailto = () => {
    if (!validate()) return;
    const subject = `Atividade: ${studentName} - ${schoolClass} - ${getFormattedDate()}`;
    const body = formatMessage(aiData);
    window.location.href = `mailto:${teacherEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
      
      {/* Indicador Flutuante de Correção */}
      {aiData && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <Sparkles className="w-3 h-3 text-yellow-300" />
          Correção do Professor anexada ao envio
        </div>
      )}

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
              disabled={isGenerating}
              className="flex-1 md:flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              title="Copiar Respostas"
            >
              {copyFeedback ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              <span className="hidden md:inline">{copyFeedback ? "Copiado" : "Copiar"}</span>
            </button>

             <button
              onClick={handleMailto}
              disabled={isGenerating}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              title="Enviar por E-mail"
            >
              <Mail className="w-5 h-5" />
            </button>

            <button
              onClick={handleWhatsApp}
              disabled={isGenerating}
              className={`flex-[2] bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 ${isGenerating ? 'cursor-not-allowed opacity-80' : ''}`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analisando e Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar ao Professor</span>
                </>
              )}
            </button>

            <button 
              onClick={() => setShowPhoneInput(!showPhoneInput)}
              disabled={isGenerating}
              className="p-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition disabled:opacity-50"
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