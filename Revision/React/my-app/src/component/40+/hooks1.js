import React,{useState} from 'react'

function Hooks1() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState({fName:'',lName:''})
    const increment=(e)=>{
        for(let i=0;i<5;i++)
        {

            setCount(prev=>prev+1);
            if(e!=5)break;
        }
    }
    return (
        <div className="App">
            <h1>{name.fName+" "+name.lName}</h1>
            <button onClick={()=>increment()}>Count : {count}</button>
            <button onClick={()=>increment(5)}>Inc5</button>
            <input type="text" value={name.fName} onChange={e=>setName({...name,fName:e.target.value})} />
            <input type="text" value={name.lName} onChange={e=>setName({...name,lName:e.target.value})} />
        </div>
    )
}

export default Hooks1