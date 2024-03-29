import React,{useState,useContext} from 'react'
import ThemeContext from './ThemeContext'
import Dropdown from './Dropdown'
import Category from './Category'
export default function NavBar() {
    const obj=useContext(ThemeContext)
    const navStyle={
        width:'100%',
        height:'300px',
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
            <p style={pStyle}>Paragraph</p>
            <Dropdown/>
            <Category/>
            <button onClick={switchTheme}>Toggle Theme</button>
        </div>
    )
}
