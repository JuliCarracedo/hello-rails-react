import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getGreetingsRequest } from "../redux/greetings/greetingsReducer";
const Greeting = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getGreetingsRequest());
    },[]);

    const { greetings, loading } = useSelector(state => state.greetings );
    console.log(greetings, loading)
    return (
      <React.Fragment>
        Message: This is a message
      </React.Fragment>
    );
}

export default Greeting
