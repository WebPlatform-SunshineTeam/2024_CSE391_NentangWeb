import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Element({ id, name, email, address, phone, act }) {
    return (
        <div className={`grid grid-cols-11 gap-4 ${!act ? 'py-4 border' : 'py-2'}`}>
            <input type="checkbox" className='col-span-1' />
            <div className='col-span-2'>{name}</div>
            <div className='col-span-3'>{email}</div>
            <div className='col-span-2'>{address}</div>
            <div className='col-span-2'>{phone}</div>
            <div className='col-span-1'>
                {
                    act ?
                        <div className='space-x-4'>
                            <button><FontAwesomeIcon icon={faPen} /></button>
                            <button><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    : "Hành động"
            }
            </div>
        </div>
    )
}
