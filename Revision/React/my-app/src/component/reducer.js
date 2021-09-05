import React,{useReducer,useState} from 'react'
const ACTION={
    INCREMENT:"i",
    DECREMENT:"d",
    RESET:"r"
}
function reducer(count,action){
    switch(action.type){
        case ACTION.INCREMENT:return count+1;
        case ACTION.DECREMENT:return count-1;
        case ACTION.RESET:return 0;
        default: return count;

    }
}
export default function Reducer() {
    const[count,dispatch]=useReducer(reducer,0);
    // const [count,setCount]=useState(0);
    return (
        <div>
           <div>{count}</div> 
           <button onClick={()=>dispatch({type:ACTION.INCREMENT})} >+</button>
           <button onClick={()=>dispatch({type:ACTION.DECREMENT})}>-</button>
           <button onClick={()=>dispatch({type:ACTION.RESET})}>Reset</button>
        </div>
    )
}
