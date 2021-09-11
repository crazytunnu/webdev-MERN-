import React, { Component } from 'react'

export default class RegComp extends Component {
    render() {
        console.log("Regular Component");
        return (
            <div>
               Regular Comp {this.props.username} 
            </div>
        )
    }
}
