import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from '../data';
import { ActivityInput } from '../components/ActivityInput';
import { SubmissionBar, SubmissionItem } from '../components/SubmissionBar';
import { ArrowLeft, CheckCircle, PenTool, BrainCircuit, BookOpen } from 'lucide-react';

export const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  // Função auxiliar para obter a data de hoje no formato YYYY-MM-DD (fuso local)
  const getTodayString = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  let foundLesson = null;
  let gradeTitle = "";
  
  for (const g of curriculumData) {
    for (const b of g.bimesters) {
      const l = b.lessons.find(l => l.id === lessonId);
      if (l) {
        foundLesson = l;
        gradeTitle = g.title;
        break;
      }
    }
    if (foundLesson) break;
  }

  const [studentName, setStudentName] = useState('');
  const [schoolClass, setSchoolClass] = useState('');
  // Inicia com a data de hoje
  const [submissionDate, setSubmissionDate] = useState(getTodayString());
  const [answers, setAnswers] = useState<Record<string, string>>({});

  if (!foundLesson) return <div className="p-8 text-center">Aula não encontrada.</div>;

  const handleAnswerChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const getSubmissionData = (): SubmissionItem[] => {
    if (!foundLesson) return [];
    
    const data: SubmissionItem[] = [];

    // Processar atividades normais
    foundLesson.activities.forEach(activity => {
      activity.questions?.forEach((q, idx) => {
        const key = `${activity.id}-${idx}`;
        const answer = answers[key];
        if (answer && answer.trim()) {
          data.push({
            activityTitle: activity.title,
            question: q,
            answer: answer
          });
        }
      });
    });

    // Processar questões de reflexão
    foundLesson.reflectionQuestions.forEach((q, idx) => {
      const key = `reflexao-${idx}`;
      const answer = answers[key];
      if (answer && answer.trim()) {
        data.push({
          activityTitle: "Reflexão Final",
          question: q,
          answer: answer
        });
      }
    });

    return data;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl pb-32">
      <Link to={`/grade/${lessonId?.split('-')[0]}`} className="inline-flex items-center text-slate-500 hover:text-tocantins-blue mb-6 font-medium">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar para {gradeTitle}
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6">{foundLesson.title}</h1>
        
        <div className="bg-blue-50 rounded-xl p-5 mb-8 border-l-4 border-blue-500">
          <h3 className="flex items-center text-blue-800 font-bold mb-3">
            <CheckCircle className="w-5 h-5 mr-2" />
            Objetivos de Aprendizagem
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            {foundLesson.objectives.map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>

        <div className="prose prose-slate max-w-none mb-10">
          <h3 className="flex items-center text-xl font-bold text-slate-800 mb-4 border-b pb-2">
            <BookOpen className="w-6 h-6 mr-2 text-indigo-600" />
            Conteúdo Teórico
          </h3>
          <div className="whitespace-pre-wrap text-slate-700 leading-relaxed text-lg">
            {foundLesson.theory}
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg mb-8 text-sm text-slate-600 italic border border-slate-200">
          <strong>Metodologia da aula:</strong> {foundLesson.methodology}
        </div>

        {/* Seção de Identificação - Destacada */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-10 shadow-sm">
          <h3 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
             Identificação do Aluno
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">Seu Nome</label>
              <input 
                type="text" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                placeholder="Nome completo"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">Turma/Escola</label>
              <input 
                type="text" 
                value={schoolClass}
                onChange={(e) => setSchoolClass(e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
                placeholder="Ex: 3º A"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-bold text-slate-700 mb-1">Data do Envio</label>
              <input 
                type="date" 
                value={submissionDate}
                min={getTodayString()} // Bloqueia passado
                max={getTodayString()} // Bloqueia futuro
                onChange={(e) => setSubmissionDate(e.target.value)}
                className="w-full p-2 border rounded-md text-slate-700 focus:ring-2 focus:ring-yellow-400 outline-none cursor-pointer bg-white"
                onKeyDown={(e) => e.preventDefault()} // Impede digitação manual para forçar uso do calendário restrito
              />
              <p className="text-xs text-slate-500 mt-1 font-semibold text-yellow-700">Apenas a data de hoje é permitida.</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="flex items-center text-2xl font-bold text-slate-800 mb-6">
            <PenTool className="w-6 h-6 mr-2 text-green-600" />
            Atividades Práticas
          </h3>
          <div className="space-y-6">
            {foundLesson.activities.map((activity) => (
              <div key={activity.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-lg text-slate-800 mb-2">{activity.title}</h4>
                <p className="text-slate-600 mb-4">{activity.description}</p>
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
            ))}
          </div>
        </div>

        <div>
          <h3 className="flex items-center text-2xl font-bold text-slate-800 mb-6">
            <BrainCircuit className="w-6 h-6 mr-2 text-purple-600" />
            Questões para Reflexão
          </h3>
          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            {foundLesson.reflectionQuestions.map((q, idx) => (
              <ActivityInput
                key={`reflexao-${idx}`}
                questionId={`reflexao-${idx}`}
                questionText={q}
                value={answers[`reflexao-${idx}`] || ''}
                onChange={(val) => handleAnswerChange(`reflexao-${idx}`, val)}
              />
            ))}
          </div>
        </div>

      </div>

      <SubmissionBar 
        studentName={studentName}
        schoolClass={schoolClass}
        submissionDate={submissionDate}
        lessonTitle={foundLesson.title}
        submissionData={getSubmissionData()}
      />
    </div>
  );
};