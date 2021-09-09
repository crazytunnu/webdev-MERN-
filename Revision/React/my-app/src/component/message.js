import React,{Component} from 'react'
class Message extends React.Component{
    constructor(){
        super()
        {
            this.state={
                message:"Welcome Visitor",
                count:0
            }
        }
    }
    handleClick=()=>{
        this.setState({message:"Thanks for subscribing",
    count:this.state.count+1
    })
        console.log(this.state.count);
    }
    render(){
        return(
            <>
            <h1>
                {this.state.message}-{this.state.count}
            </h1>
            <button onClick={this.handleClick}>Subscribe</button>
            </>

        )
    }
}
export default Message;