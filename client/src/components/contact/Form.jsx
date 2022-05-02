import { React, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import validator from 'validator';
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";


export default function Form(){

    const [message, setSubMessage] = useState(false);
    const [emailErr, setEmailErr] = useState('')
    const [name, setName] = useState("");
    const [isLoading, setLoading] = useState(false);
    const form = useRef();

    const handleName = (e) => {
        return setName(e.target.value);
      };
    
      const validateEmail = (e) => {
       
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailErr('')
        } else {
          setEmailErr('Please enter a valid Email')
        }
      }
    
      const handleSubmit = (e) => {
        
       const userID = process.env.REACT_APP_USER_ID;
       const serviceID = process.env.REACT_APP_SERVICE_ID;

        e.preventDefault();
    
        emailjs.sendForm(
          serviceID,'template_r2z7sj8',form.current,userID
        )
          .then((res) => {
            console.log('SUCCESS!', res.status, res.text);
            setTimeout(function () {
              setSubMessage(true);
            }, 1500);
    
          })
          .catch((err) => {
            console.log(err.text);
            alert("There was a problem with sending the email, please try again.", err)
          });
      };


      return(

        <div className="formContainer">

        <div className="contactH1">
          <h1>GET IN TOUCH</h1>
        </div>
  
  
        <div className="formDiv"> 
  
          <form ref={form} onSubmit={handleSubmit} autoComplete="off">

            <input
            className="input name"
            placeholder="Name *"
            type="text"
            name="name"
            onChange={handleName}
            id="name"
            required
          />

          <input
            className="input email"
            placeholder="Email *"
            type="email"
            name="email"
            onChange={(e) => validateEmail(e)}
            id="name"
            required
          />
          <span className="emailErr">{emailErr}</span>

          <textarea
            name="message"
            placeholder="Message *"
            className="textArea"
            required
          />
  
            <Button
            onClick={() => {
              setLoading(true);
              setTimeout(function () {
                setLoading(false);
              }, 2500);
            }}
            variant="contained"
            endIcon={<SendIcon />}
            type="submit"
          >
            {isLoading ? <CircularProgress size={30}
          thickness={0.9}
          className="loader" /> : "Send"}
          </Button>
  
      {  message && (
              <span class="submitMessage">
                Thank you for reaching out <b> {name}</b> ! <br />
                <span className="submitDisplay"> I'll be in touch with you shortly😀.</span>
              </span>
            )}
  
          </form>
        </div>
      
      </div>

      )
}