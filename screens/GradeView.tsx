import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { curriculumData } from '../data';
import { Book, ArrowLeft, Calendar } from 'lucide-react';

export const GradeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const grade = curriculumData.find(g => g.id === Number(id));

  if (!grade) return <div className="p-8 text-center">Série não encontrada.</div>;

  // Imagens de cabeçalho maiores
  const headerImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=1920&q=80", // Ruínas Gregas / Natureza
    2: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80", // Tecnologia/Conexões/Ética Global
    3: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1920&q=80", // Abstrato/Luz/Existência
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header com Imagem e Título */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900">
        <img 
          src={headerImages[grade.id] || headerImages[1]} 
          alt={grade.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 container mx-auto px-4 py-8 flex flex-col justify-between">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white w-fit transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Início
          </Link>

          <div className="max-w-4xl pb-8">
            <span className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md`}>
              Conteúdo Programático
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md">
              {grade.title}
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl leading-relaxed font-light opacity-90">
              {grade.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl -mt-10 relative z-10">
        <div className="space-y-10">
          {grade.bimesters.map((bimester) => (
            <div key={bimester.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group">
              <div className="bg-slate-50/80 px-8 py-6 border-b border-slate-200 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${grade.color} bg-opacity-10 flex items-center justify-center text-2xl font-serif font-bold ${grade.color.replace('bg-', 'text-')}`}>
                  {bimester.id}º
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{bimester.title.split(':')[1] || bimester.title}</h3>
              </div>
              
              <div className="divide-y divide-slate-100">
                {bimester.lessons.length > 0 ? (
                  bimester.lessons.map((lesson) => (
                    <Link 
                      key={lesson.id} 
                      to={`/lesson/${lesson.id}`}
                      className="block px-8 py-5 hover:bg-blue-50/50 transition-all duration-300 flex items-center group/item"
                    >
                      <div className="mr-5 p-3 bg-white text-slate-400 shadow-sm border border-slate-200 rounded-xl group-hover/item:bg-tocantins-blue group-hover/item:text-white group-hover/item:border-transparent transition-all duration-300">
                        <Book className="w-5 h-5" />
                      </div>
                      <div className="flex-1 pr-4">
                        <h4 className="font-semibold text-slate-700 group-hover/item:text-tocantins-blue transition-colors text-lg">
                          {lesson.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {lesson.objectives.slice(0, 2).map((obj, i) => (
                            <span key={i} className="inline-block text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                              {obj.length > 50 ? obj.substring(0, 50) + '...' : obj}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-slate-300 group-hover/item:text-tocantins-blue transform group-hover/item:translate-x-1 transition-all">
                        <ArrowLeft className="w-5 h-5 rotate-180" />
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="px-8 py-10 text-center text-slate-400 flex flex-col items-center">
                    <Calendar className="w-12 h-12 mb-2 opacity-20" />
                    <p className="italic">Conteúdo programado para este bimestre.</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};