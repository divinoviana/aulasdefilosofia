
import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Database, Loader2, AlertTriangle } from 'lucide-react';
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
  aiData?: AIResponse | null;
  theory: string;
}

export const SubmissionBar: React.FC<Props> = ({ 
  studentName, 
  schoolClass, 
  submissionDate,
  lessonTitle, 
  submissionData,
  aiData,
  theory
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [dbStatus, setDbStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  const validate = () => {
    if (!studentName.trim() || !schoolClass.trim() || !submissionDate.trim()) {
      alert("Erro: Informações do aluno não encontradas. Tente fazer login novamente.");
      return false;
    }
    if (submissionData.length === 0) {
      alert("Por favor, responda pelo menos uma questão antes de enviar.");
      return false;
    }
    return true;
  };

  const handleInternalSend = async () => {
    if (!validate()) return;
    
    setIsGenerating(true);
    setDbStatus('saving');
    
    let currentAIData = aiData;
    const apiKey = process.env.API_KEY;

    // Se o aluno ainda não gerou feedback da IA, geramos automaticamente no envio para o professor ter a nota
    if (!currentAIData && apiKey && apiKey.length > 5) {
      try {
        const q = submissionData.map(item => ({ question: item.question, answer: item.answer }));
        currentAIData = await evaluateActivities(lessonTitle, theory, q);
      } catch (e) { 
        console.error("Erro na pré-avaliação da IA:", e); 
      }
    }

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
      alert("Atividade enviada com sucesso! O professor já pode visualizá-la no painel dele.");
    } catch (error) {
      console.error("Erro ao salvar no banco:", error);
      setDbStatus('error');
      alert("Ocorreu um erro ao enviar para o sistema. Verifique sua conexão.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center justify-between gap-4">
          
          <div className="flex-1 flex items-center gap-3">
             <div className={`p-2 rounded-lg ${dbStatus === 'saved' ? 'bg-green-100' : 'bg-slate-100'}`}>
                {dbStatus === 'saved' ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : dbStatus === 'error' ? (
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                ) : (
                  <Database className="w-5 h-5 text-slate-400" />
                )}
             </div>
             <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Status do Envio</p>
                <p className={`text-sm font-bold ${dbStatus === 'saved' ? 'text-green-600' : 'text-slate-600'}`}>
                  {dbStatus === 'saving' ? 'Enviando para o Professor...' : 
                   dbStatus === 'saved' ? 'Entregue ao Sistema' : 
                   dbStatus === 'error' ? 'Falha no Envio' : 'Pronto para Enviar'}
                </p>
             </div>
          </div>

          <button 
            onClick={handleInternalSend} 
            disabled={isGenerating || dbStatus === 'saved'} 
            className={`flex-grow md:flex-initial min-w-[200px] text-white font-bold py-4 px-8 rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 disabled:opacity-50 ${
              dbStatus === 'saved' ? 'bg-slate-400 cursor-not-allowed' : 'bg-tocantins-blue hover:bg-blue-800'
            }`}
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : dbStatus === 'saved' ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            <span>
              {isGenerating ? 'Enviando...' : 
               dbStatus === 'saved' ? 'Atividade Enviada' : 'Finalizar e Enviar Atividade'}
            </span>
          </button>
          
        </div>
      </div>
    </div>
  );
};
