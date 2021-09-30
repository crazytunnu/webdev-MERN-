import React, { useState } from 'react'
// import {auth} from './firebase'
export default function Signup() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [btn,setBtn]=useState(false)
    const validator=()=>{
        console.log(username.length+" "+password.length)
        if(username.length>=3&&password.length>=3)
        setBtn(true);
        else
        setBtn(false)
    }
    const handleClick=()=>{
        console.log(username+" "+password)
    }
    async function handleUsername(e){
        await setUsername(e.target.value)
        setTimeout(validator,2000);
        console.log(username);
    }
    const  handlePassword=async (e)=>{
        await setPassword(e.target.value)
        validator();
    }
    return (
        <div>
            <input type="email" onChange={handleUsername}/>
            <input type="password" onChange={handlePassword}/>
            {
                btn==false? <button disabled>Signup</button>:
                <button onClick={handleClick}>Signup</button>
            }
        </div>
    )
}
