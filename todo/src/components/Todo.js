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
    onDelete=(id)=>{
        let ns=this.state.tasks.filter(obj=>{
            return obj.id!=id
        })
        this.setState({tasks:ns});
    }
    render() {
        // console.log("rendered");
        return (
            <>
            <InputComponents currTask={this.state.currTask} handleChange={this.handleChange} handleClick={this.handleClick}/>
            <ListComponents tasks={this.state.tasks} onDelete={this.onDelete} />
            </>
        )
    }
}


class InputComponents extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="input-container" >
                <input onChange={this.props.handleChange} value={this.props.currTask} type='text'></input>
                <button onClick={this.props.handleClick}>Add</button>
            </div>
        )
    }
}

class ListComponents extends Component {
    constructor()
    {
        super();
    }
    render() {
        return (
            <div className="class-list">
                <ul>
                    {
                        this.props.tasks.map(task=>(
                            <li key={task.id}>
                                <h1>{task.txt}</h1>
                                <button onClick={()=>this.props.onDelete(task.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

