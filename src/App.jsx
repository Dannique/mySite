import Navbar from './components/navbar/Navbar'
import About from  './components/about/About'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

//import {} from '@mui/icons-material';


function App() {
  return (
    <div className="app">

    <Navbar/>
      
    <div className="sections">
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>





    </div>
  );
}

export default App;
