import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: "List 1",
      completed: false,
    },
    {
      id: 7413641226,
      text: "List 2",
      completed: false,
    },
    {
      id: 56159268425,
      text: "List 3",
      completed: false,
    },
  ]);

  const handleSetTodos = (newTodos) => {
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <TodoForm addTodo={handleSetTodos} />
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default App;
