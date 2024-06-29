import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCirclePlus, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
export default function Navbar1({setShow}) {
  return (
    <div className='block-header bg-white'>
      <div className='block-box'>
        <button className='bg-green-600' onClick={() => setShow('block')}><FontAwesomeIcon icon={faCirclePlus} className='icon'/>THEM MOI</button>
        <button className='bg-yellow-300'><FontAwesomeIcon className='icon' icon={faArrowUpFromBracket}/> XUAT RA FILE</button>
      </div>
      <div className='block-box'>
        <button className=''>{`>`}</button>
        <input type="text" placeholder='Tim kiem trong cua hang'/>
        <button className=''><FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/></button>
      </div>
      <div className='block-box'>
        <p><strong>Ket qua</strong></p>
        <div className='border w-20 p-2'>20</div>
        <button>{`>`}</button>
      </div>
    </div>
  )
}
