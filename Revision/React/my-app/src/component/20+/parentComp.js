import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
export default class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"Arshad"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({username:"Arshad"})
        },2000)
    }
    render() {
        console.log("****************Parent******************");
        return (
            <div>
                Parent Component
                <RegComp username={this.state.username}/>
                {/* <PureComponent username={this.state.username}/> */}

            </div>
        )
    }
}
