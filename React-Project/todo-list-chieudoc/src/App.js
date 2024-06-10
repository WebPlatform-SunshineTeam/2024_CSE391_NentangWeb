import './App.css';
import Header from './components/Header'
import React, {useState} from 'react';
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <Header todos={todos} setTodos={setTodos}/>      
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
