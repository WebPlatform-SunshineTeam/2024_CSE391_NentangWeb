import React from 'react'

export default function Side() {
    return (
        <div className='mt-10 mr-3 ml-4 bg-slate-700 text-white'>
            <h1 className='mt-4 ml-2'><strong>ADMIN AREA</strong></h1>
            <ul className='ml-4 mr-4'>
                <li className='mt-5'>Home</li>
                <li className='mt-5'>Inmate Management</li>
                <li className='mt-5'>Cell Management</li>
                <li className='mt-5'>Visitor Management</li>
                <li className='mt-5'>Staff Management</li>
            </ul>
            <ul className='mt-6 ml-2'>Người dùng: admin</ul>
        </div>
    )
}
