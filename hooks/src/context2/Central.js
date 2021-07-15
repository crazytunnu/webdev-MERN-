import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
import NavBar from './NavBar';
export default function Central() {
    const [theme,setTheme]=useState('light')
    return (
        <div>
            <ThemeContext.Provider value={{Theme:theme,cnfn:setTheme}}>
            <NavBar/>
            </ThemeContext.Provider>
        </div>
    )
}
