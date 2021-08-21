import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import documentReducer from './documentReducer'
import educationReducer from './educationReducer'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
const rootReducer=combineReducers({
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    contactSection:contactReducer,
    document:documentReducer,
    educationSection:educationReducer
})
export default rootReducer