import React from "react";
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './component/Home'

const  App=()=> {
  return (
      <BrowserRouter>
   <Routes>
       <Route path='/' element={<Home />}/>
       {/* <Nav />*/}
       {/*<Cardd />*/}
       {/*<Pages />*/}
       {/*<Footer />*/}
   </Routes>
      </BrowserRouter>
  );
}

export default App;
