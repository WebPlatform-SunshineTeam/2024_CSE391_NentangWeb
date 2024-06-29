import React from 'react'
import Element from './Element'

export default function List({list, setList}) {
    return (
        <div>
            {
                list.map((item, index) => {
                    return <Element key={index} id={index} name={item.name} email={item.email} address={item.address} phone={item.phone} act={1}/>
                })
            }
        </div>
    )
}
