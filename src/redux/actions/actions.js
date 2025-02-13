import { types } from "../types/types"


export function mangaAct (manga){
    
    return{
        type: types.GET_MANGA,
        payload: manga
    }
}

export function getMangaAct (){
    return async function (dispatch){
        const response = await fetch('https://api.jikan.moe/v4/manga')
        const data = await response.json()
        
        
        dispatch(mangaAct(data.data))
    }
}