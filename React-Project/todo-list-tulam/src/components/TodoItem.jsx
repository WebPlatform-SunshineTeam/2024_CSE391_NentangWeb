import React, {useState} from 'react'

export default function TodoItem({text, completed, todo}) {
  const [compl, setCompl] = useState(completed)
  const toggle = () => {
    setCompl(!compl)
  }
  return (
    <div className='item' onClick={toggle} style={{ backgroundColor: "white", textAlign: "center", padding: "70px", borderRadius: "15px", marginLeft: "20px"}}>
      <span style={{ textDecoration: compl ? "line-through" : "none" }}>{text}</span>
    </div>
  )
}
