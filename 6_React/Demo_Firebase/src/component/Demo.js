import React,{useState,useEffect} from 'react'
import firebase from './firebase'
export default function Demo() {
    const auth=firebase.auth();
    const [user,setUser]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const [error,setError]=useState("");
    const handleLogin=()=>{
        
    }
    return (
        <div>
          <label>Email:
              <input value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>  
            <label>password:
              <input value={password} onChange={(e)=>setPass(e.target.value)}></input>
            </label>  
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
