import React, { useState, useEffect } from "react";
import Topbar from './components/navbar/Navbar'
import About from  './components/about/About'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import LoadingScreen from './components/loader/LoadingScreen';
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
//import {} from '@mui/icons-material';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
       {loading === false ? (

    <div className="app">

      <Topbar/>
      
      <div className="sections">

        <Intro/>
        <About/>
        <Portfolio/>
        <Contact/>
        
      </div>

    </div>
       ):(
       <LoadingScreen/>
       )}
    </>
  );
}

export default App;
