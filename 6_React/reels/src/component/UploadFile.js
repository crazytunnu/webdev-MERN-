import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
import { storage,database } from '../firebase';
import {v4 as uuidv4} from 'uuid'
const useStyles = makeStyles((theme) => ({

  }));

function UploadFile(props) {
    const classes = useStyles();
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    const types =['video/mp4','video/webm','video/ogg'];
    const onChange=(e)=>{
        const file=e?.target?.files[0];
        if(!file)
        {
            console.log("Please Select a file");
            setError("error");
            setTimeout(()=>{setError(null)},2000);
        }
        if(file.size/(1024*1024)>100)
        {
            console.log("Max Size exceed");
            setError("error");
            setTimeout(()=>{setError(null)},2000);
        }
        if(types.indexOf(file.type)==-1)
        {
            console.log("Not a video file");
            setError("error");
            setTimeout(()=>{setError(null)},2000);
        }
        const id=uuidv4();
        const uploadTask=storage.ref(`/posts/${props.userData.userId}/${file.name}`).put(file);
        uploadTask.on('state_change',progress,error,success)
        function progress(snapshot)
        {
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
            setLoading(true);
          uploadTask.snapshot.ref.getDownloadURL().then(url=>{
                let obj  ={
                    comments:[],
                    likes:[],
                    pId:id,
                    pUrl:url,
                    uName:props?.userData?.username,
                    uProfile:props?.userData?.profileURL,
                    userId:props?.userData?.userId,
                    createdAt:database.timeStamp()
                }
                console.log(obj);
                console.log(props.userData);
                database.posts.add(obj).then(async docRef=>{
                    console.log(docRef);
                    let res = await database.users.doc(props.userData.userId).update({
                        postIds:[...props.userData.postIds,docRef.id]
                    })
                }).then(()=>{
                    setLoading(false)
                }).catch(e=>{
                    setError(e);
                    setTimeout(()=>{
                        setError('')
                    },2000);
                    setLoading(false)
                })
            })
        }
    }

    return (
        <>
        {
            error!=null? <Alert severity="error">{error}</Alert>:<>
            <input 
            color='primary'
            type='file'
            onChange={onChange}
            id='icon-button-file'
            style={{display:'none'}}
            />
            <label htmlFor='icon-button-file'>
            <Button disabled={loading} variant="outlined" component='span' className={classes.button} 
            size='medium' color="secondary">
                Upload Video
            </Button>

            </label>
            {loading?<LinearProgress color='secondary' style={{marginTop:'6%'}} />:<></>}
            </>

        }
        </>
    )
}

export default UploadFile