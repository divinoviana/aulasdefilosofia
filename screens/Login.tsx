
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, User, Lock, GraduationCap, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Login: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    school_class: '',
    grade: '1'
  });
  
  const [photo, setPhoto] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      alert("Erro ao acessar câmera: " + err);
    }
  };

  const takePhoto = () => {
    const canvas = document.createElement('canvas');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0);
      setPhoto(canvas.toDataURL('image/jpeg'));
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setCameraActive(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegistering) {
        if (!photo) throw new Error("A foto é obrigatória para o cadastro.");
        
        const { data, error } = await supabase
          .from('students')
          .insert([{ 
            name: formData.name, 
            email: formData.email, 
            password: formData.password, 
            school_class: formData.school_class,
            grade: formData.grade,
            photo_url: photo
          }]);
        
        if (error) throw error;
        alert("Cadastro realizado! Agora faça login.");
        setIsRegistering(false);
      } else {
        const { data, error } = await supabase
          .from('students')
          .select('*')
          .eq('email', formData.email)
          .eq('password', formData.password)
          .single();

        if (error || !data) throw new Error("Email ou senha incorretos.");
        
        localStorage.setItem('student', JSON.stringify(data));
        navigate('/');
      }
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getClassesByGrade = (grade: string) => {
    if (grade === '1') return Array.from({length: 6}, (_, i) => `13.0${i+1}`);
    if (grade === '2') return Array.from({length: 8}, (_, i) => `23.0${i+1}`);
    if (grade === '3') return Array.from({length: 9}, (_, i) => `33.0${i+1}`);
    return [];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <GraduationCap className="w-12 h-12 text-tocantins-blue mx-auto mb-2" />
          <h2 className="text-2xl font-bold text-slate-800">{isRegistering ? 'Criar Conta' : 'Acesso do Estudante'}</h2>
          <p className="text-slate-500 text-sm">Entre para acessar as atividades de Filosofia</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          {isRegistering && (
            <>
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg relative group">
                  {photo ? (
                    <img src={photo} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-full h-full p-6 text-slate-400" />
                  )}
                  {cameraActive && (
                    <video ref={videoRef} autoPlay className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>
                {!cameraActive ? (
                  <button type="button" onClick={startCamera} className="text-xs bg-slate-800 text-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Usar Câmera
                  </button>
                ) : (
                  <button type="button" onClick={takePhoto} className="text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                    Capturar Foto
                  </button>
                )}
              </div>

              <input required placeholder="Nome Completo" className="w-full p-3 border rounded-lg" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              
              <div className="grid grid-cols-2 gap-2">
                <select className="p-3 border rounded-lg" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})}>
                  <option value="1">1ª Série</option>
                  <option value="2">2ª Série</option>
                  <option value="3">3ª Série</option>
                </select>
                <select required className="p-3 border rounded-lg" value={formData.school_class} onChange={e => setFormData({...formData, school_class: e.target.value})}>
                  <option value="">Turma</option>
                  {getClassesByGrade(formData.grade).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </>
          )}

          <input required type="email" placeholder="E-mail" className="w-full p-3 border rounded-lg" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="password" placeholder="Senha" className="w-full p-3 border rounded-lg" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />

          <button disabled={loading} className="w-full bg-tocantins-blue text-white p-3 rounded-lg font-bold flex justify-center items-center gap-2">
            {loading ? <Loader2 className="animate-spin" /> : isRegistering ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>

        <button onClick={() => setIsRegistering(!isRegistering)} className="w-full mt-4 text-sm text-slate-500 hover:underline">
          {isRegistering ? 'Já tenho conta? Entrar' : 'Não tem conta? Cadastrar-se'}
        </button>
      </div>
    </div>
  );
};
