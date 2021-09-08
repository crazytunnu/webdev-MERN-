import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props)
        {
            this.state={
                count:Number(props.count)
            }
        }
    }
    increment=()=>{
        console.log(typeof this.state.count);
        this.setState((prevState,props)=>({
            
            count:prevState.count+Number(props.count)
        }))
    }
    increment5=()=>{
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
               <button onClick={()=>this.increment()}>Increment</button> 
               <button onClick={()=>this.increment5()}>Increment5</button> 
            </div>
        )
    }
}
