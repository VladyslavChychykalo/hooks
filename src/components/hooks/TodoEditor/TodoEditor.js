import React, { useState } from "react";

const TodoEditor = ({ onSave = () => null }) => {
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = e => {
    setTodoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSave(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={onChangeTodoText} type="text" value={todoText} />
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoEditor;
