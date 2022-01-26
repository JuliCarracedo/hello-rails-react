import React from "react"
import { useDispatch, useSelector, connect } from 'react-redux'
import { useEffect } from "react";
import { createStructuredSelector } from "reselect";
import requestGreetings from "../redux/greetings/async";

const Greeting = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(requestGreetings());
    },[]);
    
    const { greetings } = useSelector(state => state.greetings );
    const list = greetings.greetings;
    let message = 'Loading';
    console.log(list)
     if(list){message = list[Math.floor(Math.random()*5)].message}
     
    return (
      <React.Fragment>
        Message: {message}
      </React.Fragment>
    );
}

export default Greeting
