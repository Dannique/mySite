import { React, useState } from "react";
import "./contact.scss"
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

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "green"
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

    <div className="formContainer">

    <div className="contactH1">
    <h1>Get In Touch.</h1>
        <hr />
        </div>

      <div className="form"> 

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
    

    <div className="footerRight">

        <div className="details">

          <div className="personal me"> 
            <p> <PersonIcon /> Dannique de Klerk</p>
          </div>

          <div className="address">
            <p> <LocationOnIcon className="icon address"/> Dordrecht,<br/> The Netherlands</p>
          </div>

          <div className="email">
            <p> <EmailIcon className="icon email"/> <a href="danniqueeg@gmail.com"> danniqueeg@gmail.com </a></p>
          </div>

          <div className="github">
            <p> <GitHubIcon className="icon gh"/> <a href="https://github.com/Dannique">GitHub</a></p>
          </div>

          <div className="linkedin">
            <p> <LinkedInIcon className="icon li"/> <a href="linkedin.com">LinkedIn</a></p>
          </div>

        </div>
          
        <p className="copyright">Copyright 2022 Dannique</p>
       
    </div>


    </div>
  );
}
