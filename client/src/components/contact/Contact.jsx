import React from "react";
import Form from './Form';
import "./contact.scss"
import FadeIn from '../fade/FadeIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//  //import codeSandBox from "../../images/codesandbox.png"
import Arrow from '../arrowup/Arrow'



export default function Contact() {

  return (

    <div id="contact" className="contact">

      <FadeIn>
        <Form/>
      </FadeIn>
      <Arrow/>

      <div className="footerRight">
        <h1>DETAILS</h1>
        <hr/>

        <div className="details">

          <div className="personal me"> 
            <p> <PersonIcon  className="icon personal"/> <span className="text">Dannique de Klerk </span> </p>
          </div>

          <div className="address">
            <p> <LocationOnIcon className="icon address"/> <span className="text"> Dordrecht,<br/> <span className="NL">The Netherlands</span> </span></p>
          </div>

          <div className="email">
            <p> <EmailIcon className="icon email"/> <a href="mailto:danniqueeg@gmail.com"> <span className="text">danniqueeg@gmail.com </span></a></p>
          </div>

          <div className="github">
            <p> <GitHubIcon className="icon gh"/> <a href="https://github.com/Dannique"><span className="text">GitHub</span></a></p>
          </div>

          <div className="linkedin">
            <p> <LinkedInIcon className="icon li"/> <a href="linkedin.com"><span className="text">LinkedIn</span></a></p>
          </div>

          {/* <div className="codeSandBox">
            <p> <img src={codeSandBox} alt="boxIcon" width="23px" height="23px" className="icon cs"/> <a href="linkedin.com"><span className="text">CodeSandBox?</span></a></p>
          </div> */}

        </div>
          
        <p className="copyright">Handcrafted by ©Dannique 2022</p>
       
      </div>

    </div>
  );
}
