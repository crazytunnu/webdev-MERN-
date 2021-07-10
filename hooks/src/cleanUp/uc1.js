import React,{useEffect,useState} from 'react'

export default function Uc1() {
    const [c,setC]=useState(0);
    useEffect(()=>{
        console.log(c);
        return()=>{
            alert(`this will run before next call to useEffect is made ${c}`)
        }
    })
    return (
        <div>
            <button onClick={()=>{setC(c+1)}}>{c}</button>
        </div>
    )
}
