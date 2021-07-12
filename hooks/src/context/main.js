import React, { useState } from 'react'
import Mycontext from './context'
import Demo from './demo'
export default function Main() {
    const [c,setC]=useState(0);
    console.log("render main");
    return (
        <div>
            <button onClick={()=>{setC(c+1)}}>click</button>
            <Mycontext.Provider value={c}>
                <Demo/>
            </Mycontext.Provider>
        </div>
    )
}
