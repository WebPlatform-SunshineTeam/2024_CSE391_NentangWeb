import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import AddForm from './AddForm'
export default function Navbar({list, setList}) {
    const [show, setShow] = React.useState(false)

    return (
        <div className='mt-12 bg-slate-700 text-white flex p-4 justify-between'>
            Quản lý Nhân viên
            <div className='space-x-4'>
                <button onClick={() => setList([])} className='bg-red-600 hover:bg-red-500 px-2 rounded'><FontAwesomeIcon icon={faCircleMinus} /> Xóa</button>
                <button onClick={() => setShow(true)} className='bg-green-600 hover:bg-green-500 px-2 rounded'><FontAwesomeIcon icon={faCirclePlus} /> Thêm nhân viên</button>
            </div>
            {
                show && 
                <>
                    <div className='inset-0 z-10 opacity-50 bg-black fixed'></div>
                    <div className='inset-0 z-20 flex items-center justify-center fixed'>
                        <AddForm setList={setList} setShow={setShow}/>
                    </div>
                </>
            }
        </div>
    )
}
