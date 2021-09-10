import React from 'react'
import './Styling.css'
function Styling(props) {
    // let className=props.style&&'primary'
    return (
        <div className={props.style&&'primary'}>
            StyleSheet.css
        </div>
    )
}

export default Styling
