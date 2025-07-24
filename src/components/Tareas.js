// src/components/Tareas.jsx
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Tareas() {
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = text => {
        setTodos(prev => [...prev, text]);
    };

    const handleDeleteTodo = index => {
        setTodos(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-900 p-6 rounded shadow-md">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Esta aplicación es un ejemplo de cómo crear una app sencilla con React, que incluye un sistema de gestión de tareas (To-Do List) y una sección sobre mí.
            </p>
            <TodoForm onAdd={handleAddTodo} />
            <TodoList todos={todos} onDelete={handleDeleteTodo} />
        </div>
    );
}
