import { createStore,applyMiddleware  } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import BallReducer from "./ball/BallReducer";
import RootReducer from './rootReducer'
import thunk from 'redux-thunk'
const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)));
export default store; 