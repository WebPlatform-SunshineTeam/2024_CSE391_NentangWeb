import './App.css';
import TodoList from './components/TodoList';
import React, {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(false)

  const add = () => {
    setShowInput(true)
    if (value !== "") {
      setTodos([{ text: value, completed: false }, ...todos]);
      setValue("")
      setShowInput(false)
    }
  }

  return <div className="App" style={{ display: "flex", flexDirection: "row-reverse", marginTop: "20px", alignItems: "start", width: "100%" }}>
      <button onClick={add} style={{ padding: "70px", backgroundColor: "yellow", borderRadius: "15px" }}>
        Add Note
      </button>
      {showInput && <input onChange={e => setValue(e.target.value)} className="input" type="text" value={value} style={{ padding: "70px", backgroundColor: "white", textAlign: "center", marginLeft: "20px" }} />}
      <TodoList todos={todos} add={add} />
    </div>;
}

export default App;
