import React, { Component } from 'react'
import Child from './child.js'
export default class Parent extends Component {
    constructor(props){
        super(props)
        {
            this.state={
                parent:this.props.name
            }
        }
        // this.greetParent=this.greetParent.bind(this)
    }
    greetParent=(title)=>{
        alert(`Hello ${this.state.parent}`+title);
    }
    render() {
        return (
            <div>
                <Child greetParent={this.greetParent}/>

            </div>
        )
    }
}
