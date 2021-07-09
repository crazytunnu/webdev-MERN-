import React,{useState} from 'react'

export default function Uswo() {
    const [msg,setMsg]=useState("");
    const [obj,setObj]=useState({name:"",age:1})
    const handleInput=(e)=>{
        const x=e.target.value;
        setMsg(x);
    }
    const handleObject=(e)=>{
        let str=e.target.value;
        let tObj={...obj,name:str}
        setObj(tObj);
    }
    return (
        <div>
            <input value={msg} onChange={handleInput} placeholder="Enter Your text here"></input>
            <h1>{msg}</h1>
            <input value={obj.name} onChange={handleObject} placeholder="Change in Object"></input>
            <h1>{obj.name}</h1>
        </div>
    )
}
// export default Uswo;