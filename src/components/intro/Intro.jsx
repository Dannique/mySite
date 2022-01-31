import './intro.scss';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import Particlebackground from '../particles/Particles';

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
              <div className='introText'>
             <h1 className="firstText">Hi!</h1>
             <h2 className="introTwo">My Name Is Dannique.</h2>
             <h2 className="introTwo"> I Am A Self-Taught Full-Stack Web Developer.</h2>
             <h3> Lorem ipsum dolor sit amet, consectetur <b><span ref={textRef}></span></b></h3>  
             </div>
             <div class="buttonGroup">

<button class="custom-btn btn-3"><a href="#about"><span>About Me</span></a></button>
  <button class="custom-btn btn-3"><a href="#portfolio"><span>Projects</span></a></button> 
   <button class="custom-btn btn-3"><a href="#contact"><span>Contact Me</span></a></button>

</div>
          </div>

    )
}



           {/* <div className='arrowWrapper'>
              <KeyboardArrowDownIcon className='arrowDown'/>
           </div> */}
