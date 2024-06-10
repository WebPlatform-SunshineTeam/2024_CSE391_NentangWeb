import './App.css';
import React, {useState} from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("")
  const [showInput, setShowInput] = useState(false)

  const add = () => {
    setShowInput(true)
    if (value !== "") {
      setTodos([{ text: value, completed: false }, ...todos]);
      setValue("")
      setShowInput(false)
    }
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'row-reverse', marginTop: '20px'}}>
      <button onClick={add} style={{ backgroundColor: "yellow", padding: "45px", borderRadius: "15px" }}>Add note</button>
      {showInput && <input  style={{ padding: "45px", borderRadius: "15px"}} type='text' value={value} onChange={e => setValue(e.target.value)}/>}
      <TodoList todos={todos} add={add}/>
    </div>
  );
}

export default App;
