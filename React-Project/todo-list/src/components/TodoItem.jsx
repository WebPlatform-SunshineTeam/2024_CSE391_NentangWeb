import React from 'react'

export default function TodoItem({todo, index, removeTodo}) {
  return (
    <div>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  )
}
