import React,{useContext} from 'react'
import Mycontext from './context'
export default function Demochild() {
    const val=useContext(Mycontext)
    console.log("child",val)
    return (
        <div>
            
        </div>
    )
}
