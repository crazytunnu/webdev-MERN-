import React,{useState} from 'react'
import ThemeContext from './ThemeContext'
export default function Central() {
    const [theme,setTheme]=useState('light')
    return (
        <div>
            <ThemeContext.Provider>
            
            </ThemeContext.Provider>
        </div>
    )
}
