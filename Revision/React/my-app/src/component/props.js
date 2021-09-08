import React from 'react'
export default function Props(props){
    return(
        <h1>{props.name}{props.children}</h1>
    )
}