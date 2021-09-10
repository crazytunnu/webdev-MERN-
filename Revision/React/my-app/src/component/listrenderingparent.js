import React from 'react'
import Listrenderingchild from './listrenderingchild'
export default function Listrenderingparent() {
    let obj=[
        {
            name:"Arshad",
            age:'22'
        },
        {
            name:"Vishal",
            age:"22"
        }
    ]

    return (
        <div>
            {
                obj.map(x=><Listrenderingchild person={x}/>)
            }
        </div>
    )
}
