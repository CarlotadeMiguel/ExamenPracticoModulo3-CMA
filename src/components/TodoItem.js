// src/components/TodoItem.jsx
import React from 'react';

export default function TodoItem({ text, onDelete, index }) {
  return (
    <li className="flex justify-between items-center bg-white dark:bg-gray-800 p-2 mb-2 rounded shadow">
      <span className="text-gray-800 dark:text-gray-200">{text}</span>
      <button
        onClick={() => onDelete(index)}
        className="text-red-500 hover:text-red-700"
        aria-label={`Eliminar tarea ${text}`}
      >
        ✕
      </button>
    </li>
  );
}
