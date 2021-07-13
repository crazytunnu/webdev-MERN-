import React,{useState,useEffect} from 'react'
import firebase from './firebase'
export default function Demo() {
    const auth=firebase.auth();
    const [user,setUser]=useState(null);
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoad]=useState(false);
    const handleLogin=async()=>{
        try{
           setLoad(true);
           let res=await auth.signInWithEmailAndPassword(email,password) ;
           setUser(res.user);
           setLoad(false);

        }
        catch(e){
            setError(e.message)
            setTimeout(()=>{setError("")},5000);
            console.log(error);
            setLoad(false);
        }
        setEmail("");
        setPass("");
    }
    const handleLogOut=()=>{

    }
    return (
        <>
        {
        loading==true?<div>Loading{error}</div>:user==null?
        <div>
          <label>Email:
              <input value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>  
            <label>password:
              <input value={password} onChange={(e)=>setPass(e.target.value)}></input>
            </label>  
            <button onClick={handleLogin}>Login</button>
        </div>:<div>{user.uid}
        <button onClick={handleLogOut}>LogOut</button>
        </div>
    }
    </>
    )
}
