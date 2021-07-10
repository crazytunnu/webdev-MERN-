import React,{useState,useEffect} from 'react'

function Infinite() {
    const [co,setCo]=useState(0);
    useEffect(()=>{
        document.title=co;
        setCo(co+1);
    })
    return (
        <div>
           <h1>{co}</h1> 
        </div>
    )
}

export default Infinite
