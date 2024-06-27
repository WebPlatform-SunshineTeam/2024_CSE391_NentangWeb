import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Add from './Add'

export default function Navbar2({setList}) {
    const [show, setShow] = useState(false)

  return (
    <div className='bg-slate-700 mt-10 p-4 flex justify-between items-center'>
        <h1 className='text-white'>Quản lý Nhân viên</h1>
        <div className='flex space-x-4'>
            <button onClick={() => setList([])} className='bg-red-600 text-white px-1 hover:bg-red-500'><FontAwesomeIcon icon={faCircleMinus}/> Xóa</button>
            <button onClick={() => setShow(true)} className='bg-green-600 text-white px-1  hover:bg-green-500'><FontAwesomeIcon icon={faCirclePlus}/> Thêm nhân viên</button>
        </div>
        {
            show && (
                <>
                    <div className='fixed inset-0 bg-black opacity-50 z-10'></div>
                    <div className='fixed inset-0 flex items-center justify-center z-20'>
                        <Add setShow={setShow} setList={setList}/>
                    </div>
                </>
            )
        }
    </div>
  )
}

