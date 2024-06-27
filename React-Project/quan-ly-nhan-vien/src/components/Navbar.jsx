import React from 'react'

export default function Header() {
    return (
        <div className="flex p-2 items-center justify-between bg-gray-400 shadow-xl">
            <div className='flex space-x-10 items-center'>
                <h3><a href="#" className='font-bold'>TLU</a></h3>
                <a href="#">Trang chủ</a>
                <a href="#" className='font-bold'>Quản lý nhân viên</a>
            </div>
            <div className="ml-0 flex space-x-2 items-center">
                <input type="text" placeholder='Nhập nội dung tìm kiếm' className='p-1 rounded'/>
                <button className='rounded bg-blue-500 text-white p-1 hover:bg-blue-600'>Tìm</button>
            </div>
        </div>
    )
}
