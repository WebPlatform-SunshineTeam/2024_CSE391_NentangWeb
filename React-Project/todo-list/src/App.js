import './App.css';
import TodoList from './components/TodoList'
import React, { useState } from 'react'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos]) // Them todo moi vao dau mang
  }

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return <div className="App" style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}>
      <div style={{ backgroundColor: "pink" }}>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
      </div>
      <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>;
}

export default App;
