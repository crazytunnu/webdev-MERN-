import React,{useEffect,useState} from 'react'

export default function Hooks2() {
    console.log("function")
   
    const[count,setCount]=useState(0);

    useEffect(() => {
        console.log("useEffect")
        document.title=`clicked ${count} times`
    })
    console.log("function2")

    return (
        
        <div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}
