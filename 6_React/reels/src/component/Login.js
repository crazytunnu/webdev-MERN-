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
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Login() {
    const classes = useStyles();
    const [username,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {login,currentUser}=useContext(AuthContext);
    const [loading,setLoad]=useState(false);
    const [error,setError]=useState('')
    const history = useHistory('');
    const [uid,setUid]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault()
        setLoad(true);
        try{
            const res= await login(username,password);
        setUid(res.user.uid)
        console.log(res.user.uid);
        }
        catch(e){
            setError("Login Failed");
            setTimeout(()=>{
                setError('');
            },2000)
        }
        // setUid('');
        setLoad(false);
        
    }
    return (
        // <div>
        //       <form onSubmit={handleSubmit} >
        //      <div>
        //         <label htmlFor=''>Email</label>
        //             <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        //         </div>
        //         <div>
        //         <label htmlFor=''>Password</label>
        //             <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        //         </div>
        //         <button type='submit' disabled={loading}>Login</button>
        //         {error?<h1>{error}</h1>:<></>}
        //         </form>
               
        // </div>
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
            <img src="https://play-lh.googleusercontent.com/9ASiwrVdio0I2i2Sd1UzRczyL81piJoKfKKBoC8PUm2q6565NMQwUJCuNGwH-enhm00" alt="new"/>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            
          >
           Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    )
}

export default Login