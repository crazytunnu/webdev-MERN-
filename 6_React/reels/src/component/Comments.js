import React,{useState} from 'react'
import { makeStyles } from '@material-ui/styles';
import { database } from '../firebase';
import { TextField,Button } from '@material-ui/core'
import './Comments.css'
const useStyles = makeStyles({
    cbtn:{
        marginRight:'1%',
        marginTop:'4%'
    }
 })
export default function Comments({userData=null,userPost=null}) {
    const [text,setText]=useState('');
    const classes = useStyles();
    const manageText=(e)=>{
        setText(e.target.value);
    }
    const handleOnEnter=()=>{
        let obj={
            text:text,
            uName:userData.username,
            uUrl:userData.profileURL
        }
        console.log(obj)
         database.comments.add(obj).then((res)=>{
             console.log(userPost.postIds);
            database.posts.doc(userPost.postIds).update({
                comments:[...userPost.comments,res.id]
            })
        })
    }

    return (
        <div className='emojibox' >
            <TextField value={text} fullWidth={true} label='Add a comment' onChange={manageText}/>
            <Button onClick={handleOnEnter} disabled={text==''?true:false} className ={classes.cbtn} color='primary'>Post</Button>
        </div>
    )
}
