// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete }) {
  if (!todos.length) {
    return <p className="text-center text-gray-500">No hay tareas aún.</p>;
  }

  return (
    <ul>
      {todos.map((t, i) => (
        <TodoItem key={i} text={t} onDelete={onDelete} index={i} />
      ))}
    </ul>
  );
}
