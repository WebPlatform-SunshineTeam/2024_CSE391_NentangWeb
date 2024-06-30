import React from 'react'

export default function Add({ setShow, removeItem, choose }) { // index to edit, -1 is add
    const handleRemove = (idx) => {
        if (idx !== -1)
            removeItem(idx)
        setShow(false)
    }
    return (
    <form className='bg-white w-[25%] p-4 rounded shadow-md'>
        <div className='flex flex-col'>
            <div className='flex justify-between border-b mb-4 p-2'>
                Confirm Delete
                <button onClick={() => setShow(false)}>x</button>
            </div>
            <div className='p-4'>
                Are you sure you want to delete this item ?
            </div>
            <div className='ml-auto space-x-3 mr-1'>
                <button onClick={() => setShow(false)}>Cancel</button>
                <button onClick={() => handleRemove(choose)} className='bg-green-600 text-white p-1 px-2 rounded hover:bg-green-500'>Delete</button>
            </div>
        </div>
    </form>
  )
}
