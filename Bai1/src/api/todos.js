let todos = [];

// Phương thức để lấy danh sách công việc
export const getTodos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...todos]);
    }, 500);
  });
};

// Phương thức để thêm công việc mới
export const addTodo = (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newTodo = { id: Date.now(), ...todo };
      todos.push(newTodo);
      resolve(newTodo);
    }, 500);
  });
};

// Phương thức để cập nhật công việc
export const updateTodo = (id, updatedTodo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos[index] = { ...todos[index], ...updatedTodo };
        resolve(todos[index]);
      } else {
        reject(new Error("Todo not found"));
      }
    }, 500);
  });
};

// Phương thức để xoá công việc
export const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        const deletedTodo = todos.splice(index, 1);
        resolve(deletedTodo[0]);
      } else {
        reject(new Error("Todo not found"));
      }
    }, 500);
  });
};