
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Users, BookOpen, Trash2, Key, UserSquare2, Home, RefreshCw, MessageSquare, Send, Loader2, ArrowLeft, CheckCircle, AlertTriangle, FileText, Save, X } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pass, setPass] = useState('');
  const [students, setStudents] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<'students' | 'submissions' | 'photos' | 'messages'>('submissions');
  const [filterGrade, setFilterGrade] = useState('all');
  const [filterClass, setFilterClass] = useState('all');

  // Estados para Observações do Aluno
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [studentNote, setStudentNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);

  const [activeChatStudentId, setActiveChatStudentId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [sendingReply, setSendingReply] = useState(false);

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
      const [stRes, subRes, msgRes] = await Promise.all([
        supabase.from('students').select('*').order('name'),
        supabase.from('submissions').select('*').order('created_at', { ascending: false }),
        supabase.from('messages').select('*').order('created_at', { ascending: false })
      ]);
      
      if (stRes.error) throw stRes.error;
      if (subRes.error) throw subRes.error;
      if (msgRes.error) throw msgRes.error;

      setStudents(stRes.data || []);
      setSubmissions(subRes.data || []);
      setMessages(msgRes.data || []);
    } catch (e: any) {
      console.error("Erro ao buscar dados:", e);
      alert("Erro ao carregar dados do banco. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveStudentNote = async () => {
    if (!selectedStudent) return;
    setSavingNote(true);
    try {
      const { error } = await supabase
        .from('students')
        .update({ teacher_notes: studentNote })
        .eq('id', selectedStudent.id);

      if (error) throw error;
      
      setStudents(prev => prev.map(s => s.id === selectedStudent.id ? { ...s, teacher_notes: studentNote } : s));
      alert("Observação salva com sucesso!");
      setSelectedStudent(null);
    } catch (e: any) {
      alert("Erro ao salvar observação: " + e.message);
    } finally {
      setSavingNote(false);
    }
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Tem certeza que deseja apagar esta atividade permanentemente?")) return;
    const originalSubmissions = [...submissions];
    setSubmissions(prev => prev.filter(s => s.id !== id));
    try {
      const { error } = await supabase.from('submissions').delete().eq('id', id);
      if (error) throw error;
    } catch (e: any) {
      setSubmissions(originalSubmissions);
      alert("Erro ao excluir no servidor: " + e.message);
    }
  };

  const sendFeedback = async (id: string) => {
    const feedback = prompt("Digite seu feedback pedagógico para o aluno:");
    if (!feedback) return;
    try {
      const { error } = await supabase.from('submissions').update({ teacher_feedback: feedback }).eq('id', id);
      if (error) throw error;
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, teacher_feedback: feedback } : s));
      alert("Feedback salvo!");
    } catch (e: any) {
      alert("Erro ao salvar feedback: " + e.message);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !activeChatStudentId) return;
    setSendingReply(true);
    const student = students.find(s => s.id === activeChatStudentId);
    try {
      const { error } = await supabase.from('messages').insert([{
        sender_id: activeChatStudentId,
        sender_name: student?.name || 'Sistema',
        school_class: student?.school_class || 'N/A',
        grade: student?.grade || 'N/A',
        content: replyText.trim(),
        is_from_teacher: true
      }]);
      if (error) throw error;
      setReplyText('');
      fetchData(); 
    } catch (err: any) {
      alert("Erro ao enviar: " + err.message);
    } finally {
      setSendingReply(false);
    }
  };

  const filteredSubmissions = useMemo(() => {
    return submissions.filter(sub => {
      const gradeMatch = filterGrade === 'all' || sub.school_class.startsWith(filterGrade);
      const classMatch = filterClass === 'all' || sub.school_class === filterClass;
      return gradeMatch && classMatch;
    });
  }, [submissions, filterGrade, filterClass]);

  const filteredPhotos = useMemo(() => {
    return students.filter(s => {
      const gradeMatch = filterGrade === 'all' || s.grade === filterGrade;
      const classMatch = filterClass === 'all' || s.school_class === filterClass;
      return gradeMatch && classMatch;
    });
  }, [students, filterGrade, filterClass]);

  const chatGroups = useMemo(() => {
    const groups: Record<string, any> = {};
    messages.forEach(m => {
      if (!groups[m.sender_id]) {
        groups[m.sender_id] = {
          studentId: m.sender_id,
          studentName: m.sender_name,
          schoolClass: m.school_class,
          lastMessage: m.content,
          unread: !m.is_read && !m.is_from_teacher
        };
      }
    });
    return Object.values(groups).filter(g => filterGrade === 'all' || g.schoolClass.startsWith(filterGrade));
  }, [messages, filterGrade]);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full">
          <h2 className="text-xl font-bold mb-4 text-center">Painel do Professor</h2>
          <input type="password" placeholder="Chave Mestra" className="w-full p-4 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-tocantins-blue" value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === 'Enter' && checkAdmin()} />
          <button onClick={checkAdmin} className="w-full bg-tocantins-blue text-white p-4 rounded-xl font-bold hover:bg-blue-800 transition">Acessar Sistema</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans">
      {/* Modal de Observações do Aluno */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in duration-300">
            <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={selectedStudent.photo_url} className="w-12 h-12 rounded-full border-2 border-tocantins-yellow object-cover" />
                <div>
                  <h3 className="font-bold">{selectedStudent.name}</h3>
                  <p className="text-xs text-slate-400">{selectedStudent.school_class} • {selectedStudent.grade}ª Série</p>
                </div>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="p-2 hover:bg-white/10 rounded-full transition"><X size={20}/></button>
            </div>
            <div className="p-6">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Observações Privadas do Professor</label>
              <textarea 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-tocantins-blue outline-none transition min-h-[150px]"
                placeholder="Ex: Aluno participativo, apresenta dificuldades em lógica, etc..."
                value={studentNote}
                onChange={(e) => setStudentNote(e.target.value)}
              />
              <div className="mt-6 flex gap-2">
                <button 
                  onClick={handleSaveStudentNote}
                  disabled={savingNote}
                  className="flex-1 bg-tocantins-blue hover:bg-blue-800 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50"
                >
                  {savingNote ? <Loader2 className="animate-spin" size={18}/> : <Save size={18}/>}
                  Salvar Observações
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-tocantins-blue rounded-xl flex items-center justify-center mx-auto mb-2"><Key size={24}/></div>
          <h2 className="font-bold">Portal Admin</h2>
        </div>
        <nav className="space-y-1 flex-1">
          <button onClick={() => setTab('submissions')} className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm transition ${tab === 'submissions' ? 'bg-tocantins-blue' : 'text-slate-400 hover:bg-white/5'}`}><BookOpen size={18}/> Atividades</button>
          <button onClick={() => setTab('messages')} className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm transition ${tab === 'messages' ? 'bg-tocantins-blue' : 'text-slate-400 hover:bg-white/5'}`}><MessageSquare size={18}/> Mensagens</button>
          <button onClick={() => setTab('students')} className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm transition ${tab === 'students' ? 'bg-tocantins-blue' : 'text-slate-400 hover:bg-white/5'}`}><Users size={18}/> Estudantes</button>
          <button onClick={() => setTab('photos')} className={`w-full flex items-center gap-3 p-3 rounded-lg text-sm transition ${tab === 'photos' ? 'bg-tocantins-blue' : 'text-slate-400 hover:bg-white/5'}`}><UserSquare2 size={18}/> Carômetro</button>
        </nav>
        <div className="pt-4 border-t border-white/10 space-y-2">
          <button onClick={fetchData} className="w-full flex items-center justify-center gap-2 p-2 text-xs text-slate-500 hover:text-white transition"><RefreshCw size={14} className={loading ? 'animate-spin' : ''}/> Sincronizar</button>
          <Link to="/" className="w-full flex items-center justify-center gap-2 p-2 text-xs text-slate-500 hover:text-white transition"><Home size={14}/> Sair</Link>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800 capitalize">{tab}</h1>
          <div className="flex gap-2">
            <select className="p-2 border rounded-lg text-xs font-bold" value={filterGrade} onChange={e => setFilterGrade(e.target.value)}>
              <option value="all">Série</option><option value="1">1ª</option><option value="2">2ª</option><option value="3">3ª</option>
            </select>
            <select className="p-2 border rounded-lg text-xs font-bold" value={filterClass} onChange={e => setFilterClass(e.target.value)}>
              <option value="all">Turma</option>
              {Array.from(new Set(students.map(s => s.school_class))).sort().map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {loading && <div className="flex justify-center p-20"><Loader2 className="animate-spin text-tocantins-blue" size={40}/></div>}

        {!loading && tab === 'submissions' && (
          <div className="grid gap-4">
            {filteredSubmissions.length === 0 && <p className="text-center py-20 text-slate-400">Nenhuma atividade encontrada.</p>}
            {filteredSubmissions.map(sub => (
              <div key={sub.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-800">{sub.student_name}</h3>
                    <p className="text-[10px] text-tocantins-blue font-black">{sub.school_class} • {sub.lesson_title}</p>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => sendFeedback(sub.id)} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-bold hover:bg-blue-100 transition">FEEDBACK</button>
                    <button onClick={() => deleteSubmission(sub.id)} className="bg-red-50 text-red-500 p-1.5 rounded-lg hover:bg-red-100 transition"><Trash2 size={16}/></button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sub.content?.map((c: any, i: number) => (
                    <div key={i} className="p-3 bg-slate-50 rounded-xl text-xs border border-slate-100">
                      <p className="text-slate-400 mb-1 font-bold">P: {c.question}</p>
                      <p className="text-slate-700">R: {c.answer}</p>
                    </div>
                  ))}
                </div>
                {sub.teacher_feedback && (
                  <div className="p-3 bg-green-50 rounded-xl border border-green-100 text-[11px] text-green-700 italic">
                    <b>Seu Retorno:</b> "{sub.teacher_feedback}"
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {!loading && tab === 'photos' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredPhotos.length === 0 && <p className="col-span-full text-center py-20 text-slate-400 italic">Nenhum aluno nesta turma.</p>}
            {filteredPhotos.map(st => (
              <button 
                key={st.id} 
                onClick={() => {
                  setSelectedStudent(st);
                  setStudentNote(st.teacher_notes || '');
                }}
                className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200 text-center hover:-translate-y-1 transition group relative overflow-hidden"
              >
                <img src={st.photo_url} className="w-full aspect-square object-cover rounded-xl mb-3 grayscale group-hover:grayscale-0 transition duration-500" />
                <p className="text-xs font-bold text-slate-700 truncate">{st.name}</p>
                <p className="text-[10px] text-slate-400">{st.school_class}</p>
                {st.teacher_notes && (
                  <div className="absolute top-2 right-2 p-1 bg-tocantins-blue text-white rounded-full shadow-md animate-pulse">
                    <FileText size={10} />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {!loading && tab === 'messages' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[70vh] bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="border-r overflow-y-auto">
              {chatGroups.map(g => (
                <button key={g.studentId} onClick={() => setActiveChatStudentId(g.studentId)} className={`w-full text-left p-4 border-b hover:bg-slate-50 transition ${activeChatStudentId === g.studentId ? 'bg-blue-50 border-l-4 border-tocantins-blue' : ''}`}>
                  <p className="font-bold text-sm text-slate-800">{g.studentName}</p>
                  <p className="text-[10px] text-tocantins-blue font-bold">{g.schoolClass}</p>
                  <p className="text-xs text-slate-400 truncate mt-1">{g.lastMessage}</p>
                </button>
              ))}
            </div>
            <div className="lg:col-span-2 flex flex-col bg-slate-50/30">
              {activeChatStudentId ? (
                <>
                  <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {messages.filter(m => m.sender_id === activeChatStudentId).sort((a,b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).map(msg => (
                      <div key={msg.id} className={`flex ${msg.is_from_teacher ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${msg.is_from_teacher ? 'bg-tocantins-blue text-white rounded-tr-none' : 'bg-white border text-slate-700 rounded-tl-none'}`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendReply} className="p-4 bg-white border-t flex gap-2">
                    <input type="text" value={replyText} onChange={e => setReplyText(e.target.value)} placeholder="Responder..." className="flex-1 p-3 bg-slate-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-400"/>
                    <button disabled={sendingReply || !replyText.trim()} className="bg-tocantins-blue text-white p-3 rounded-xl transition disabled:opacity-50"><Send size={20}/></button>
                  </form>
                </>
              ) : <div className="flex-1 flex items-center justify-center text-slate-300">Escolha um aluno para conversar</div>}
            </div>
          </div>
        )}

        {!loading && tab === 'students' && (
           <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b">
                  <tr><th className="p-4 font-bold text-slate-400 uppercase text-[10px]">Aluno</th><th className="p-4 font-bold text-slate-400 uppercase text-[10px]">Turma</th><th className="p-4 text-right font-bold text-slate-400 uppercase text-[10px]">Ação</th></tr>
                </thead>
                <tbody className="divide-y">
                  {students.filter(s => filterGrade === 'all' || s.grade === filterGrade).map(st => (
                    <tr key={st.id} className="hover:bg-slate-50">
                      <td className="p-4 flex items-center gap-2 font-bold">
                        <img src={st.photo_url} className="w-8 h-8 rounded-full object-cover border" /> 
                        {st.name}
                        {st.teacher_notes && <FileText size={12} className="text-tocantins-blue" />}
                      </td>
                      <td className="p-4">{st.school_class}</td>
                      <td className="p-4 text-right"><button onClick={async () => { if(confirm("Apagar?")) { await supabase.from('students').delete().eq('id', st.id); fetchData(); } }} className="text-red-400 hover:text-red-600"><Trash2 size={16}/></button></td>
                    </tr>
                  ))}
                </tbody>
             </table>
           </div>
        )}
      </main>
    </div>
  );
};
