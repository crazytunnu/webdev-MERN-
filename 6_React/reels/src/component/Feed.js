import React,{useContext,useEffect,useState} from 'react'
import { AuthContext } from '../Context/AuthProvider'
import {database} from '../firebase'
import { CircularProgress } from '@material-ui/core'
import UploadFile from './UploadFile';
import Header from './Header'

import './Feed.css'
export default function Feed() {
    const {currentUser} =useContext(AuthContext);
    const [userData,setUserData] = useState(null);
    useEffect(()=>{
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc)=>{
            setUserData(doc.data())
        })
    },[currentUser])
    return (
        <>
        { userData==null ? <CircularProgress />:<>
        <Header userData={userData} />
        <div style={{height:'9.5vh'}}/>
        <div className='feed-container'>
            <div className='center'>
                <UploadFile userData={userData}/>
            </div>
        </div>

        </>
        }
        </>
    )
}
