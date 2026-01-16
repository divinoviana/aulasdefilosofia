
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { curriculumData } from '../data';
import { Book, ArrowLeft, Calendar, ShieldAlert } from 'lucide-react';

export const GradeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  
  const grade = curriculumData.find(g => g.id === Number(id));

  useEffect(() => {
    const saved = localStorage.getItem('student');
    if (!saved) {
      navigate('/login');
      return;
    }
    
    const student = JSON.parse(saved);
    if (Number(student.grade) !== Number(id)) {
      setIsAuthorized(false);
    } else {
      setIsAuthorized(true);
    }
  }, [id, navigate]);

  if (isAuthorized === false) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md text-center border border-red-100">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-10 h-10 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Acesso Restrito</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Você está cadastrado na série correspondente ao seu ano letivo. O acesso a outras séries não é permitido.
          </p>
          <Link to="/" className="inline-block w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-black transition">
            Voltar para Minha Série
          </Link>
        </div>
      </div>
    );
  }

  if (!grade || isAuthorized === null) return null;

  const headerImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1920&q=80",
    2: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    3: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=80",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900">
        <img 
          src={headerImages[grade.id] || headerImages[1]} 
          alt={grade.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 container mx-auto px-4 py-8 flex flex-col justify-between">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white w-fit transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
          </Link>

          <div className="max-w-4xl pb-8">
            <span className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md`}>
              {grade.title} • Trilhas de Aprendizagem
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md">
              Conteúdos e Atividades
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl -mt-10 relative z-10">
        <div className="space-y-10">
          {grade.bimesters.map((bimester) => (
            <div key={bimester.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-slate-50/80 px-8 py-6 border-b border-slate-200 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${grade.color} bg-opacity-20 flex items-center justify-center text-2xl font-serif font-bold ${grade.color.replace('bg-', 'text-')}`}>
                  {bimester.id}º
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{bimester.title.split(':')[1] || bimester.title}</h3>
              </div>
              
              <div className="divide-y divide-slate-100">
                {bimester.lessons.map((lesson) => (
                  <Link 
                    key={lesson.id} 
                    to={`/lesson/${lesson.id}`}
                    className="block px-8 py-5 hover:bg-blue-50/50 transition-all duration-300 flex items-center group"
                  >
                    <div className="mr-5 p-3 bg-white text-slate-400 shadow-sm border border-slate-200 rounded-xl group-hover:bg-tocantins-blue group-hover:text-white transition-all">
                      <Book className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-700 group-hover:text-tocantins-blue transition-colors text-lg">
                        {lesson.title}
                      </h4>
                    </div>
                    <ArrowLeft className="w-5 h-5 rotate-180 text-slate-300 group-hover:text-tocantins-blue transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
