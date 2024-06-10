import React, {useState} from 'react'

export default function TodoItem({text, completed, index, remove}) {
    const [compl, setCompl] = useState(completed)

  return (
    <div style={{display: 'flex', marginTop: '12px', backgroundColor: index % 2 === 0 ? 'white' : 'gray', padding: '12px'}} onClick={() => setCompl(!compl)}>
        {compl && <span>✅</span>}
        <span style={{ textDecoration: compl ? 'line-through' : 'none' }}>{text}</span>
        <button onClick={() => remove(index)} style={{marginLeft: 'auto'}}>x</button>
    </div>
  )
}
