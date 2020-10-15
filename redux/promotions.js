import * as ActionTypes from './ActionTypes';

export const promotions = ( state = {
        isLoading : true ,
        errMess : null ,
        promotions : []
   } ,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_PROMOTIONS:
           return { ...state , promotions : action.payload , isLoading : false , errMess : null  }
        case ActionTypes.PROMOTIONS_LOADING:
           return { ...state , promotions : [] , isLoading : true , errMess : null  }
        case ActionTypes.PROMOTIONS_FAILED:
            return { ...state , promotions : [] , isLoading : false , errMess : action.payload}
        default:
            return state;
    }
}