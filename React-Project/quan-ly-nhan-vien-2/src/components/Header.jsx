import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-between bg-slate-500 p-2 shadow-b'>
        <div className='ml-4 flex space-x-4'>
            <a href="#">TLU</a>
            <a href="#">TRANG CHỦ</a>
            <a href='#'>QUẢN LÝ NHÂN VIÊN</a>
        </div>
        <div className='flex space-x-3'>
            <input className='rounded-lg p-1 px-2' type="text" placeholder='Nhap noi dung tim kiem'/>
            <button className='text-white p-1 bg-blue-600 rounded hover:bg-blue-500'>Tìm</button>
        </div>
    </div>
  )
}
