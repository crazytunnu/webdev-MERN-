import React,{useState} from 'react'

export default function Hooksdemo() {
    const [c,cs]=useState(0);
    const increase=()=>{
        cs(c+1);
    }
    const decrease=()=>{
        cs(c-1);
    }
    return (
        <div>
            <button onClick={increase}>+</button>
           <h1>{c}</h1> 
           <button onClick={decrease}>-</button>
        </div>
    )
}
