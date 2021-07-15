import React,{useState,useContext} from 'react'
import ThemeContext from './ThemeContext'
export default function Category() {
    const obj=useContext(ThemeContext)
    const navStyle={
        width:'100%',
        height:'20%',
        backgroundColor:`${obj.Theme=='light'?"black":"grey"}`,
        margin:'10px'
    }
    const pStyle={
        color:`${obj.Theme=='light'?"white":"red"}`,
        fontSize:'2rem'
    }
    return (
        <div style={navStyle}>
            <p style={pStyle}>Category</p>
        </div>
    )
}
