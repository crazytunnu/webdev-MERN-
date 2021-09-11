import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

        console.log("constructor");
    }
    componentDidMount=()=>{
        console.log("CDM");
    }
    componentDidUpdate=()=>{
        console.log("CDU");
    }
    componentWillUnmount=()=>{
        console.log("CWU");
    }
    render() {
        console.log("Render");
        return (
            <div>
                {this.state.count}
                <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
            </div>
        )
    }
}
