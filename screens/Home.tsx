
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { curriculumData } from '../data';
import { ChevronRight, GraduationCap, User, ExternalLink, BookOpen, Lock } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('student');
    if (!saved) {
      navigate('/login');
    } else {
      setStudent(JSON.parse(saved));
    }
  }, [navigate]);

  // Imagens temáticas para cada série
  const gradeImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80",
    2: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
    3: "https://images.unsplash.com/photo-1499728603963-bc0922fae09c?auto=format&fit=crop&w=800&q=80",
  };

  // Filtra o currículo baseado na série do estudante logado
  const filteredCurriculum = curriculumData.filter(grade => 
    student ? grade.id === Number(student.grade) : true
  );

  if (!student) return null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80" 
            alt="Biblioteca Filosófica" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <BookOpen className="w-8 h-8 text-tocantins-yellow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white tracking-tight drop-shadow-lg">
            Olá, {student.name.split(' ')[0]}!
          </h2>
          <div className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto space-y-4 leading-relaxed font-light">
            <p>
              Você está acessando os conteúdos da <span className="font-bold text-yellow-400">{student.grade}ª Série - Turma {student.school_class}</span>.
            </p>
            <p className="text-sm opacity-80">
              O acesso a outras séries foi restrito para garantir seu foco no cronograma letivo.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl -mt-10 relative z-10">
        <div className="grid gap-8 justify-center">
          {filteredCurriculum.map((grade) => (
            <Link 
              key={grade.id} 
              to={`/grade/${grade.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full max-w-2xl transform hover:-translate-y-1 border border-slate-200"
            >
              <div className="h-48 md:h-auto md:w-64 overflow-hidden relative">
                <div className={`absolute inset-0 ${grade.color} opacity-80 z-10 mix-blend-multiply`}></div>
                <img 
                  src={gradeImages[grade.id]} 
                  alt={grade.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <GraduationCap className="w-12 h-12 text-white opacity-50" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative">
                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-4 group-hover:text-tocantins-blue transition-colors">
                  {grade.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {grade.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-bold text-tocantins-blue">
                  Acessar Bimesteres e Aulas <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Informações do Professor */}
        <div className="max-w-2xl mx-auto mt-16 bg-white shadow-xl rounded-2xl p-8 text-slate-600 border border-slate-200">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase text-xs tracking-wider border-b border-slate-100 pb-2">
              <User className="w-4 h-4 text-tocantins-blue" />
              Docente Responsável
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-justify mb-4">
              <strong>Prof. Me. Divino Ribeiro Viana</strong>. Especialista em Filosofia e Mestre pela UFT.
              Dúvidas sobre o conteúdo de sua série podem ser sanadas via aba de contato.
            </p>
            <a href="http://lattes.cnpq.br/7639474934278364" target="_blank" className="text-tocantins-blue hover:underline text-sm font-bold">Currículo Lattes</a>
        </div>
      </div>
    </div>
  );
};
