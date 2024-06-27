import React, {useState} from 'react'
import Element from './Element'

export default function List({ list, setList }) {
    const removeItem = (idx) => {
        setList(list.filter((_, id) => id !== idx ))
    }

    return (
        <div>
            {
                list.map((item, idx) => {
                    return <Element key={idx} id={idx} name={item.name} mail={item.mail} address={item.address} phone={item.phone} act={item.act}  removeItem={removeItem}/>
                })
            }
        </div>
    )
}
