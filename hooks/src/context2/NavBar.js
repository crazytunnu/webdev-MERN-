import React,{useState,useContext} from 'react'
import ThemeContext from './ThemeContext'
export default function NavBar() {
    const obj=useContext(ThemeContext)
    const navStyle={
        width:'100%',
        height:'30%',
        backgroundColor:`${obj.Theme=='light'?"grey":"black"}`,
        margin:'10px'
    }
    const pStyle={
        color:`${obj.Theme=='light'?"red":"white"}`
    }
    return (
        <div style={navStyle}>
            <p style={pStyle}>Paragraph</p>
        </div>
    )
}
