//http://192.168.1.107:3000/
import React, { Component } from 'react'

export default class Todo extends Component {
    tasks=[{id:1,txt:"first"},{id:2,txt:"second"},{id:3,txt:"third"}]
    render() {
        return (
            <div>
                <div className="input-container">
                <input type='text'></input>
                <button>Add</button>
                </div>
            <div className="class-list">
                <ul>
                    {
                        this.tasks.map(task=>(
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
