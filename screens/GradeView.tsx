import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from '../data';
import { Book, ArrowLeft } from 'lucide-react';

export const GradeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const grade = curriculumData.find(g => g.id === Number(id));

  if (!grade) return <div className="p-8 text-center">Série não encontrada.</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-flex items-center text-slate-500 hover:text-tocantins-blue mb-6 font-medium">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
      </Link>
      
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-slate-800">{grade.title}</h2>
        <p className="text-slate-600 mt-2">{grade.description}</p>
      </div>

      <div className="space-y-8">
        {grade.bimesters.map((bimester) => (
          <div key={bimester.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-800">{bimester.title}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {bimester.lessons.length > 0 ? (
                bimester.lessons.map((lesson) => (
                  <Link 
                    key={lesson.id} 
                    to={`/lesson/${lesson.id}`}
                    className="block px-6 py-4 hover:bg-slate-50 transition-colors flex items-center group"
                  >
                    <div className="mr-4 p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-100 transition">
                      <Book className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 group-hover:text-indigo-700 transition">
                        {lesson.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                      Acessar
                    </span>
                  </Link>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-slate-400 italic">
                  Conteúdo em breve...
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};