import { React, useState } from "react";
import "./contact.scss"
import FadeIn from '../fade/FadeIn';
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import codeSandBox from "../../images/codesandbox.png"
import Arrow from '../arrowup/Arrow'

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#CA3E47;"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#CA3E47;"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#CA3E47;"
    }
  }
});

export default function Form() {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    return setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(function () {
      setMessage(true);
    }, 2500);
  };
 

  return (
    <div id="contact" className="contact">



<FadeIn>
    <div className="formContainer">

    <div className="contactH1">
    <h1>GET IN TOUCH</h1>
     
        </div>


      <div className="formDiv"> 

        <form onSubmit={handleSubmit} >

          <CssTextField
            autoComplete="off"
            id="outlined-basic"
            label="Name"
            onChange={handleChange}
            variant="outlined"
            className="input"
            required
          />

          <CssTextField
           name="Email"
           type="Email"
           autoComplete="new-password"
            id="outlined-basic"            
            label="Email"
            variant="outlined"
            className="input"
            required
          />

          <TextareaAutosize
            placeholder="Message *"
            className="textArea"
            minRows={6}
            required
          />

          <Button
          onClick={() => {
            setLoading(true);
            setTimeout(function () {
              setLoading(false);
              // window.location.href = "/";
            }, 2500);
          }}
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
        >
          {isLoading ? <CircularProgress className="loader" color="secondary" /> : "Send"}
        </Button>

        {message && (
            <span class="submitMessage">
              Thank you for reaching out <b> {name}</b>! <br />
              I'll be in touch with you shortly😀.
            </span>
          )}
        </form>
      </div>
    
    </div>
    </FadeIn>
    <Arrow/>
    <div className="footerRight">
          <h1>DETAILS</h1>
          <hr />
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
