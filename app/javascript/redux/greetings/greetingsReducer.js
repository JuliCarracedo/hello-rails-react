const GET_GREETINGS_REQUEST = 'redux/greetings/greetingsReducer/GET_GREETINGS_REQUEST'
const GET_GREETINGS_SUCCESS = 'redux/greetings/greetingsReducer/GET_GREETINGS_SUCCESS'

const initialState = {
    greetings: [],
}

export const getGreetingsRequest = () => ({
    type: GET_GREETINGS_REQUEST,
})
export const getGreetingsSuccess = (payload) => ({
    type: GET_GREETINGS_SUCCESS,
    payload
})

const greetingsReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_GREETINGS_REQUEST: console.log('request dispatched') ;return {...state, loading: true}
        case GET_GREETINGS_SUCCESS: return {...state, greetings: action.payload}
        default: return state
    }
}

export default greetingsReducer;