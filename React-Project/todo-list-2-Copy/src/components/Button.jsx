import React from 'react'

export default function Button({name, onClick}) {
  return (
    <button style={{ padding: "2px" }} onClick={onClick}>{name}</button>
  )
}
