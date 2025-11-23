import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from '../data';
import { ActivityInput } from '../components/ActivityInput';
import { SubmissionBar, SubmissionItem } from '../components/SubmissionBar';
import { ArrowLeft, CheckCircle, PenTool, BrainCircuit, BookOpen, Lightbulb, User, Bot, Sparkles } from 'lucide-react';
import { evaluateActivities, AIResponse } from '../services/aiService';
import { AIFeedbackModal } from '../components/AIFeedbackModal';

export const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  const getTodayString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  let foundLesson = null;
  let gradeTitle = "";
  let gradeId = 0;
  
  for (const g of curriculumData) {
    for (const b of g.bimesters) {
      const l = b.lessons.find(l => l.id === lessonId);
      if (l) {
        foundLesson = l;
        gradeTitle = g.title;
        gradeId = g.id;
        break;
      }
    }
    if (foundLesson) break;
  }

  const [studentName, setStudentName] = useState('');
  const [schoolClass, setSchoolClass] = useState('');
  const [submissionDate, setSubmissionDate] = useState(getTodayString());
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Estados para IA
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiData, setAiData] = useState<AIResponse | null>(null);

  // Função para determinar a imagem da aula baseada no título/conteúdo
  const lessonImage = useMemo(() => {
    if (!foundLesson) return "";
    const title = foundLesson.title.toLowerCase();

    // Mapeamento de palavras-chave para imagens do Unsplash
    if (title.includes("mito") || title.includes("grega")) return "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&w=1200&q=80";
    if (title.includes("tales") || title.includes("natureza")) return "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80";
    if (title.includes("heráclito") || title.includes("fogo")) return "https://images.unsplash.com/photo-1497419352677-182b3b385110?auto=format&fit=crop&w=1200&q=80";
    if (title.includes("sócrates")) return "https://images.unsplash.com/photo-1595124268382-b92545b40fa4?auto=format&fit=crop&w=1200&q=80"; // Estátua
    if (title.includes("platão") || title.includes("caverna")) return "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=1200&q=80"; // Caverna/Luz
    if (title.includes("aristóteles")) return "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1200&q=80"; // Paisagem grega clássica
    if (title.includes("medieval") || title.includes("agostinho") || title.includes("tomás")) return "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?auto=format&fit=crop&w=1200&q=80"; // Igreja/Vitral
    if (title.includes("descartes") || title.includes("moderna")) return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"; // Escrita/Ciência
    if (title.includes("maquiavel") || title.includes("política") || title.includes("poder")) return "https://images.unsplash.com/photo-1529101091760-6149d4c8dfa9?auto=format&fit=crop&w=1200&q=80"; // Xadrez/Estratégia
    if (title.includes("kant") || title.includes("ética") || title.includes("moral")) return "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80"; // Balança/Livros
    if (title.includes("marx") || title.includes("trabalho")) return "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"; // Industrial/Fábrica
    if (title.includes("nietzsche") || title.includes("existencialismo")) return "https://images.unsplash.com/photo-1484100356142-db6ab6244067?auto=format&fit=crop&w=1200&q=80"; // Montanha/Abismo
    if (title.includes("ciência") || title.includes("tecnologia")) return "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"; // Lab/Tech
    if (title.includes("ambiental") || title.includes("sustentabilidade")) return "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b7d?auto=format&fit=crop&w=1200&q=80"; // Floresta

    // Fallback por série
    if (gradeId === 1) return "https://images.unsplash.com/photo-1608447714925-599de75a6957?auto=format&fit=crop&w=1200&q=80"; // Busto
    if (gradeId === 2) return "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"; // Livros antigos
    if (gradeId === 3) return "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=1200&q=80"; // Contemporâneo

    return "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"; // Biblioteca genérica
  }, [foundLesson, gradeId]);


  if (!foundLesson) return <div className="p-8 text-center">Aula não encontrada.</div>;

  const handleAnswerChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const getSubmissionData = (): SubmissionItem[] => {
    if (!foundLesson) return [];
    const data: SubmissionItem[] = [];
    foundLesson.activities.forEach(activity => {
      activity.questions?.forEach((q, idx) => {
        const key = `${activity.id}-${idx}`;
        const answer = answers[key];
        if (answer && answer.trim()) {
          data.push({ activityTitle: activity.title, question: q, answer: answer });
        }
      });
    });
    foundLesson.reflectionQuestions.forEach((q, idx) => {
      const key = `reflexao-${idx}`;
      const answer = answers[key];
      if (answer && answer.trim()) {
        data.push({ activityTitle: "Reflexão Final", question: q, answer: answer });
      }
    });
    return data;
  };

  const handleAICorrection = async () => {
    const submissionData = getSubmissionData();
    if (submissionData.length === 0) {
      alert("Por favor, responda pelo menos uma questão antes de pedir a correção.");
      return;
    }

    if (!process.env.API_KEY) {
        alert("Chave de API não configurada. O professor deve configurar a variável de ambiente.");
        return;
    }

    setIsAIModalOpen(true);
    setAiLoading(true);
    setAiData(null);

    try {
      // Prepara os dados para a IA
      const questionsToEvaluate = submissionData.map(item => ({
        question: item.question,
        answer: item.answer
      }));

      const result = await evaluateActivities(
        foundLesson!.title,
        foundLesson!.theory,
        questionsToEvaluate
      );

      setAiData(result);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao conectar com a IA. Tente novamente mais tarde.");
      setIsAIModalOpen(false);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* Modal de Feedback da IA */}
      <AIFeedbackModal 
        isOpen={isAIModalOpen}
        isLoading={aiLoading}
        data={aiData}
        onClose={() => setIsAIModalOpen(false)}
      />

      {/* Hero Image da Aula */}
      <div className="relative h-60 lg:h-80 w-full overflow-hidden bg-slate-800 group">
        <div className="absolute inset-0 z-0">
          <img 
            src={lessonImage} 
            alt="Tema da aula" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-4xl">
           <Link to={`/grade/${lessonId?.split('-')[0]}`} className="inline-flex items-center text-white/90 hover:text-white mb-4 font-medium bg-black/30 w-fit px-3 py-1 rounded-full backdrop-blur-md border border-white/20 transition">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para {gradeTitle}
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg mb-2">
            {foundLesson.title.split(':')[1] || foundLesson.title}
          </h1>
          <p className="text-white/80 text-lg font-light uppercase tracking-widest flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Aula de Filosofia
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-20">
        
        {/* Card Principal de Conteúdo */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10 mb-8">
          
          <div className="flex flex-col md:flex-row gap-6 mb-10">
            <div className="flex-1">
               <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 h-full">
                <h3 className="flex items-center text-blue-800 font-bold mb-4 text-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Objetivos de Aprendizagem
                </h3>
                <ul className="space-y-3 text-slate-700">
                  {foundLesson.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                      <span className="text-sm md:text-base leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/3">
               <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full flex flex-col justify-center">
                  <h4 className="font-bold text-slate-700 mb-2 text-sm uppercase tracking-wide">Metodologia</h4>
                  <p className="text-slate-600 text-sm italic leading-relaxed">
                    "{foundLesson.methodology}"
                  </p>
               </div>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none mb-12">
            <h3 className="flex items-center text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">
              <BookOpen className="w-7 h-7 mr-3 text-indigo-600" />
              Conteúdo Teórico
            </h3>
            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border-l-4 border-indigo-500 whitespace-pre-wrap text-slate-700 leading-loose">
              {foundLesson.theory}
            </div>
          </div>

          {/* Seção de Identificação */}
          <div className="bg-yellow-50/80 backdrop-blur-sm border border-yellow-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-200 rounded-full opacity-50 blur-2xl"></div>
            <h3 className="text-xl font-bold text-yellow-900 mb-6 flex items-center gap-2 relative z-10">
               <User className="w-5 h-5" /> Identificação do Aluno
            </h3>
            <div className="grid gap-6 md:grid-cols-3 relative z-10">
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full p-3 border border-yellow-300 bg-white rounded-lg focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 outline-none transition shadow-sm"
                  placeholder="Nome completo"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">Turma/Escola</label>
                <input 
                  type="text" 
                  value={schoolClass}
                  onChange={(e) => setSchoolClass(e.target.value)}
                  className="w-full p-3 border border-yellow-300 bg-white rounded-lg focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 outline-none transition shadow-sm"
                  placeholder="Ex: 3º A - CEM..."
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-bold text-yellow-800 uppercase tracking-wider mb-2">Data do Envio</label>
                <input 
                  type="date" 
                  value={submissionDate}
                  min={getTodayString()}
                  max={getTodayString()}
                  onChange={(e) => setSubmissionDate(e.target.value)}
                  className="w-full p-3 border border-yellow-300 bg-white rounded-lg focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 outline-none cursor-pointer text-slate-700 font-medium shadow-sm"
                  onKeyDown={(e) => e.preventDefault()}
                />
                <p className="text-[10px] text-yellow-700 mt-1 font-bold uppercase text-right">Apenas hoje</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex flex-col mb-8">
              <h3 className="flex items-center text-2xl font-bold text-slate-800">
                <PenTool className="w-7 h-7 mr-3 text-green-600" />
                Atividades Práticas
              </h3>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold border border-red-100 w-fit">
                ⚠️ Responda com suas próprias palavras. Função "colar" desativada.
              </div>
            </div>
            <div className="space-y-8">
              {foundLesson.activities.map((activity) => (
                <div key={activity.id} className="bg-white p-1 rounded-2xl border-l-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 bg-slate-50/50 rounded-r-xl">
                    <h4 className="font-bold text-lg text-slate-800 mb-2 flex items-center gap-2">
                      {activity.title}
                    </h4>
                    <p className="text-slate-600 mb-6 text-sm">{activity.description}</p>
                    {activity.questions?.map((q, idx) => (
                      <ActivityInput
                        key={`${activity.id}-${idx}`}
                        questionId={`${activity.id}-${idx}`}
                        questionText={q}
                        value={answers[`${activity.id}-${idx}`] || ''}
                        onChange={(val) => handleAnswerChange(`${activity.id}-${idx}`, val)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col mb-8">
              <h3 className="flex items-center text-2xl font-bold text-slate-800">
                <BrainCircuit className="w-7 h-7 mr-3 text-purple-600" />
                Questões para Reflexão
              </h3>
            </div>
            <div className="bg-purple-50/50 p-8 rounded-3xl border border-purple-100 shadow-inner">
              {foundLesson.reflectionQuestions.map((q, idx) => (
                <div key={idx} className="mb-6 last:mb-0">
                  <ActivityInput
                    key={`reflexao-${idx}`}
                    questionId={`reflexao-${idx}`}
                    questionText={q}
                    value={answers[`reflexao-${idx}`] || ''}
                    onChange={(val) => handleAnswerChange(`reflexao-${idx}`, val)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Correção IA */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
               <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                 <Bot className="w-8 h-8 text-white" />
               </div>
               <div>
                 <h4 className="font-bold text-lg">Correção com Inteligência Artificial</h4>
                 <p className="text-indigo-100 text-sm opacity-90">Receba feedback imediato sobre suas respostas antes de enviar.</p>
               </div>
             </div>
             <button
               onClick={handleAICorrection}
               className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-3 px-6 rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
             >
               <Sparkles className="w-4 h-4" />
               Corrigir Agora
             </button>
          </div>

        </div>
      </div>

      <SubmissionBar 
        studentName={studentName}
        schoolClass={schoolClass}
        submissionDate={submissionDate}
        lessonTitle={foundLesson.title}
        submissionData={getSubmissionData()}
        aiData={aiData}
        theory={foundLesson.theory}
      />
    </div>
  );
};