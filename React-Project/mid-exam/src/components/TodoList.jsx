import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, add}) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: "row-reverse"}} >
        {
              todos.map((todo, i) => 
                <TodoItem key={i} index={i} text={todo.text} completed={todos.completed} todo={todo}/>
            )
        }
    </div>
  )
}
