import React from 'react'
export default function Destructuring({name,hero="Batman"}){
    console.log(hero);
    return(

        <h1>{name}{hero}</h1>
    )
}