import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    render() {
        console.log("Pure Componenet");
        return (
            <div>
                Pure Comp {this.props.username} 
            </div>
        )
    }
}
