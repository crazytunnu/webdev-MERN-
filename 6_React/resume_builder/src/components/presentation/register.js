import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router';

export default function register(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    useEffect(()=>{
        if(props.auth?.uid)
        history.pushState('/');

    },[props])
    return (
        <div>
            
        </div>
    )
}
