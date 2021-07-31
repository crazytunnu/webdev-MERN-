import React,{useState,useContext,useEffect} from 'react'
import { AuthContext } from '../Context/AuthProvider'
export default function Login() {
    const [username,setUser]=useState("");
    const [password,setPass]=useState("");
    const {login}=useContext(AuthContext);
    const [loading,setLoad]=useState(false);
    let uid;
    const onSubmit=async ()=>{
        setLoad(true);
        try{
            const res= await login(username,password);
        uid=res.user.uid;
        console.log(uid);
        }
        catch(e){
            console.log(e);
        }
        setLoad(false);

    }
    return (
        <>
        {
            loading?<h1>Loading</h1>:<>
                <h1>{uid}</h1>
        <div>
          <input type='email' onChange={(e)=>setUser(e.target.value)}></input>
          <input typr='password' onChange={(e)=>setPass(e.target.value)}></input>
          <button onClick={onSubmit}>Login</button>
        </div>
        </> 
        }  
        </>
    )
}
