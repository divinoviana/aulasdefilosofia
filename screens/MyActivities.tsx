
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowLeft, BookCheck, Star, MessageSquare, Clock, Camera, Upload, Check, X, User } from 'lucide-react';

export const MyActivities: React.FC = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Estados para edição de foto
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [tempPhoto, setTempPhoto] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('student');
    if (!saved) {
      navigate('/login');
      return;
    }
    const studentData = JSON.parse(saved);
    setStudent(studentData);
    fetchMySubmissions(studentData.name, studentData.school_class);
  }, [navigate]);

  const fetchMySubmissions = async (name: string, sClass: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('submissions')
        .select('*')
        .eq('student_name', name)
        .eq('school_class', sClass)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: 640, height: 640 } 
      });
      streamRef.current = stream;
      setCameraActive(true);
      setTimeout(() => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      }, 100);
    } catch (err) {
      alert("Não foi possível acessar a câmera.");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setTempPhoto(canvas.toDataURL('image/jpeg', 0.8));
        stopCamera();
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setTempPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const saveNewPhoto = async () => {
    if (!tempPhoto || !student) return;
    setUploading(true);
    try {
      const { error } = await supabase
        .from('students')
        .update({ photo_url: tempPhoto })
        .eq('id', student.id);

      if (error) throw error;

      // Atualiza localmente
      const updatedStudent = { ...student, photo_url: tempPhoto };
      localStorage.setItem('student', JSON.stringify(updatedStudent));
      setStudent(updatedStudent);
      setIsEditingPhoto(false);
      setTempPhoto(null);
      alert("Foto de perfil atualizada com sucesso!");
    } catch (err) {
      alert("Erro ao salvar foto.");
    } finally {
      setUploading(false);
    }
  };

  if (!student) return null;

  return (
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <div className="bg-slate-900 text-white pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Início
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-800 shadow-2xl">
                <img src={student.photo_url} className="w-full h-full object-cover" alt="Perfil" />
              </div>
              <button 
                onClick={() => setIsEditingPhoto(true)}
                className="absolute bottom-0 right-0 bg-tocantins-blue p-2 rounded-full shadow-lg text-white hover:bg-blue-600 transition transform hover:scale-110"
                title="Trocar Foto"
              >
                <Camera size={18} />
              </button>
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
                <BookCheck className="text-tocantins-yellow" size={32} />
                Minhas Atividades
              </h1>
              <p className="text-slate-400 mt-2 font-medium">{student.name} • {student.school_class}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Troca de Foto */}
      {isEditingPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800">Trocar Foto de Perfil</h3>
              <button onClick={() => { setIsEditingPhoto(false); stopCamera(); setTempPhoto(null); }} className="text-slate-400 hover:text-red-500">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-48 h-48 rounded-full bg-slate-100 overflow-hidden border-4 border-slate-50 shadow-inner flex items-center justify-center relative">
                {cameraActive ? (
                  <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover scale-x-[-1]" />
                ) : tempPhoto ? (
                  <img src={tempPhoto} className="w-full h-full object-cover" alt="Prévia" />
                ) : (
                  <User className="w-20 h-20 text-slate-200" />
                )}
              </div>

              <div className="w-full space-y-3">
                {!cameraActive ? (
                  <div className="flex gap-2">
                    <button onClick={startCamera} className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 text-white rounded-xl font-bold text-sm hover:bg-black transition">
                      <Camera size={18} /> Câmera
                    </button>
                    <label className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 cursor-pointer transition">
                      <Upload size={18} /> Arquivo
                      <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                    </label>
                  </div>
                ) : (
                  <button onClick={takePhoto} className="w-full py-3 bg-tocantins-blue text-white rounded-xl font-bold flex items-center justify-center gap-2">
                    <Check size={20} /> Capturar Agora
                  </button>
                )}

                {tempPhoto && !cameraActive && (
                  <button 
                    onClick={saveNewPhoto} 
                    disabled={uploading}
                    className="w-full py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {uploading ? "Salvando..." : "Confirmar Nova Foto"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-4xl px-4 -mt-8 relative z-10">
        {loading ? (
          <div className="text-center py-20 text-slate-400 bg-white rounded-3xl shadow-sm border">Carregando seu histórico...</div>
        ) : submissions.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center shadow-sm">
            <Clock className="mx-auto text-slate-300 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-800">Nenhuma atividade entregue</h3>
            <p className="text-slate-500 mt-2">As atividades que você realizar aparecerão aqui após o envio.</p>
            <Link to="/" className="inline-block mt-6 bg-tocantins-blue text-white px-8 py-3 rounded-xl font-bold">
              Ir para as Aulas
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {submissions.map(sub => (
              <div key={sub.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{sub.lesson_title}</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase mt-1">
                      Entregue em: {new Date(sub.created_at).toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="bg-blue-50 px-4 py-2 rounded-xl text-center min-w-[100px]">
                    <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">Nota IA</p>
                    <p className="text-xl font-black text-blue-900">{sub.score?.toFixed(1) || '0.0'}</p>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {sub.teacher_feedback ? (
                    <div className="bg-green-50 p-5 rounded-2xl border border-green-100 flex gap-4">
                      <div className="p-2 bg-green-200 rounded-lg h-fit">
                        <MessageSquare className="text-green-700" size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 mb-1">Feedback do Professor</h4>
                        <p className="text-green-900 text-sm leading-relaxed">{sub.teacher_feedback}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-500 text-sm italic">
                      Aguardando feedback manual do professor.
                    </div>
                  )}

                  <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
                      <Star className="text-indigo-400" size={18} /> Comentário da IA
                    </h4>
                    <p className="text-indigo-900/80 text-sm italic leading-relaxed">
                      "{sub.ai_feedback?.generalComment || 'Sem comentários adicionais da IA.'}"
                    </p>
                  </div>

                  <details className="group">
                    <summary className="text-sm font-bold text-slate-400 hover:text-slate-600 cursor-pointer list-none flex items-center gap-2">
                      <span className="transition-transform group-open:rotate-90">▶</span> Ver minhas respostas enviadas
                    </summary>
                    <div className="mt-4 space-y-3 pt-4 border-t">
                      {sub.content?.map((item: any, i: number) => (
                        <div key={i} className="text-sm">
                          <p className="font-bold text-slate-700 italic">P: {item.question}</p>
                          <p className="text-slate-600 mt-1">R: {item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
