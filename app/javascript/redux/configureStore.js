import { createStore, combineReducers, applyMiddleware} from 'redux'

import greetingsReducer from './greetings/greetingsReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({greetings: greetingsReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store