import _ from 'lodash'

/* eslint-disable import/no-anonymous-default-export */
export default (state={}, action) => {
    switch(action.type){
        case "FETCH_PROPERTY":
            return {...state, [action.payload.id]: action.payload}
        case "FETCH_PROPERTIES":
            return {...state, ..._.mapKeys(action.payload, "id")}
        default:
            return state;
    }
}