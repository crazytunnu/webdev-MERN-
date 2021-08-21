import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import documentReducer from './documentReducer'
import educationReducer from './educationReducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import {authReducer} from './authReducer';
import initialState from '../reducer/initialState.json'
import { actionTypes, SIGN_OUT } from '../actions/actionTypes'
const appReducer=combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    contactSection:contactReducer,
    document:documentReducer,
    educationSection:educationReducer,
    auth:authReducer
})
const rootReducer=(state=initialState,action)=>{
    if(action.type===SIGN_OUT){
        state=undefined
    }
    return appReducer(state,action);
}
export default rootReducer