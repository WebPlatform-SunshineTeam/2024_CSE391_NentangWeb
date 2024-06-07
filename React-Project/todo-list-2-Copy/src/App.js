import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [] // lay du lieu tu localStorage voi key la "todos"
  )
  return (
    <div className="App" style={{ width: "65%", marginLeft: "auto", marginRight: "auto" }}>
      <Header sub={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
