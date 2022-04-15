import React from "react";
import Form from './Form';
import "./contact.scss"
import FadeIn from '../fade/FadeIn';
import Resume from "../../assets/DanniqueCV.pdf"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Arrow from '../arrowup/Arrow'



export default function Contact() {

  var today = new Date();
  var year = today.getFullYear()

  return (

    <div id="contact" className="contact">

      <Arrow className="arrow" />
      <FadeIn>
        <Form/>
      </FadeIn>

      <div className="footerRight">
        <h1>DETAILS</h1>
        <hr/>

        <div className="details">

          <div className="group1">

           <div className="personal me detail"> 
             <p> <PersonIcon  className="icon personal"/> <span className="text">Dannique de Klerk </span> </p>
           </div>
          

          <div className="address detail">
            <p> <a href="https://www.google.com/maps/place/Dordrecht/@51.7686236,4.6127524,11z/data=!3m1!4b1!4m5!3m4!1s0x47c4281a9257b48f:0x400de5a8d1e6bc0!8m2!3d51.8132979!4d4.6900929" className="anchorDetail"> <LocationOnIcon className="icon address"/> <span className="text">Dordrecht,<br/> <span className="NL">The Netherlands</span> </span> </a></p>
          </div>

        </div>

        <div className="group2">

          <div className="email detail">
            <p> <a href="mailto:danniqueeg@gmail.com" className="anchorDetail"> <EmailIcon className="icon email"/> <span className="text">danniqueeg@gmail.com </span></a></p>
          </div>

          <div className="github detail">
            <p> <a href="https://github.com/Dannique" className="anchorDetail"> <GitHubIcon className="icon gh"/> <span className="text">GitHub</span></a></p>
          </div>

        </div>

        <div className="group3">

          <div className="linkedin detail">
            <p> <a href="https://www.linkedin.com/in/dannique-d-294204214/" className="anchorDetail"> <LinkedInIcon className="icon li"/> <span className="text">LinkedIn</span></a></p>
          </div>

          <div className="cv detail">
            <p> <a href={Resume} download="Dannique's CV" className="anchorDetail"> <PictureAsPdfIcon className="icon cv"/> <span className="text">Resume</span></a></p>
          </div>

          </div>
          
        </div>

        <p className="copyright"> Handcrafted by Dannique ©{year}</p> 
       
      </div>

    </div>
  );
}
