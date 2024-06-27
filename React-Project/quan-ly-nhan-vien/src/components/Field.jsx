import React from 'react'

export default function Field({name, value, setValue}) {
  return (
    <div className='flex flex-col'>
        <label>{name}</label>
        <input className='border mb-4 p-1' type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
