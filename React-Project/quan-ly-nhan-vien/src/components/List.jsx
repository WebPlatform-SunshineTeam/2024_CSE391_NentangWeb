import React, {useState} from 'react'
import Element from './Element'

export default function List({ list, handleChoose }) {
    return (
        <div>
            {
                list.map((item) => {
                    return <Element key={item.id} id={item.id} name={item.name} phone={item.phone} act={item.act} handleChoose={handleChoose} />
                })
            }
        </div>
    )
}
