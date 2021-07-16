import React,{useState} from 'react'

export default function Q3() {
    const [c,setC]=useState(0);
    
    return (
        <div>
            <button onClick={()=>setC(c+1)}>Count: {c}</button>
        </div>
    )
}
