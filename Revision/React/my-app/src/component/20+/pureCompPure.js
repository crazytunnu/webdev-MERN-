import React, { PureComponent } from 'react'

export class pureCompPure extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             count:props.count
        }
    }
    
    render() {
        console.log("Pure");
        return (
            <div>
                <h1>Pure-{this.state.count}</h1>
            </div>
        )
    }
}

export default pureCompPure
