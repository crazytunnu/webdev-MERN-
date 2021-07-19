import React,{useState,useEffect,useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider';
export default function Signup() {
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [loading,setLoading]=useState(false);
    
    const [name,setName]=useState();
    const [error,setError]=useState();
    const {signup} =useContext(AuthContext);
    const handleSubmit=async (e)=>{
        e.preventDefault();
            setLoading(true);
            let res = await signup(email,pass);
            let uid = res.user.uid;
            console.log(uid); 
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">UserName</label>
                    <input type='text' value={name}onChange={(e)=>setName(e.target.valeu)}></input>
                </div>
                <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                </div>
                <button type='submit' disabled={loading}>SignUp</button>
            </form>
        </div>
    );
}
