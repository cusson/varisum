import {house} from '../data/houses'

export const fetchProperty = (id) => async dispatch =>{
    const response = await house.filter(h => h.id === parseInt(id))

    dispatch({
        type: "FETCH_PROPERTY",
        payload: response
    })
}

export const fetchProperties = () => async dispatch =>{
    const response = await house;

    dispatch({
        type: "FETCH_PROPERTIES",
        payload: response
    })
}