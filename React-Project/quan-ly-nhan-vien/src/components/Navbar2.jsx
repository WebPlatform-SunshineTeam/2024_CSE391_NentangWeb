import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Add from './Add'

export default function Navbar2({ setShow }) {
    return (
        <div className='mt-10 p-4 justify-between items-center'>
            <h1 className=''><strong>PRISON CELL LIST</strong></h1>
            <button className='mt-2 bg-green-600 text-white p-2 rounded  hover:bg-green-500'><FontAwesomeIcon icon={faCirclePlus} /> Add Cell</button>
        </div>
    )
}

