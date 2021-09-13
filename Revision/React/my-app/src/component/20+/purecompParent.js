import React, { Component } from 'react'
// import React from 'react'
import PureCompRegualar from './pureCompRegular'
import PureCompPure from './pureCompPure'


export default class PurecompParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:5
        }
    }
    handleClick=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
    return (
        <div>
            <div>{this.state.count}</div>
            <button onClick={this.handleClick}>+</button>
            <PureCompRegualar count={this.state.count}/>
            <PureCompPure count={this.state.count}/>
        </div>
    )}
    
}

