import React from "react"
import Greeting from "./Greeting";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "../redux/configureStore";



const App = () => {

    return (
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<>Welcome to my app</>} />
            <Route path='/greet' element={<Greeting message='App has been connected' />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );

}

export default App
