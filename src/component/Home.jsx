import React from 'react'
import Pages from "./Pages";
import Nav from './Nav';
import Cardd from './Cardd';
import Footer from "./Footer";
const Home =()=>{
    return(
        <div>
            <Nav />
            <Cardd />
            <Pages />
            <Footer />
            <Nav />

        </div>
    )
};
export default Home;