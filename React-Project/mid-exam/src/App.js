import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))) || [];
  return (
    <div className="App" style={{ }}>
      <Header sub={setTodos} todos={todos}/>
      <TodoList sub={setTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
