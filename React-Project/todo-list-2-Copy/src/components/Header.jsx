import React from 'react'
import Button from './Button'

export default function Header({ sub, todos }) {
  const submit = (e) => {
    e.preventDefault()
    sub((pre) => {
      let newTodos = [{ title: e.target.elements[0].value, status: false }, ...pre]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }
  return (
    <div style={{ backgroundColor: "pink", marginBottom: "8px"}}>
      <h1>Todo List</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder='TIEU DE VIEC CAN LAM...' />
        <button type='submit'>Add todo</button>
      </form>
    </div>
  )
}