import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addNewTodo,
  updateExistingTodo,
  deleteExistingTodo,
} from "./redux/action/todoActions";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const loading = useSelector((state) => state.todos.loading);

  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addNewTodo({ text: newTodoText }));
      setNewTodoText("");
    }
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateExistingTodo(id, { text: newText }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteExistingTodo(id));
  };

  return (
    <div style={{ paddingLeft: 600 }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {loading ? (
        <p>Loading todos...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                value={todo.text}
                onChange={(e) => handleUpdateTodo(todo.id, e.target.value)}
              />
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;