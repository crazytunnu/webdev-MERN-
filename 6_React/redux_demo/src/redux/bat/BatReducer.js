const initalState={
    numofBat=20
}
const BUY_BAT='BUY_BAT'
const BallReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case BUY_BAT:
            return {...state,numofBat:state.numofBat-action.payload}
    }
}
export default BallReducer;