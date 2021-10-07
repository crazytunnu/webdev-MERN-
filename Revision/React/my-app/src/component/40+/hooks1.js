import React,{useState} from 'react'

function Hooks1() {
    const [count,setCount]=useState(0);
    const increment=(e)=>{
        for(let i=0;i<5;i++)
        {

            setCount(prev=>prev+1);
            if(e!=5)break;
        }
    }
    return (
        <div className="App">
            <button onClick={()=>increment()}>Count : {count}</button>
            <button onClick={()=>increment(5)}>Inc5</button>
        </div>
    )
}

export default Hooks1