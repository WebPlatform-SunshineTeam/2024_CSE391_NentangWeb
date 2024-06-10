import React, {useState} from 'react'

export default function TodoItem({text, completed, todo}) {
  const [compl, setCompl] = useState(completed)

  return (
    <div onClick={() => setCompl(!compl)} style={{marginLeft: "20px", marginRight: "20px" ,backgroundColor: "white", padding: "45px", borderRadius: "15px" }}>
      <span style={{textDecoration: compl ? "line-through" : "none"}}>{text}</span>
    </div>
  )
}
