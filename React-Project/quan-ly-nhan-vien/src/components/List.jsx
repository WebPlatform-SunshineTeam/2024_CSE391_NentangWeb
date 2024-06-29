import React, {useState} from 'react'
import Element from './Element'

export default function List({ list, setList, editItem, removeItem, show, setShow }) {
    return (
        <div>
            {
                list.map((item, idx) => {
                    return <Element key={idx} id={idx} name={item.name} phone={item.phone} act={item.act} removeItem={removeItem} editItem={editItem} setShow={setShow}/>
                })
            }
        </div>
    )
}
