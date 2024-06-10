import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, removeTodo, editTodo}) {
  return (
      <ul style={{ backgroundColor: "aqua", marginLeft: "auto", marginRight: "auto", marginTop: "0px" }}> {/* Render cac todo */}
        {
          todos.map((todo, index) => (
              <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} editTodo={editTodo}/>
          ))
        }
    </ul>
  )
}
