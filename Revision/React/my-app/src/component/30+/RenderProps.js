import React, { Component } from 'react'

export class RenderProps extends Component {
    render() {
        return (
            <div>
                user is {this.props.name(false)}
            </div>
        )
    }
}

export default RenderProps
