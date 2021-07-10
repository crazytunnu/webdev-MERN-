import React,{useState,useEffect} from 'react'

function Infinite() {
    const [c,setC]=useState(0);
    useEffect(() => {
        
       document.title=c;
       setC(c+1);
    })
    return (
        <div>
           <h1>{c}</h1> 
        </div>
    )
}

export default Infinite
