import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../Context/AuthProvider';
import {storage,database} from '../firebase'
export default function Signup() {
    const [email,setEmail]=useState();
    const [pass,setPass]=useState();
    const [loading,setLoading]=useState(false);
    const [file,setFile]=useState(null);
    const [name,setName]=useState();
    const history=useHistory();
    const [error,setError]=useState('');
    const {signup,currentUser} =useContext(AuthContext);
    const handleSubmit=async (e)=>{
        try{
            e.preventDefault();
            setLoading(true);
            let res = await signup(email,pass);
            let uid = res.user.uid;
            console.log(uid); 
            const uploadTaskListener=storage.ref(`/user/${uid}/profilePic`).put(file);//firebase storage and directory creation
            uploadTaskListener.on('state_changed',progress,error,success);
            function progress(snapshot){
                const cprogress=(snapshot.bytesTransferred/snapshot.totalBytes)
                console.log(cprogress);
            }
            function error(e)
            {
                setError(e);
                setTimeout(()=>{
                    setError('')
                },2000)
                setLoading(false);
            }
            async function success()
            {
                const ppicLink=await uploadTaskListener.snapshot.ref.getDownloadURL();
                console.log(ppicLink);
                await database.users.doc(uid).set({//firebase database creation
                    username:name,
                    email:email,
                    userId:uid,
                    createdAt:database.timeStamp(),
                    profileURL:ppicLink,
                    postIds:[]
                })

            }
            setLoading(false);
            history.push('/');
        }
        catch(e){
            setError(e);
                setTimeout(()=>{
                    setError('')
                },2000)
                setLoading(false);
        }
    }
    const handleFileSubmit=(e)=>{
        const file=e.target.files[0];
        console.log(file);
        history.push('/')
        if(file!=null)
        setFile(file);
    }
    useEffect(()=>{
        if(currentUser)
        {
          history.push('/')
        }
      },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">UserName</label>
                    <input type='text' value={name}onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
                </div>
                <div>
                    <label>Choose Profile Picture</label>
                    <input type='file' accept='image/*' onChange={handleFileSubmit}></input>
                </div>
                <button type='submit' onClick={()=>history.push('/login')} disabled={loading}>Login</button>
                <button type='submit' disabled={loading}>SignUp</button>
            </form>
        </div>
    );
}
