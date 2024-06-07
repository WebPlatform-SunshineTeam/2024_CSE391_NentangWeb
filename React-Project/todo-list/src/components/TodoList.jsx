import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, removeTodo}) {
  return (
    <ul> {/* Render cac todo */}
        {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
    </ul>
  )
}
