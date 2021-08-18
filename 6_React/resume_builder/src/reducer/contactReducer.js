import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState.json'
export default function contactReducer(state=initialState.contactSection,action) {
    switch(action.type)
    {
        case actionTypes.ADD_CONTACT:
        return {}
    }
}