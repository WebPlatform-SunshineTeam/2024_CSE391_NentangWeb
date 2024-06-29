import React from 'react'
import TableRow from './TableRow'

export default function Table({ list, handleDelete, setSelect }) {
  return (
    <div className='block-table'>
      <table>
        <thead>
          <tr className='bg-blue-500 text-white'>
            <th className='text-center w-[15%]'>Hành động</th>
            <th>STT</th>
            <th>Người quản lý</th>
            <th>Địa chỉ</th>
            <th>Lần cập nhật cuối</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => {
              return <TableRow key={item.id} index={index} item={item} handleDelete={handleDelete} setSelect={setSelect}/>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
