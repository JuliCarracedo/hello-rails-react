import { getGreetingsRequest, getGreetingsSuccess } from "./greetingsReducer"
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const requestGreetings = () => async(dispatch) => {
    dispatch(getGreetingsRequest());
    const res = await fetch('/v1/greetings');
    const json = await res.json();
    dispatch(getGreetingsSuccess(json));
}
 

export default requestGreetings