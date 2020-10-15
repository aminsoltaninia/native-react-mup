import * as ActionTypes from './ActionTypes';

export const leaders = ( state = {
        isLoading : true ,
        errMess : null ,
        leaders : []
   } ,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
           return { ...state , leaders : action.payload , isLoading : false , errMess : null  }
        case ActionTypes.LEADERS_LOADING:
           return { ...state , leader : [] , isLoading : true , errMess : null  }
        case ActionTypes.LEADERS_FAILED:
            return { ...state , leader : [] , isLoading : false , errMess : action.payload}
        default:
            return state;
    }
}