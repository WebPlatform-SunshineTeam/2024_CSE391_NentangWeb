import React from 'react'

export default function Footer({list}) {
  return (
    <div className='flex justify-between'> {/* Updated this line */}
        <div>Hiển thị {list.length} / 25 bản ghi</div>
        <div className='space-x-3'>
            <button className='bg-blue-500 px-2 text-white hover:bg-blue-600'>Trang trước</button>
            <button className='bg-blue-500 px-2 text-white hover:bg-blue-600'>Trang sau</button>
        </div>
    </div>
  )
}