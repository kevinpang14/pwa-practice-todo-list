import React, { useState } from "react";

function TodoList({ todos, onDelete, onComplete }) {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
            {console.log(todo.id)}
          </span>
          <div className="d-flex gap-2">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => onComplete(todo.id)}
            >
              Complete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
