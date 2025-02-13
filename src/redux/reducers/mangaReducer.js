import { types } from "../types/types"


const initialState = {
    manga: []
}

export default function mangaReducer( state = initialState, action){
    if(action.type === types.GET_MANGA){
        
        return {
            ...state,
            manga: action.payload
        }
    }
    return state
}