import React, { Component } from 'react'

export default class Formhandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:""
        }
    }
    handleEmail=(e)=>{
        this.setState({username:e.target.value})
    }
    render() {
        return (
            <div>
                <form>
                    <label>UserName</label>
                    <input type='text' placeholder="UserName" onChange={this.handleEmail}></input>
                </form>
            </div>
        )
    }
}
