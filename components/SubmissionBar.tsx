
import React, { useState, useEffect } from 'react';
import { Send, Copy, CheckCircle, Settings, Mail, Sparkles, Loader2, Database } from 'lucide-react';
import { AIResponse, evaluateActivities } from '../services/aiService';
import { supabase } from '../lib/supabase';

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
  teacherEmail = "divino.viana@professor.to.gov.br",
  aiData,
  theory
}) => {
  const DEFAULT_PHONE = "63981127876";

  const [teacherPhone, setTeacherPhone] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dbStatus, setDbStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  useEffect(() => {
    try {
      const savedPhone = localStorage.getItem('teacherPhone');
      if (savedPhone) {
        setTeacherPhone(savedPhone);
      } else {
        setTeacherPhone(DEFAULT_PHONE);
      }
    } catch (error) {
      setTeacherPhone(DEFAULT_PHONE);
    }
  }, []);

  const savePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    setTeacherPhone(cleanPhone);
    localStorage.setItem('teacherPhone', cleanPhone);
  };

  const validate = () => {
    if (!studentName.trim() || !schoolClass.trim() || !submissionDate.trim()) {
      alert("Por favor, preencha nome, turma e data.");
      return false;
    }
    if (submissionData.length === 0) {
      alert("Responda pelo menos uma questão.");
      return false;
    }
    return true;
  };

  const saveToSupabase = async (currentAIData: AIResponse | null) => {
    setDbStatus('saving');
    try {
      const { error } = await supabase
        .from('submissions')
        .insert([
          {
            student_name: studentName,
            school_class: schoolClass,
            lesson_title: lessonTitle,
            submission_date: submissionDate,
            content: submissionData,
            ai_feedback: currentAIData,
            score: currentAIData ? currentAIData.corrections.reduce((acc, c) => acc + c.score, 0) / currentAIData.corrections.length : null
          }
        ]);

      if (error) throw error;
      setDbStatus('saved');
      return true;
    } catch (error) {
      console.error("Erro ao salvar no banco:", error);
      setDbStatus('error');
      return false;
    }
  };

  const formatMessage = (dataToUse: AIResponse | null | undefined) => {
    let msg = `*ATIVIDADE DE FILOSOFIA*\n`;
    msg += `📚 *Aula:* ${lessonTitle}\n👤 *Aluno:* ${studentName}\n🏫 *Turma:* ${schoolClass}\n📅 *Data:* ${submissionDate}\n`;
    if (dataToUse) msg += `👨‍🏫 *Nota IA:* ${(dataToUse.corrections.reduce((a,c)=>a+c.score,0)/dataToUse.corrections.length).toFixed(1)}/10\n`;
    msg += `--------------------------------\n\n`;
    submissionData.forEach((item, i) => {
      msg += `📝 *Q${i+1}* - _${item.question}_\n*R:* ${item.answer}\n`;
      if (dataToUse?.corrections[i]) msg += `✍️ *Feedback:* ${dataToUse.corrections[i].feedback}\n`;
      msg += `\n`;
    });
    return msg;
  };

  const handleWhatsApp = async () => {
    if (!validate()) return;
    
    setIsGenerating(true);
    let currentAIData = aiData;
    const apiKey = process.env.API_KEY;

    if (!currentAIData && apiKey && apiKey.length > 5) {
      try {
        const q = submissionData.map(item => ({ question: item.question, answer: item.answer }));
        currentAIData = await evaluateActivities(lessonTitle, theory, q);
      } catch (e) { console.error(e); }
    }

    // Salva no banco de dados do professor antes de abrir o WhatsApp
    await saveToSupabase(currentAIData);

    const text = formatMessage(currentAIData);
    const encodedText = encodeURIComponent(text);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
    
    setIsGenerating(false);
    window.open(`${baseUrl}?phone=55${teacherPhone}&text=${encodedText}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto max-w-3xl">
        {showPhoneInput && (
          <div className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <label className="block text-sm font-bold text-yellow-800 mb-2">WhatsApp do Professor:</label>
            <div className="flex gap-2">
              <input type="tel" className="flex-1 p-2 border rounded-md" value={teacherPhone} onChange={(e) => savePhone(e.target.value)} />
              <button onClick={() => setShowPhoneInput(false)} className="bg-yellow-600 text-white px-4 py-2 rounded-md font-bold">Salvar</button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex w-full space-x-2">
            <div className={`flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-colors ${
              dbStatus === 'saved' ? 'bg-green-100 text-green-600' : 
              dbStatus === 'error' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-400'
            }`}>
              <Database className="w-3 h-3 mr-1" />
              {dbStatus === 'saving' ? 'Salvando...' : dbStatus === 'saved' ? 'Registrado' : 'Offline'}
            </div>

            <button onClick={handleWhatsApp} disabled={isGenerating} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-50">
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              <span>{isGenerating ? 'Processando...' : 'Enviar Atividade'}</span>
            </button>

            <button onClick={() => setShowPhoneInput(!showPhoneInput)} className="p-3 text-slate-400 hover:bg-slate-100 rounded-xl">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
