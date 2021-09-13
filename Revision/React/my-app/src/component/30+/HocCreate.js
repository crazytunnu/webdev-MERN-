import React,{Component} from "react"

const withCounter= OriginalComponent =>{
    
class withCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        increment=()=>{
            this.setState({count:this.state.count+1})
        }
        
        render() {
            return (
                <div>
                   <OriginalComponent count={this.state.count} increment={this.increment}/> 
                </div>
            )
        }
    }
    return withCounter
    
}
export default withCounter