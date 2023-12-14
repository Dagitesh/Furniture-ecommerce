import React from 'react';
import Cards from "./components/Cards";
import HeadDisplay from './components/HeadDisplay';
import AppBar from './components/AppBar';
import Options from './components/options';
import AboutUs from './components/About_us';
import Oval from "./components/oval_cards";
import Footer from './components/footer';
import Catagory from './components/catagories';

function Landing() {
 

  return (
    <div>
        <AppBar/>
        <HeadDisplay/>

        <Options/>
     <Cards />
     <AboutUs/>
     <Catagory/>
   <Oval/>
   <Footer/>
    </div>
  );
}

export default Landing;