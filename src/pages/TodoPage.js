import React from "react";
import { useState } from "react";

const TodoPage = () => {
  const [todoTitle, setTodoTitle] = useState();
  const [writer, setWriter] = useState();
  return (
    <div>
      <button>Fetch Todos</button>
      <input
        placeholder="Todo"
        onChange={(e) => setTodoTitle(e.currentTarget.value)}
      />
      <input
        placeholder="Writer ?"
        onChange={(e) => setWriter(e.currentTarget.value)}
      />
      <button>Add Todo</button>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default TodoPage;
