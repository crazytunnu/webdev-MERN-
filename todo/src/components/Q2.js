import React,{useState,useEffect} from 'react'

export default function Q2() {
    const [c,setC]=useState(0);
    useEffect(()=>{
        console.log("boom");
    })
    return (
        <div>
       <button onClick={()=>setC(c+1)}>State: {c}</button>
        </div>
    )
}
