import { useState } from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import link from './avatar.gif'
import signuplink from './bgsignup.jpg'
import hiFytrr from './hiFytrr.jpg'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        www.fytrr.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const styles = {
    paperContainer: {
        height:'100vh',
        width:'100vw',
        backgroundImage: `url(${signuplink})`,
        backgroundSize:'cover',
        
    }
};
export default function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [agree,setAgree]=useState(true)
    const handleClick=()=>{
        console.log(username+" "+password+" "+fname+" "+lname)
    }
    function handleUsername(e){
        setUsername(e.target.value)
    }
    const  handlePassword=(e)=>{
        setPassword(e.target.value)
        
    }

  return (
      <div style={styles.paperContainer}>  
       
    <ThemeProvider theme={theme}  >
      <Container component="main" maxWidth="xs" style={{backgroundColor:'white', boxShadow:`5px 3px 5px #9E9E9E`}} >
        <CssBaseline />
        <Box
          sx={{
              heigth:'100vh',
              display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img style={{height:'15vh',width:'16vw'}} src={link}/>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleClick} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    onChange={handleUsername}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={handlePassword}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
            onClick={handleClick} disabled={username.length<3||password.length<3}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
 </div>
  );
}