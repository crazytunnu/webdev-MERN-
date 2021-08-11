import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {database} from '../firebase'
let useStyles=makeStyles({
    like:{
        color:'red',
        cursor:'pointer'
    },
    unlike:{
        color:'black',
        cursor:'pointer'
    }
})
export default function Likes({userData=null,userPost=null}) {
    const [like,setLike]=useState(null);
    const classes=useStyles();
    useEffect(() => {
        let check=userPost.likes.includes(userData?.userId)?true:false;
        setLike(check);
        console.log(check);
    }, [userPost])
    const handleLike=async()=>{
        // console.log(userPost);
        if(like==true){
            let arr=userPost.likes.filter(x=>{
                return x!=userData.userId;
            })
            await database.posts.doc(userPost.postIds).update({
                likes:arr
            })
        }
        else{
            let arr=[...userPost.likes,userData.userId];
            // console.log(arr,userPost.postIds);
            await database.posts.doc(userPost.postIds).update({
                likes:arr
            })
        }
        
    }
    return (
        <div>
           {
               like==true?
               <><FavoriteIcon onClick={handleLike} className={`${classes.like} icon-styling`}/></>
               :
               <><FavoriteIcon onClick={handleLike} className={`${classes.unlike} icon-styling`}/></>
           } 
        </div>
    )
}
