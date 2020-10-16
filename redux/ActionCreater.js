import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl'
import axios from 'axios'

//dishes action

// export const fetchDishes = ()=> (dispatch)=> {
//     // dispatch(dishesLoading())
    
//     return axios.get( baseUrl + 'dishes')
//                  .then(response =>{
                    
//                      if(response.ok){
//                         console.log("resrerererrerererererererererrerererer : " , response)
//                          return response
//                      }
//                      else {
//                         console.log("resrerererrerererererererererrerererer : " , response)
//                          var error = new Error('Errod '+ response.status + ': ' + response.statusText)
//                          error.response = response;
//                          throw error;
//                      }
//                  } , 
//                   error => {
//                        var errMess = new Error(error.message)
//                        throw errMess;
//                   })
//                   .then(response => response.json())
//                   .then(dishes =>  dispatch(addDishes(dishes)))
//                   .catch(error =>{console.log("in catchecccccccccccccccccccccccccccccccccc") ;dispatch(dishesFailed(error.message))})

  
// }
export const addDishes = dishes=> ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
})
export const dishesLoading = ()=> ({
    type : ActionTypes.DISHES_LOADING
})
export const dishesFailed = (errmess)=> ({
    type : ActionTypes.DISHES_FAILED,
    payload : errmess
})

// commenst action
// export const fetchComments = ()=> (dispatch)=> {
//     return fetch( baseUrl + 'comments')
//                  .then(response =>{
//                      if(response.ok){
//                          return response
//                      }
//                      else {
//                          var error = new Error('Errod '+ response.status + ': ' + response.statusText)
//                          error.response = response;
//                          throw error;
//                      }
//                  } , 
//                   error => {
//                        var errMess = new Error(error.message)
//                        throw errMess;
//                   })
//                   .then(
//                       response => response.json()
//                   )
//                   .then(commenst => dispatch(addComments(commenst)))
//                   .catch(error => dispatch(commentsFailed(error.message)))

  
// }
export const addComments = (comments)=>({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
})
export const commentsFailed = (errmess)=> ({
    type : ActionTypes.COMMENTS_FAILED,
    payload : errmess
})

// leader action 

// export const fetchLeaders = ()=> (dispatch)=> {
//    // dispatch(leadersLoading())

//     return fetch( baseUrl + 'corporates')
//                  .then(response =>{
//                      if(response.ok){
//                          return response
//                      }
//                      else {
//                          var error = new Error('Errod '+ response.status + ': ' + response.statusText)
//                          error.response = response;
//                          throw error;
//                      }
//                  } , 
//                   error => {
//                        var errMess = new Error(error.message)
//                        throw errMess;
//                   })
//                   .then(response => response.json())
//                   .then(leaders => dispatch(addLeaders(leaders)))
//                   .catch(error => dispatch(leadersFailed(error.message)))

  
// }
export const addLeaders = leaders=> ({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders
})
export const leadersLoading = ()=> ({
    type : ActionTypes.LEADERS_LOADING
})
export const leadersFailed = (errmess)=> ({
    type : ActionTypes.LEADERS_FAILED,
    payload : errmess
})


// promotion action

// export const fetchPromotions = ()=> (dispatch)=> {
//    // dispatch(promotionsLoading())

//     return fetch( baseUrl + 'promotions')
//                  .then(response =>{
//                      if(response.ok){
//                          return response
//                      }
//                      else {
//                          var error = new Error('Errod '+ response.status + ': ' + response.statusText)
//                          error.response = response;
//                          throw error;
//                      }
//                  } , 
//                   error => {
//                        var errMess = new Error(error.message)
//                        throw errMess;
//                   })
//                   .then(response => response.json())
//                   .then(promotions => dispatch(addPromotions(promotions)))
//                   .catch(error => dispatch(promotionsFailed(error.message)))

  
// }

// loading without data and server(cloud) 
export const addPromotions = promotions=>(dispatch)=> {
    dispatch(promotionsLoading())
    return{
        type : ActionTypes.ADD_PROMOTIONS,
        payload : promotions
    }
    
}
export const promotionsLoading = ()=> ({
    type : ActionTypes.PROMOTIONS_LOADING
})
export const promotionsFailed = (errmess)=> ({
    type : ActionTypes.PROMOTIONS_FAILED,
    payload : errmess
})


// cerateor for Favorite

export const postFavorites = (dishId) => (dispatch)=>{
    setTimeout(()=>{
        dispatch(addFavorite(dishId))
    }, 2000);
}

export const addFavorite = (dishId)=>({
    type: ActionTypes.ADD_FAVORITE,
    payload : dishId
})