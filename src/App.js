import React from "react";
import './App.css';
import Pages from "./component/Pages";
import Nav from './component/Nav';
import Cardd from './component/Cardd'
import Footer from "./component/Footer";
import Home from './component/Home'

const  App=()=> {
  return (
   <div>
        <Nav />
       <Cardd />
       <Pages />
       <Footer />
   </div>

  );
}

export default App;
