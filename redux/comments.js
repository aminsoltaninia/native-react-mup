
import * as ActionTypes from './ActionTypes';

export const comments = ( state = {
        errMess : null ,
        comments : []
   } ,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
           return { ...state , comments : action.payload , isLoading : false , errMess : null  }
     
        case ActionTypes.COMMENTS_FAILED:
            return { ...state , comments : [] , isLoading : false , errMess : action.payload}
        default:
            return state;
    }
}