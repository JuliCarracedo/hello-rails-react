import { createStore, combineReducers} from 'redux'

import greetingsReducer from './greetings/greetingsReducer'

const reducer = combineReducers({greetings: greetingsReducer});

const store = createStore(reducer);

export default store