import { ActionTypes } from "../constans/action-type";

export const set_quote =(quotes)=> {
    return{
        type: ActionTypes.SET_QUOTE,
        payload: quotes
    };
};

export const set_author =(author)=> {
    return{
        type: ActionTypes.SET_AUTHOR,
        payload: author
    };
};

export const remove_oldquote =()=> {
    return{
        type: ActionTypes.REMOVE_OLDQUOTE,
    };
};
