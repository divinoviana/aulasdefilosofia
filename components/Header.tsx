import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition">
          <BookOpen className="w-8 h-8 text-tocantins-yellow" />
          <div>
            <h1 className="text-xl font-bold leading-tight">Filosofia Conectada</h1>
            <p className="text-xs text-slate-400">Ensino Médio - Tocantins</p>
          </div>
        </Link>
      </div>
    </header>
  );
};