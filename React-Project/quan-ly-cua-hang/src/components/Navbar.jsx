import React from 'react'

export default function Header() {
    return (
        <div className="block-container bg-blue-950 text-white">
            <h4>TRƯỜNG ĐẠI HỌC THỦY LỢI</h4>
            <div className="block-box">
                <h5>Trang chủ</h5>
                <h5>Quản lý cửa hàng</h5>
                <input type="text" placeholder='Nhập nội dung tìm kiếm' className='w-[250px] rounded'/>
                <button className=' bg-blue-500 text-white p-2 hover:bg-blue-600'>TÌM KIẾM</button>
            </div>
        </div>
    )
}
