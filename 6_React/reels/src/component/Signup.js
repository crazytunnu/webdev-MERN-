import React,{useState,useEffect,useContext} from 'react'

export default function Signup() {
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [loading,setLoading]=useState();
    const [name,setName]=useState();
    const [error,setError]=useState();
    
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
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='profile'>Profile image</label>
                    <input type='file' accept='image/*' onChange={handleFileSubmit}></input>
                </div>
                <button type='submit' disabled={loading}>SignUp</button>
            </form>
        </div>
    )
}
