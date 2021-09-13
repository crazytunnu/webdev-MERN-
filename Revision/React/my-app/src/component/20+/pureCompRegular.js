import React, { Component } from 'react'

export default class pureCompRegular extends Component {
    constructor(props) {
        console.log("Regular COnst");
        super(props)
    
        this.state = {
             count:props.count
        }
    }
    
    render() {
        if(this.props.count!=this.state.count){
            this.setState({count:this.props.count})
        }
        console.log("Regular" ,this.state.count);
        return (
            <div>
                <h1>Regular-{this.state.count}</h1>
            </div>
        )
    }
}
