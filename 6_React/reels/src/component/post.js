import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
// import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './post.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { database } from '../firebase';
const useStyles = makeStyles({
    root: {
      width: '100%',
      padding: '0px'
    },
    loader: {
      position: 'absolute',
      left: '50%',
      top: '50%'
    },
    typo: {
      marginLeft: '2%'
    },
    vac: {
      marginLeft: '3.5%',
      color: '#8e8e8e',
      cursor:'pointer'
    },
    dp: {
      marginLeft: '2%'
    },
    cc: {
      height: '50vh',
      overflowY: 'auto'
    },
    seeComments:{
      height:'54vh',
      overflowY:'auto'
    },
    ci:{

      color: 'white',
      left:'9%',
      cursor:'pointer'
    },
    mn:{
      color:'white',


    },
    tmn:{
      color:'white'
    }

  });
function Posts(props) {
  const callback=entries=>{
    entries.forEach(e=>{
       let el=e.target.childNodes[0];
       el.play().then(()=>{
           //if this video is not in viewport then pause it
           if(!el.paused && !e.isIntersecting)
           {
               el.pause();                
           }
       })
    })
}
const observer=new IntersectionObserver(callback,{threshold:0.9})
  const[post,setPost]=useState();
useEffect(() => {
  let arr=[]
  const unsub=database.posts.orderBy("createdAt",'desc').onSnapshot(all=>{
    arr=[];
    all.forEach((i)=>{
      console.log(i.data());
      const {data}={...i.data(),postIds:i.id}
      arr.push(data);
    })
setPost(arr);
  })
  return unsub;
},[])
    return (
        <div>
          POST
        </div>
    )
}

export default Posts