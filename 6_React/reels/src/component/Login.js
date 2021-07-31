// import React,{useState,useContext,useEffect} from 'react'
// import { AuthContext } from '../Context/AuthProvider'
// import { useHistory } from 'react-router-dom';
// export default function Login() {
//     const [username,setUser]=useState("");
//     const [password,setPass]=useState("");
//     const {login,currentUser}=useContext(AuthContext);
//     const [loading,setLoad]=useState(false);
//     const [error,setError]=useState('')
//     const history = useHistory('');
//     const [uid,setUid]=useState('');
//     const onSubmit=async (e)=>{
//         e.preventDefault()
//         setLoad(true);
//         try{
//             const res= await login(username,password);
//         setUid(res.user.uid)
//         console.log(res.user.uid);
//         }
//         catch(e){
//             setError("Login Failed");
//             setTimeout(()=>{
//                 setError('');
//             },2000)
//         }
//         // setUid('');
//         setLoad(false);
        
//     }
//     return (
//         <>
//         {
//             loading?<h1>Loading</h1>:<>
//                 <h1>{uid}</h1>
//         <div>
//           <input type='email' onChange={(e)=>setUser(e.target.value)}></input>
//           <input typr='password' onChange={(e)=>setPass(e.target.value)}></input>
//           <button onClick={onSubmit}>Login</button>
//         </div>
//         {/* {error?<h1>Error</h1>:<h1>{uid}</h1>} */}
//         </> 
//         }  
//         </>
//     )
// }
import React,{useState,useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthProvider';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const {login,currentUser} =useContext(AuthContext);
    const history = useHistory();
     const handleSubmit = async(e)=>{
          console.log('hi');
        // e.preventDefault()
        try {
          console.log('Logging in user')
          setLoading(true)
          const res=await login(email, password)
          console.log(res.user.uid);
          setLoading(false)
          history.push('/')
        } catch {
          setError("Failed to log in")
          setTimeout(()=>setError(''),2000)
          setLoading(false)
        }
      }
    //   useEffect(()=>{
    //     if(currentUser)
    //     {
    //       history.push('/')
    //     }
    //   },[])
    return (
        <div>
              <form onSubmit={handleSubmit} >
             <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' disabled={loading}>Login</button>
                {error?<h1>{error}</h1>:<></>}
                </form>
               
        </div>
    )
}

export default Login