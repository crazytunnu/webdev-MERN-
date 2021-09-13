import React, { Component } from 'react'
import withCounter from './HocCreate'
class HocUse extends Component {
    render() {
        const {count,increment}=this.props
        return (
            <div>
                <button onClick={increment}>{count}</button>
            </div>
        )
    }
}
export default withCounter(HocUse)