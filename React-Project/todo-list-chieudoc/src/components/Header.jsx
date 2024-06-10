import React, {useState} from 'react'

export default function Header({todos, setTodos}) {
    const [value, setValue] = useState("")

    const add = () => {
        if (value !== "") {
            setTodos([{text: value, completed: false}, ...todos])
            setValue("")
        }
    }

  return (
    <div style={{ backgroundColor: "blue", padding: '12px'}}>
        <h1 style={{color: "white"}}>Danh sách việc cần làm</h1>
        <div style={{ display: "flex", justifyContent: 'center'}}>
            <input onChange={e => setValue(e.target.value)} value={value} placeholder='TIÊU ĐỀ VIỆC CẦN LÀM...' style={{ padding: '8px', width: '300px' }}/>
            <button onClick={add}>THÊM MỚI</button>
        </div>
    </div>
  )
}
