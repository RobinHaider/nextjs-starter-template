'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3000/api/todos')
      .then((response) => response.json())
      .then((data: Todo[]) => setTodos(data.reverse()));

    // reverse the order of the todos
  }, []);

  const addTodo = () => {
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo, completed: false, userId: 1 }), // Assuming userId is always 1 for the example
    })
      .then((response) => response.json())
      .then((data: Todo) => setTodos([data, ...todos]));
    setNewTodo('');
  };

  // handle the checkbox change
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    todo: Todo
  ) => {
    fetch(`http://localhost:3000/api/todos/${todo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: todo.title,
        completed: e.target.checked,
        userId: todo.userId,
        id: todo.id,
      }),
    })
      .then((response) => response.json())
      .then((data: Todo) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((t) => t.id === data.id);
        newTodos[index] = data;
        setTodos(newTodos);
      });
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl text-center my-4'>Todo List</h1>
      <input
        className='px-2 py-1 mb-4 border border-gray-200 text-black'
        placeholder='Add a new todo...'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className='mb-4 bg-blue-500 text-white px-2 py-1'
        onClick={addTodo}
      >
        Add Todo
      </button>

      {todos.map((todo) => (
        <div key={todo.id} className='mb-2 flex flex-row'>
          <input
            className='mr-2'
            type='checkbox'
            checked={todo.completed}
            onChange={(e) => handleCheckboxChange(e, todo)}
          />
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  );
}
