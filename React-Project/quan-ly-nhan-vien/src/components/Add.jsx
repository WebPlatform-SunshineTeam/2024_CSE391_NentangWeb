import React, {useEffect, useState} from 'react'
import Field from './Field';
import validator from 'validator';

export default function Add({ setShow, setList, itemSelect, removeItem, handleDelete }) { // index to edit, -1 is add
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

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
                <button className='bg-green-600 text-white p-1 px-2 rounded hover:bg-green-500' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </form>
  )
}
