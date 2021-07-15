import React,{useState,useContext} from 'react'
import ThemeContext from './ThemeContext'
export default function Dropdown() {
    const obj=useContext(ThemeContext)
    const navStyle={
        width:'100%',
        height:'20%',
        backgroundColor:`${obj.Theme=='light'?"grey":"black"}`,
        margin:'10px'
    }
    const pStyle={
        color:`${obj.Theme=='light'?"red":"white"}`,
        fontSize:'2rem'
    }
    const switchTheme=()=>{
        const ctheme=obj.Theme;
        if(ctheme=='light')
        {
            obj.cnfn("dark");
        }
        else{
            obj.cnfn("light");
        }
    }
    return (
        <div style={navStyle}>
            <p style={pStyle}>DropDown</p>
           
        </div>
    )
}
