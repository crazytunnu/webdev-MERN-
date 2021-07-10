// variation no 2---used when we want useEffect to run only once, since it is a call back function it runs after render.
import React,{useState,useEffect} from 'react'

function E2() {
    const [count,setC]=useState(0);
    useEffect(()=>{
        document.title=count;//document title will remain the same here
    },[])
    return (
        <div>
            <button onClick={()=>setC(count+1)}>{count}</button>
        </div>
    )
}

export default E2
