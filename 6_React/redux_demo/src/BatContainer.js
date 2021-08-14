import React,{useState} from 'react'
import {buyBat} from './redux/bat/BatAction'
import {connect} from 'react-redux'
function BatContainer(props) {
    const [count,setCount]=useState();
    return (
        <div>
            <h1>The Number of Bats left is/are:{props.numofBat} </h1>
            <input type='number' onChange={e=>setCount(e.target.value)}></input>
            <button onClick={()=>props.buyBat(count)}>Buy</button>

        </div>
    )
}
const mapStateToProps = state=>{
    return {
        numofBat: state.bat.numofBat
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyBat: (number)=>dispatch(buyBat(number)),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BatContainer)
