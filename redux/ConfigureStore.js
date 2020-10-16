import {createStore , combineReducers , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {dishes} from './dishes';
import {promotions} from './promotions';
import {leaders} from './leaders';
import {comments} from './comments';
import {favorites} from './Favorites'

export const ConfigureStore = ()=>{
    const store = createStore(
        combineReducers({
            dishes ,
            promotions ,
            leaders ,
            comments ,
            favorites
        }),
        applyMiddleware(thunk , logger)
    )
    
    return store ;
}