import React,{useContext} from 'react'
import Mycontext from './context'
import DemoChild from './demochild'

function Demo() {
    console.log("demo");
    // const val=useContext(Mycontext);
    // console.log(val);
    return (
        <div>
            <DemoChild/>
        </div>
    )
}

export default React.memo(Demo)
