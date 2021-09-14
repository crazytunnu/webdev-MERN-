import React, { Component } from 'react'

export default class CounterUserRENDER extends Component {
    render() {
       const {count,increment}=this.props
       console.log(count);
        return (
            <div>
                <button onClick={increment}>{count}</button>
                hello
            </div>
        )
    }
}
