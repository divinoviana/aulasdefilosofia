import React from 'react';

interface Props {
  questionId: string;
  questionText: string;
  value: string;
  onChange: (val: string) => void;
}

export const ActivityInput: React.FC<Props> = ({ questionId, questionText, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-slate-700 font-semibold mb-2 text-sm">
        {questionText}
      </label>
      <textarea
        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-tocantins-blue focus:border-transparent bg-white shadow-sm transition-all"
        rows={3}
        placeholder="Digite sua resposta aqui..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};