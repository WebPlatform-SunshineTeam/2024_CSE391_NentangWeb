import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faGear } from '@fortawesome/free-solid-svg-icons'

export default function TableRow({ item, index, handleDelete, setSelect }) {
    return (
        <tr>
            <td className='block-box h-20'> 
                <button className='bg-green-600'><FontAwesomeIcon icon={faGear} /></button>
                <button className='bg-yellow-400' onClick={() => setSelect(item)}><FontAwesomeIcon icon={faPen}/></button>
                <button onClick={() => handleDelete(item.id)}><FontAwesomeIcon icon={faTrash}/></button>
            </td>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>{item.lastUpdate}</td>
        </tr>
    )
}
