
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Users, BookOpen, Filter, Search, Trash2, Key, ChevronDown, UserSquare2, Check } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pass, setPass] = useState('');
  const [students, setStudents] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [tab, setTab] = useState<'students' | 'submissions' | 'photos'>('submissions');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterClass, setFilterClass] = useState('all');

  const checkAdmin = () => {
    // Senha mestre simples para o professor. No mundo real, use Supabase Auth.
    if (pass === 'prof-divino-2026') {
      setIsAdmin(true);
      fetchData();
    } else {
      alert("Senha incorreta");
    }
  };

  const fetchData = async () => {
    const { data: st } = await supabase.from('students').select('*').order('name');
    const { data: sub } = await supabase.from('submissions').select('*').order('created_at', { ascending: false });
    setStudents(st || []);
    setSubmissions(sub || []);
  };

  const deleteStudent = async (id: string) => {
    if (confirm("Excluir este aluno permanentemente?")) {
      await supabase.from('students').delete().eq('id', id);
      fetchData();
    }
  };

  const changePassword = async (id: string) => {
    const newPass = prompt("Nova senha:");
    if (newPass) {
      await supabase.from('students').update({ password: newPass }).eq('id', id);
      alert("Senha alterada!");
    }
  };

  const filteredSubmissions = submissions.filter(s => {
    const gradeMatch = filterGrade === 'all' || s.school_class.startsWith(filterGrade);
    const classMatch = filterClass === 'all' || s.school_class === filterClass;
    return gradeMatch && classMatch;
  });

  const filteredStudents = students.filter(s => {
    const gradeMatch = filterGrade === 'all' || s.grade === filterGrade;
    const classMatch = filterClass === 'all' || s.school_class === filterClass;
    return gradeMatch && classMatch;
  });

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4">Acesso Restrito</h2>
          <input type="password" placeholder="Senha do Professor" className="w-full p-3 border rounded-lg mb-4" value={pass} onChange={e => setPass(e.target.value)} />
          <button onClick={checkAdmin} className="w-full bg-slate-900 text-white p-3 rounded-lg font-bold">Acessar Painel</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
          <Key className="text-tocantins-yellow" /> Admin
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
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto max-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-slate-800">
            {tab === 'submissions' ? 'Atividades Recebidas' : tab === 'students' ? 'Gestão de Alunos' : 'Carômetro da Turma'}
          </h1>
          
          <div className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            <select className="bg-transparent text-sm font-bold p-1" value={filterGrade} onChange={e => setFilterGrade(e.target.value)}>
              <option value="all">Série: Todas</option>
              <option value="1">1ª Série</option>
              <option value="2">2ª Série</option>
              <option value="3">3ª Série</option>
            </select>
            <select className="bg-transparent text-sm font-bold p-1" value={filterClass} onChange={e => setFilterClass(e.target.value)}>
              <option value="all">Turma: Todas</option>
              {filterGrade !== 'all' && (
                filterGrade === '1' ? Array.from({length:6},(_,i)=>`13.0${i+1}`).map(c=><option key={c} value={c}>{c}</option>) :
                filterGrade === '2' ? Array.from({length:8},(_,i)=>`23.0${i+1}`).map(c=><option key={c} value={c}>{c}</option>) :
                Array.from({length:9},(_,i)=>`33.0${i+1}`).map(c=><option key={c} value={c}>{c}</option>)
              )}
            </select>
          </div>
        </div>

        {tab === 'submissions' && (
          <div className="grid gap-4">
            {filteredSubmissions.length === 0 && <p className="text-center py-20 text-slate-400">Nenhuma atividade encontrada com este filtro.</p>}
            {filteredSubmissions.map(sub => (
              <div key={sub.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{sub.student_name}</h3>
                    <p className="text-xs text-slate-500 uppercase font-bold">{sub.school_class} • {sub.lesson_title}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">Nota IA: {sub.score?.toFixed(1) || '-'}</span>
                    <p className="text-[10px] text-slate-400 mt-1">{new Date(sub.created_at).toLocaleString()}</p>
                  </div>
                </div>
                <div className="space-y-3 mt-4 border-t pt-4">
                  {sub.content.map((item: any, i: number) => (
                    <div key={i} className="text-sm">
                      <p className="font-bold text-slate-700 italic">Q: {item.question}</p>
                      <p className="text-slate-600 mt-1">R: {item.answer}</p>
                    </div>
                  ))}
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
                  <th className="p-4 text-xs font-bold uppercase text-slate-500">Email</th>
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredStudents.map(st => (
                  <tr key={st.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 flex items-center gap-3">
                      <img src={st.photo_url} className="w-8 h-8 rounded-full object-cover bg-slate-100" />
                      <span className="font-bold text-slate-700">{st.name}</span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 font-mono">{st.school_class}</td>
                    <td className="p-4 text-sm text-slate-600">{st.email}</td>
                    <td className="p-4 text-right space-x-2">
                      <button onClick={() => changePassword(st.id)} className="p-2 text-slate-400 hover:text-tocantins-blue"><Key size={18} /></button>
                      <button onClick={() => deleteStudent(st.id)} className="p-2 text-slate-400 hover:text-red-600"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'photos' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredStudents.map(st => (
              <div key={st.id} className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center group">
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-3 shadow-inner bg-slate-100">
                  <img src={st.photo_url} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <h4 className="text-sm font-bold text-slate-800 leading-tight">{st.name.split(' ')[0]}</h4>
                <p className="text-[10px] font-bold text-tocantins-blue mt-1 uppercase">{st.school_class}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
