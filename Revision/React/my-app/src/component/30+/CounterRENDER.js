import React, { Component } from 'react'

export default class CounterRENDER extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
        return (
            <div>
            {
                this.props.render(this.state.count,this.increment)
            }
            </div>
        )
    }
}
