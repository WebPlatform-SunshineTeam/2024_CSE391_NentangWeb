import React from 'react'

export default function Header({ sub, todos }) {
  const submit = (e) => {
    e.preventDefault()
    sub((pre) => {
      let newTodos = [{ title: e.target.elements[0].value, status: false }, ...pre] // lay du lieu tu form va them vao mang todos
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return newTodos
    })
  }
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <form onSubmit={submit}>
        <input type="text" placeholder='TIEU DE VIEC CAN LAM...' style={{padding: "65px"}}/>
        <button type='submit' style={{backgroundColor: "yellow", padding: "65px"}}>Add Node</button>
      </form>
    </div>
  )
}