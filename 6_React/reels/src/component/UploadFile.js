import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles((theme) => ({

  }));

function UploadFile(currentUser) {
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
            setTimeout(()=>{setError(null),2000});
        }
        if(file.size/(1024*1024)>100)
        {
            console.log("Max Size exceed");
            setError("error");
            setTimeout(()=>{setError(null),2000});
        }
        if(types.indexOf(file.type)==-1)
        {
            console.log("Not a video file");
            setError("error");
            setTimeout(()=>{setError(null),2000});
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
                Secondary
            </Button>

            </label>
            {loading?<LinearProgress color='secondary' style={{marginTop:'6%'}} />:<></>}
            </>

        }
        </>
    )
}

export default UploadFile