import React, { useState, useEffect } from "react";
import shortid from "shortid";
import TodoEditor from "./hooks/TodoEditor/TodoEditor";
import TodoList from "./hooks/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text
    };

    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const deleteTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // аналог CDM
  useEffect(() => {
    const persistedTodos = localStorage.getItem("todos");
    if (persistedTodos) {
      setTodos(JSON.parse(persistedTodos));
    }
  }, []);

  // аналог CDU
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <TodoEditor onSave={addTodo} />
      {todos.length > 0 && <TodoList items={todos} onDeleteTodo={deleteTodo} />}
    </div>
  );
};

export default App;

// ==============================================================

// import React, { Component } from "react";
// import shortid from "shortid";
// import TaskEditor from "./classes/TodoEditor/TodoEditor";
// import TodoList from "./classes/TodoList/TodoList";

// class App extends Component {
//   state = { items: [] };

//   componentDidMount() {
//     const persistedAccount = localStorage.getItem("todos");

//     if (persistedAccount) {
//       this.setState(JSON.parse(persistedAccount));
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState !== this.state) {
//       localStorage.setItem("todos", JSON.stringify(this.state));
//     }
//   }

//   handleAddItem = text => {
//     const { items } = this.state;

//     const item = {
//       id: shortid.generate(),
//       text
//     };

//     this.setState({ items: [...items, item] });
//   };

//   handleDelete = id => {
//     this.setState(prevState => ({
//       items: prevState.items.filter(item => item.id !== id)
//     }));
//   };

//   render() {
//     const { items } = this.state;
//     return (
//       <div>
//         <TaskEditor addTodo={this.handleAddItem} />
//         {items.length > 0 && (
//           <TodoList items={items} onDeleteTodo={this.handleDelete} />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
