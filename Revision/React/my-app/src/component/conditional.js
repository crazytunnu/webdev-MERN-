// import React, { Component } from 'react'

// export default class Conditional extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              loggedIn:props.status
//         }
//     }
    
//     render() {
//         if(this.state.loggedIn)
//         return <h1>Hello  Arshad</h1>
//         else
//         return <h1>Hello Guest</h1>
//     }
// }
import React from 'react'

export default function Conditional(props) {
    return props.status&& <h1>Arshad</h1>
}
