import React,{useEffect,useState} from 'react'

export default function E1() {
    const [c,setC]=useState(0);
    useEffect(() => {
        
       document.title=`clicked ${c} times`
    })
    return (
        <div>
            <button onClick={()=>setC(c+1)} >Click Me</button>
            <h1>{c}</h1>
        </div>
    )
}
