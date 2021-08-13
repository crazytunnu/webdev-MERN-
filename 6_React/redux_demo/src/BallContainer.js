import React from 'react'
import {connect} from 'react-redux'
import {buyBall} from './redux/ball/BallAction'

function BallContainer(props) {
    return (
        <div>
            <h2>The number of balls are: {props.numofBalls}</h2>
            <button onClick={props.buyBall}>Buy Ball</button>
        </div>
    )
}
//first method for reading from global state
const mapStateToProps = state=>{

    return{
        numofBalls:state.numofBalls
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        buyBall: ()=>dispatch(buyBall())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BallContainer)