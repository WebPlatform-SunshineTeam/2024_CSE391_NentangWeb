import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, setTodos}) {
    const remove = (idx) => {
        setTodos(todos.filter((todo, index) => index !== idx))
    }

  return (
    <div style={{ backgroundColor: 'gray' }}>
        {
            todos.map((todo, i) => 
                <TodoItem key={i} index={i} text={todo.text} completed={todo.completed} remove={remove}/>
            )
        }        
    </div>
  )
}
