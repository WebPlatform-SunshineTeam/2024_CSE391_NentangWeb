import React from 'react'

export default function TodoList({ todos, setTodos }) {
    return (
        <div>
            {
                todos.map((todo, index) => {
                    return (
                        <div key={index} style={{ padding: "3px", justifyContent: "space-around", backgroundColor: "cyan", marginTop: "5px", borderStyle: "groove", }}>
                            <input type="checkbox" checked={todo.status} onChange={e => {
                                setTodos(pre => {
                                    const newTodos = [...pre]
                                    newTodos[index].status = e.target.checked
                                    localStorage.setItem('todos', JSON.stringify(newTodos))
                                    return newTodos
                                })
                            }} />
                            <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => {
                                setTodos(pre => {
                                    const newTodos = [...pre]
                                    newTodos.splice(index, 1)
                                    localStorage.setItem('todos', JSON.stringify(newTodos))
                                    return newTodos
                                })
                            }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}