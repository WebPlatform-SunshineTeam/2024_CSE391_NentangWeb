import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Element({ id, name, phone, act, handleChoose }) {
    return (
        <div className={`px-60 grid grid-cols-7 items-center border ${act ? 'hover:bg-blue-300 py-2 border-gray-400' : 'py-4 bg-orange-200 border-black'} ${id % 2 === 0 ? 'bg-gray-300' : ''}`}>
            <span className='col-span-2'>{id}</span>
            <span className='col-span-2'>{name}</span>
            <span className='col-span-2'>{phone}</span>
            <div className='col-span-1 flex space-x-2'>
            {
                act === 1 ? 
                <>
                    <button className='bg-green-600 text-white p-1 rounded hover:bg-green-700'><FontAwesomeIcon icon={faPen} /> Edit</button>
                    <button onClick={() => handleChoose(id)} className='bg-red-600 text-white p-1 rounded hover:bg-red-700'><FontAwesomeIcon icon={faTrash} /> Delete</button>
                </> : 'Actions'
            }
            </div>
        </div>
    )
}
