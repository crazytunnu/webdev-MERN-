import { combineReducers } from "redux";
import BallReducer from "./ball/BallReducer";
import BatReducer from "./bat/BatReducer";
import userReducer from "./users/userReducer";
const rootReducer=combineReducers({
    ball:BallReducer,
    bat:BatReducer,
    user:userReducer
})
export default rootReducer