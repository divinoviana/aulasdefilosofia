
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { curriculumData } from '../data';
import { ActivityInput } from '../components/ActivityInput';
import { SubmissionBar, SubmissionItem } from '../components/SubmissionBar';
import { ArrowLeft, CheckCircle, PenTool, BrainCircuit, BookOpen, Lightbulb, User, Bot, Sparkles, Lock } from 'lucide-react';
import { evaluateActivities, AIResponse } from '../services/aiService';
import { AIFeedbackModal } from '../components/AIFeedbackModal';

export const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('student');
    if (!saved) {
      navigate('/login');
    } else {
      const data = JSON.parse(saved);
      setStudent(data);
      setStudentName(data.name);
      setSchoolClass(data.school_class);
    }
  }, [navigate]);

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

  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiData, setAiData] = useState<AIResponse | null>(null);

  const lessonImage = useMemo(() => {
    if (!foundLesson) return "";
    return "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80";
  }, [foundLesson]);

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
    return data;
  };

  const handleAICorrection = async () => {
    const subData = getSubmissionData();
    if (subData.length === 0) return;
    setIsAIModalOpen(true);
    setAiLoading(true);
    try {
      const result = await evaluateActivities(foundLesson!.title, foundLesson!.theory, subData.map(d => ({question: d.question, answer: d.answer})));
      setAiData(result);
    } catch (e) { alert("Erro na correção."); setIsAIModalOpen(false); }
    finally { setAiLoading(false); }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      <AIFeedbackModal isOpen={isAIModalOpen} isLoading={aiLoading} data={aiData} onClose={() => setIsAIModalOpen(false)} />
      <div className="relative h-60 w-full overflow-hidden bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-4xl">
           <Link to="/" className="inline-flex items-center text-white/90 mb-4 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md">
            <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
          </Link>
          <h1 className="text-3xl font-bold text-white">{foundLesson.title}</h1>
          {student && (
            <div className="flex items-center gap-2 mt-4 text-white/90 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
               <img src={student.photo_url} className="w-6 h-6 rounded-full object-cover" />
               <span className="text-xs font-bold uppercase">{student.name} • {student.school_class}</span>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-10 mb-8">
          <div className="prose prose-slate prose-lg max-w-none mb-12">
            <h3 className="flex items-center text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">
              <BookOpen className="w-7 h-7 mr-3 text-indigo-600" /> Teoria
            </h3>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-indigo-500 whitespace-pre-wrap text-slate-700">
              {foundLesson.theory}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="flex items-center text-2xl font-bold text-slate-800 mb-8">
              <PenTool className="w-7 h-7 mr-3 text-green-600" /> Atividades
            </h3>
            <div className="space-y-8">
              {foundLesson.activities.map((activity) => (
                <div key={activity.id} className="p-6 bg-slate-50/50 rounded-xl border border-slate-200">
                  <h4 className="font-bold mb-4">{activity.title}</h4>
                  {activity.questions?.map((q, idx) => (
                    <ActivityInput key={`${activity.id}-${idx}`} questionId={`${activity.id}-${idx}`} questionText={q} value={answers[`${activity.id}-${idx}`] || ''} onChange={(val) => handleAnswerChange(`${activity.id}-${idx}`, val)} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleAICorrection} className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg">
            <Sparkles size={20} /> Analisar Respostas com IA
          </button>
        </div>
      </div>

      <SubmissionBar studentName={studentName} schoolClass={schoolClass} submissionDate={submissionDate} lessonTitle={foundLesson.title} submissionData={getSubmissionData()} aiData={aiData} theory={foundLesson.theory} />
    </div>
  );
};
