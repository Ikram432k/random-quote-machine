import { ActionTypes } from "../constans/action-type";
const initialState = 
    {
        author: '',
        quote: ''
    }

export const quoteReducer =(state = initialState, {type,payload})=>{
    switch(type){
        case ActionTypes.SET_AUTHOR:
        return { ...state,author: payload };
        case ActionTypes.SET_QUOTE:
        return {...state,quote: payload };
        case ActionTypes.REMOVE_OLDQUOTE:
        return {...state,author:"",quote: ""};
        default:
        return state;
    }
}