import React, {useState} from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, add, remove}) { // truyen tham so thi phai co dau {}

  return (
      <div style={{ display: "flex", flexWrap: 'wrap', justifyContent: "space-around" }}>
          {
              todos.map((todo, index) => 
                  <TodoItem key={index} index={index} text={todo.text} completed={false} todo={todo}/>
              )
          }
      </div>
  )
}
