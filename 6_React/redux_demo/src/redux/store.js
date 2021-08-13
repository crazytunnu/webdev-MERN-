import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import BallReducer from "./ball/BallReducer";

const store = createStore(BallReducer,composeWithDevTools());
export default store; 