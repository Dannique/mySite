import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import Particlebackground from '../particles/Particles';
import Me from "../../images/niekhd.png";

//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings:["JavaScript.", "Nodejs.", "MongoDB.", "EJS.", "RESTful API.", "ReactJS.", "JQuery.", "Git.","NPM.", "Bootstrap.", "HTML.", "CSS.", "Sass."],
    });
  }, []);

    return (

        <div className="intro center" id="intro">
              <Particlebackground/>
           <div className='left'>
              <div className='introText'>
             <h1 className="firstText">Hi!</h1>
             <h2 className="introTwo">My Name Is Dannique.</h2>
             <h2 className="introTwo"> I Am A Self-Taught Full-Stack Web Developer.</h2>
             <h3> I got your back when it comes to: <br className="break"/> <b><span ref={textRef}></span></b></h3>  
             </div>


           <div class="buttonGroup">
              <button class="custom-btn btn-3 about-btn"><a href="#about"><span className='border'><p className='btn-text'>About Me</p></span></a></button>
              <button class="custom-btn btn-3 portfolio-btn"><a href="#portfolio"><span className='border'><p className='btn-text'>Projects</p></span></a></button> 
              <button class="custom-btn btn-3 contact-btn"><a href="#contact"><span className='border'><p className='btn-text'>Contact Me</p></span></a></button>
            </div>

          </div>

        <div className='right'>
          <div className='avatarDiv'>
               <img src={Me} alt="cartoon of me" className='avatar'/>  
             </div>
        </div>

        
      </div>

    )
}


