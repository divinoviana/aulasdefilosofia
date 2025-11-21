import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './screens/Home';
import { GradeView } from './screens/GradeView';
import { LessonView } from './screens/LessonView';

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
          </Routes>
        </main>
        <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm">
          <p>© 2024 Filosofia Conectada - Tocantins</p>
          <p className="mt-1">Desenvolvido para o ensino público de qualidade.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;