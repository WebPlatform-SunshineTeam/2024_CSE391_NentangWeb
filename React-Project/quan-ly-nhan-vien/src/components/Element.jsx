import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Element({ id, name, mail, address, phone, act, removeItem }) {
    return (
        <div className={`grid grid-cols-11 gap-4 items-center border ${act ? 'hover:bg-gray-400 py-2' : 'py-4 border-gray-500'} ${id % 2 === 0 ? 'bg-gray-300' : ''}`}>
            <input type="checkbox" className='col-span-1'/>
            <span className='col-span-2'>{name}</span>
            <span className='col-span-3'>{mail}</span>
            <span className='col-span-2'>{address}</span>
            <span className='col-span-2'>{phone}</span>
            <div className='col-span-1 flex space-x-2'>
            {
                act === 1 ? 
                <>
                    <button className='bg-green-600 text-white p-1 rounded hover:bg-green-700'><FontAwesomeIcon icon={faPen} /></button>
                    <button onClick={() => removeItem(id)} className='bg-red-600 text-white p-1 rounded hover:bg-red-700'><FontAwesomeIcon icon={faTrash} /></button>
                </> : 'Hành động'
            }
            </div>
        </div>
    )
}
