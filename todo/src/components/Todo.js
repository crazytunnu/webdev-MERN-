//http://192.168.1.107:3000/
import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(prop){
        super(prop);
        this.state={
            tasks:[{id:1,txt:"first"},{id:2,txt:"second"},{id:3,txt:"third"}],
            currTask:""
        }
    }
    handleChange=(e)=>{
        let val=e.target.value;
        this.setState({currTask:val})
    }
    handleClick=()=>
    {
        let na=[...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}];
        this.setState({
            tasks:na,
            currTask:""
        })
    }
    render() {
        // console.log("rendered");
        return (
            <div>
                <div className="input-container">
                <input onChange={this.handleChange} value={this.state.currTask} type='text'></input>
                <button onClick={this.handleClick}>Add</button>
                </div>
            <div className="class-list">
                <ul>
                    {
                        this.state.tasks.map(task=>(
                            <li>
                                <h1>{task.txt}</h1>
                                <button>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        )
    }
}
