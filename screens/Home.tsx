import React from 'react';
import { Link } from 'react-router-dom';
import { curriculumData } from '../data';
import { ChevronRight, GraduationCap, User, ExternalLink, BookOpen } from 'lucide-react';

export const Home: React.FC = () => {
  
  // Imagens temáticas para cada série
  const gradeImages: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80", // Grécia/Antiguidade
    2: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80", // Justiça/Política/Livros
    3: "https://images.unsplash.com/photo-1499728603963-bc0922fae09c?auto=format&fit=crop&w=800&q=80", // Contemporâneo/Humano
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section com Imagem */}
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
            Portal de Filosofia
          </h2>
          <div className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto space-y-4 leading-relaxed font-light">
            <p>
              <span className="font-bold text-yellow-400">Atenção, estudante!</span> Selecione sua série abaixo para acessar conteúdos exclusivos, atividades e reflexões.
            </p>
            <p className="text-base opacity-90">
              Lembre-se: O envio da atividade deve ocorrer no dia da aula. Identifique-se corretamente para garantir sua presença e nota.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl -mt-10 relative z-10">
        {/* Seção Sobre o Professor - Versão Discreta */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/95 backdrop-blur shadow-xl rounded-xl p-6 text-slate-600 border border-slate-200">
           <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2 uppercase text-xs tracking-wider border-b border-slate-100 pb-2">
              <User className="w-4 h-4 text-tocantins-blue" />
              Sobre o Professor
            </h3>
            <div className="space-y-2 leading-relaxed text-justify text-sm md:text-base">
              <p>
                Olá, me chamo <strong>Divino Ribeiro Viana</strong>, natural de Porto Nacional-TO.
                Sou licenciado em Filosofia (UCB), bacharel em Teologia (FAJE), pós-graduado em Filosofia (UFT) e Educação (UCB), e mestre em Filosofia pela UFT.
                Atualmente, sou professor na rede estadual de educação do Tocantins.
              </p>
            </div>
            <div className="mt-4">
              <a 
                href="http://lattes.cnpq.br/7639474934278364" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-tocantins-blue hover:text-blue-800 font-semibold text-sm transition-colors group"
              >
                <ExternalLink className="w-3 h-3 mr-1 group-hover:scale-110 transition-transform" />
                Acessar Currículo Lattes
              </a>
            </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {curriculumData.map((grade) => (
            <Link 
              key={grade.id} 
              to={`/grade/${grade.id}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Imagem de Fundo do Card */}
              <div className="h-32 overflow-hidden relative">
                <div className={`absolute inset-0 ${grade.color} opacity-80 z-10 mix-blend-multiply transition-opacity group-hover:opacity-90`}></div>
                <img 
                  src={gradeImages[grade.id]} 
                  alt={grade.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20 flex items-end w-full">
                   <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-inner">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                   <ChevronRight className="w-6 h-6 text-tocantins-blue" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3 group-hover:text-tocantins-blue transition-colors">
                  {grade.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {grade.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-tocantins-blue">
                  Acessar Aulas
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};