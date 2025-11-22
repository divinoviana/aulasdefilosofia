import React from 'react';
import { Link } from 'react-router-dom';
import { curriculumData } from '../data';
import { ChevronRight, GraduationCap, User, ExternalLink } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Bem-vindo ao Portal de Aulas de Filosofia</h2>
        <div className="text-slate-600 text-lg max-w-3xl mx-auto space-y-2">
          <p className="font-bold text-red-700 text-xl">Atenção, estudante!</p>
          <p>
            Selecione sua série para acessar os conteúdos, atividades e reflexões. Não se esqueça de colocar seu nome completo e a série. O envio da atividade só pode ocorrer no dia atual — nem antes, nem depois. As atividades são enviadas diretamente para o WhatsApp do professor, com o seu nome, a data e o horário do envio.
          </p>
        </div>
      </div>

      {/* Seção Sobre o Professor */}
      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 mb-12">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-center md:justify-start gap-2">
            <User className="w-5 h-5 text-tocantins-blue" />
            Sobre o Professor
          </h3>
          <div className="text-slate-700 leading-relaxed mb-6 text-justify md:text-left space-y-2">
            <p>
              Olá, me chamo <strong>Divino Ribeiro Viana</strong>, sou nascido na cidade de Porto Nacional-TO, tenho 41 anos.
            </p>
            <p>
              Sou licenciado em Filosofia pela Universidade Católica de Brasília. Bacharel em Teologia pela Faculdade Jesuíta. Pós-graduação em Filosofia pela Universidade Federal do Tocantins e em Educação pela Universidade Católica de Brasília. E mestre em Filosofia pela Universidade Federal do Tocantins.
            </p>
            <p>
              Atualmente, sou professor na rede estadual de educação do Estado do Tocantins.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <a 
              href="http://lattes.cnpq.br/7639474934278364" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-slate-100 text-tocantins-blue rounded-full font-semibold hover:bg-slate-200 hover:text-blue-800 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Acessar Currículo Lattes
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {curriculumData.map((grade) => (
          <Link 
            key={grade.id} 
            to={`/grade/${grade.id}`}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className={`h-3 ${grade.color} w-full`}></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${grade.color} bg-opacity-10`}>
                  <GraduationCap className={`w-6 h-6 ${grade.color.replace('bg-', 'text-')}`} />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{grade.title}</h3>
              <p className="text-slate-600 text-sm">{grade.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
