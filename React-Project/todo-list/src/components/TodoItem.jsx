import React from 'react'

export default function TodoItem({todo, index, removeTodo, editTodo}) {
  return (
    <div>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Remove</button>
      <button onClick={() => editTodo(index)}>Edit</button>
    </div>
  )
}
