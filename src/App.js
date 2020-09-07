import React from 'react';
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import Contactus from './Components/Layout/Contactus'
import Banner from './Components/Main/Banner'
import Main from './Components/Main/Main'
function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Main/>
      <Contactus/>
      <Footer/>
      
    </div>
  );
}

export default App;
