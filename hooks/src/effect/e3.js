//useEffects runs when any attribute mentioned in arr is changed
import React, { useEffect,useState } from 'react'

function E3() {
    const [count,setC]=useState(0);// useEffect will not run if we change this
    const [count2,setC2]=useState(0);// will run if we change this
    useEffect(() => {
        document.title=count2;
    }, [count2])
    return (
        <div>
            <button onClick={()=>setC(count+1)}>No Change{count}</button>
            <button onClick={()=>setC2(count2+1)}>Change{count2}</button>
            <h1>If you click on chnage button title will change</h1>
        </div>
    )
}

export default E3
