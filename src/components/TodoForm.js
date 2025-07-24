// src/components/TodoForm.jsx
import React, { useState, useEffect } from 'react';

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState(() => {
    const saved = localStorage.getItem('text');
    return saved ? JSON.parse(saved) : '';
  });

  useEffect(() => {
    localStorage.setItem('text', JSON.stringify(text));
  }, [text]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nueva tarea..."
        className="flex-1 p-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 rounded-r-md hover:bg-indigo-700 transition"
      >
        Añadir
      </button>
    </form>
  );
}
