import React,{useState,useEffect,useContext} from 'react';
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
import AuthProvider, { AuthContext } from '../Context/AuthProvider';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { database } from '../firebase';
import './Video.css'
import Likes from './Likes';

import Video from './Video';
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
function Posts({userData=null}) {
  const classes=useStyles();
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
  const[posts,setPost]=useState(null);
useEffect(() => {
  let arr=[]
  const unsub=database.posts.orderBy("createdAt",'desc').onSnapshot((all)=>{
    arr=[];
    all.forEach((i)=>{
      console.log(i.id);
      let data={...i.data(),postIds:i.id}
      console.log(data);
      arr.push(data);
    })
    setPost(arr);
  })
  return unsub;
},[])
useEffect(() => {
  let elements=document.querySelectorAll('.videos');
  elements.forEach((el)=>{
    observer.observe(el);
    
  })
  return () => {
    observer.disconnect();
  }
}, [posts])
    return (
      <>
      <div className='place'>
      </div>
      {posts==null?<CircularProgress className={classes.loader} color="secondary" />:
      <div className='video-container' id='video-container'>
        {
          posts.map((post)=>(
            <React.Fragment key={post.postId}>
              <div className='videos'>
                <Video source={post.pUrl} id={post.pId}/>
                <div className='fa' style={{display:'flex'}}>
                  <Avatar src={post.uProfile}></Avatar>
                  <h4>{post.uName}</h4>
                </div>
                <div className='fa' style={{display:'flex',marginLeft:'10px'}}>
              <Likes userData={userData} userPost={post}/>
                </div>
              </div>
              <div className='place'></div>
            </React.Fragment>
          ))
        }

      </div>
      }
      </>
    )
}

export default Posts