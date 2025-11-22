import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './screens/Home';
import { GradeView } from './screens/GradeView';
import { LessonView } from './screens/LessonView';
import { Contact } from './screens/Contact';
import { Mail } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grade/:id" element={<GradeView />} />
            <Route path="/lesson/:lessonId" element={<LessonView />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
          <div className="container mx-auto px-4">
            <p className="mb-1">© 2026 Filosofia no Ensino Médio - Tocantins</p>
            <p className="mb-4">Desenvolvido por: Prof. Me. Divino Ribeiro Viana</p>
            
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-tocantins-yellow hover:bg-slate-700 hover:text-yellow-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Entre em contato com o Professor
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;