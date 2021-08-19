import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import documentReducer from './documentReducer'
import educationReducer from './educationReducer'
import {firebaseReducer} from 'react-redux-firestore'
import {firestoreReducer} from 'redux-firebase'
const rootReducer=combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    contactSection:contactReducer,
    document:documentReducer,
    educationSection:educationReducer
})
export default rootReducer