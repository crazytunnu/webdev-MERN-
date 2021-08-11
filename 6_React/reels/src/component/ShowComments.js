import React,{useState,useContext,useEffect} from 'react'
 import { Avatar, CircularProgress } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
import { database } from '../firebase';
import './ShowComments.css'
const useStyles = makeStyles({
    da:{
        marginRight:'2%',
        marginTop:'2%'
    }
   })
export default function ShowComments({userData=null,postData=null}) {
    const [comments,setComments]=useState(null);
    const classes = useStyles();
    useEffect(async() => {
        let arr=[];
        for(let i=0;i<postData.comments.length;i++)
        {
            let tcomment=await database.comments.doc(postData.comments[i]).get();
            arr.push(tcomment.data())//.data() is for making the comment an object
        }
        setComments(arr);
    }, [postData.comments])
    return (
        <div>
          {
              comments==null?<CircularProgress/>:
                comments.map((data)=>(
                    <div className='comment-div'>
                        <Avatar src={data.uUrl} className={classes.da}/>
                        <p><span style={{fontWeight:'bold',display:'inline-block'}} >{data.uName}</span>&nbsp;&nbsp;{data.text}</p>
                    </div>
                ))
              
          }  
        </div>
    )
}
