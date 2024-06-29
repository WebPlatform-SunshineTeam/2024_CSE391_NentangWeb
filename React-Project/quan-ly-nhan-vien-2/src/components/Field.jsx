import React from 'react'

export default function Field({ labelName, setValue}) {
  return (
    <div className='flex flex-col p-3'>
        <label>{labelName}</label>
        <input className='border border-gray-500 mt-2' type="text" onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
