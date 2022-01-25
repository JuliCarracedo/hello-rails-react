import React from "react"
import Greeting from "./Greeting";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<>Welcome to my app</>} />
          <Route path='/greet' element={<Greeting message='App has been connected' />} />
        </Routes>
      </BrowserRouter>
    );

}

export default App
