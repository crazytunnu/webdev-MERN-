import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const useStyle=makeStyles((theme)=>({
    btn:{
        marginTop:'5%',
        '&:hover':{
            color:"red",
            backgroundColor:"black"
        }
    }
}))
function Buttons() {
   const classes=useStyle();
    return (
        <div>
            <Button className={classes.btn}color="primary">Primary</Button>
        </div>
    )
}

export default Buttons
