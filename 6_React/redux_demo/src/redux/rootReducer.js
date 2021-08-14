import { combineReducers } from "redux";
import BallReducer from "./ball/BallReducer";
import BatReducer from "./bat/BatReducer";

const rootReducer=combineReducers({
    ball:BallReducer,
    bat:BatReducer
})
export default rootReducer