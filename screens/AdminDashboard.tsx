
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Users, BookOpen, Trash2, Key, UserSquare2, Home, RefreshCw, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pass, setPass] = useState('');
  const [students, setStudents] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<'students' | 'submissions' | 'photos'>('submissions');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterClass, setFilterClass] = useState('all');

  const checkAdmin = () => {
    if (pass === '3614526312') {
      setIsAdmin(true);
      fetchData();
    } else {
      alert("Senha incorreta");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: st } = await supabase.from('students').select('*').order('name');
      const { data: sub } = await supabase.from('submissions').select('*').order('created_at', { ascending: false });
      setStudents(st || []);
      setSubmissions(sub || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (confirm("Excluir esta atividade permanentemente?")) {
      await supabase.from('submissions').delete().eq('id', id);
      fetchData();
    }
  };

  const sendFeedback = async (id: string) => {
    const feedback = prompt("Digite o feedback/retorno para o aluno:");
    if (feedback !== null) {
      const { error } = await supabase
        .from('submissions')
        .update({ teacher_feedback: feedback })
        .eq('id', id);
      
      if (error) alert("Erro ao enviar feedback");
      else {
        alert("Feedback enviado com sucesso!");
        fetchData();
      }
    }
  };

  const deleteStudent = async (id: string) => {
    if (confirm("Excluir este aluno e todas as suas atividades?")) {
      await supabase.from('students').delete().eq('id', id);
      fetchData();
    }
  };

  const filteredSubmissions = submissions.filter(s => {
    const sClass = s.school_class || "";
    const gradeMatch = filterGrade === 'all' || sClass.startsWith(filterGrade);
    const classMatch = filterClass === 'all' || sClass === filterClass;
    return gradeMatch && classMatch;
  });

  const filteredStudents = students.filter(s => {
    const sGrade = String(s.grade || "");
    const sClass = s.school_class || "";
    const gradeMatch = filterGrade === 'all' || sGrade === filterGrade;
    const classMatch = filterClass === 'all' || sClass === filterClass;
    return gradeMatch && classMatch;
  });

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Painel do Professor</h2>
          <input 
            type="password" 
            placeholder="Senha de Acesso" 
            className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-slate-400" 
            value={pass} 
            onChange={e => setPass(e.target.value)} 
            onKeyDown={e => e.key === 'Enter' && checkAdmin()}
          />
          <button onClick={checkAdmin} className="w-full bg-slate-900 text-white p-3 rounded-lg font-bold hover:bg-black transition">Entrar</button>
          <Link to="/" className="block text-center mt-6 text-slate-500 text-sm hover:underline">Voltar para o Portal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
          <Key className="text-tocantins-yellow" size={20} /> Professor
        </h2>
        <nav className="space-y-2">
          <button onClick={() => setTab('submissions')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${tab === 'submissions' ? 'bg-tocantins-blue text-white' : 'text-slate-400 hover:bg-white/10'}`}>
            <BookOpen size={20} /> Atividades
          </button>
          <button onClick={() => setTab('students')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${tab === 'students' ? 'bg-tocantins-blue text-white' : 'text-slate-400 hover:bg-white/10'}`}>
            <Users size={20} /> Estudantes
          </button>
          <button onClick={() => setTab('photos')} className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${tab === 'photos' ? 'bg-tocantins-blue text-white' : 'text-slate-400 hover:bg-white/10'}`}>
            <UserSquare2 size={20} /> Carômetro
          </button>
        </nav>
        <button onClick={fetchData} className="mt-8 w-full flex items-center justify-center gap-2 p-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition">
           <RefreshCw size={18} className={loading ? 'animate-spin' : ''} /> Atualizar
        </button>
        <div className="mt-auto pt-8 border-t border-white/10">
           <Link to="/" className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:text-white transition">
              <Home size={20} /> Início do Portal
           </Link>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              {tab === 'submissions' ? 'Gerenciar Atividades' : tab === 'students' ? 'Gerenciar Alunos' : 'Fotos da Turma'}
            </h1>
          </div>
          <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <select className="bg-transparent text-sm font-bold p-1 outline-none" value={filterGrade} onChange={e => setFilterGrade(e.target.value)}>
              <option value="all">Série</option>
              <option value="1">1ª Série</option>
              <option value="2">2ª Série</option>
              <option value="3">3ª Série</option>
            </select>
            <select className="bg-transparent text-sm font-bold p-1 outline-none" value={filterClass} onChange={e => setFilterClass(e.target.value)}>
              <option value="all">Turma</option>
              {filterGrade !== 'all' && (
                filterGrade === '1' ? Array.from({length:6},(_,i)=>`13.0${i+1}`).map(c=><option key={c} value={c}>{c}</option>) :
                filterGrade === '2' ? Array.from({length:8},(_,i)=>`23.0${i+1}`).map(c=><option key={c} value={c}>{c}</option>) :
                Array.from({length:9},(_,i)=>`33.0${i+1}`).map(c=><option key={c} value={c}>{c}</option>)
              )}
            </select>
          </div>
        </div>

        {tab === 'submissions' && (
          <div className="grid gap-6">
            {filteredSubmissions.map(sub => (
              <div key={sub.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{sub.student_name}</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase">{sub.school_class} • {sub.lesson_title}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => sendFeedback(sub.id)} className="flex items-center gap-1 bg-slate-100 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-bold transition">
                      <MessageSquare size={14} /> Feedback
                    </button>
                    <button onClick={() => deleteSubmission(sub.id)} className="bg-slate-100 hover:bg-red-100 text-red-600 p-2 rounded-lg transition">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Respostas</h4>
                    {Array.isArray(sub.content) && sub.content.map((item: any, i: number) => (
                      <div key={i} className="bg-slate-50 p-3 rounded-lg text-sm">
                        <p className="font-bold text-slate-700 italic">Q: {item.question}</p>
                        <p className="text-slate-600 mt-1">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Avaliação</h4>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-blue-800">Média da IA</span>
                        <span className="text-lg font-black text-blue-900">{sub.score?.toFixed(1) || '0.0'}</span>
                      </div>
                      <p className="text-xs text-blue-700 leading-relaxed italic line-clamp-3">
                        {sub.ai_feedback?.generalComment || 'Sem feedback da IA.'}
                      </p>
                    </div>
                    {sub.teacher_feedback && (
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <span className="text-xs font-bold text-green-800 block mb-1">Seu Retorno:</span>
                        <p className="text-sm text-green-900">{sub.teacher_feedback}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'students' && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             <table className="w-full text-left">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="p-4 text-xs font-bold uppercase text-slate-500">Estudante</th>
                    <th className="p-4 text-xs font-bold uppercase text-slate-500">Turma</th>
                    <th className="p-4 text-xs font-bold uppercase text-slate-500 text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredStudents.map(st => (
                    <tr key={st.id} className="hover:bg-slate-50 transition">
                      <td className="p-4 flex items-center gap-3">
                        <img src={st.photo_url} className="w-10 h-10 rounded-full object-cover border" />
                        <span className="font-bold text-slate-700">{st.name}</span>
                      </td>
                      <td className="p-4 text-sm text-slate-600">{st.school_class}</td>
                      <td className="p-4 text-right">
                        <button onClick={() => deleteStudent(st.id)} className="p-2 text-slate-400 hover:text-red-600 transition"><Trash2 size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
          </div>
        )}

        {tab === 'photos' && (
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {filteredStudents.map(st => (
              <div key={st.id} className="text-center">
                <img src={st.photo_url} className="w-full aspect-square object-cover rounded-xl border shadow-sm mb-2" />
                <p className="text-xs font-bold text-slate-700 line-clamp-1">{st.name.split(' ')[0]}</p>
                <p className="text-[10px] text-tocantins-blue font-bold">{st.school_class}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
