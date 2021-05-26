import {combineReducers} from 'redux'
import propertyReducer from './property/property'

export default combineReducers({
    property:propertyReducer
})