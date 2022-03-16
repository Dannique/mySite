import { React, useState, useRef } from "react";
import emailjs from 'emailjs-com';
import validator from 'validator';
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";

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
    
        e.preventDefault();
    
        emailjs.sendForm(
          'service_brkwwnk', 'template_r2z7sj8', form.current,  'user_wWj68q5Xptjr31C0nghjM'
        )
          .then((res) => {
            console.log('SUCCESS!', res.status, res.text);
            setTimeout(function () {
              setSubMessage(true);
            }, 1500);
    
          })
          .catch((err) => {
            console.log(err.text);
            alert("eeehh?", err)
          });
      };


      return(

        <div className="formContainer">

        <div className="contactH1">
          <h1>GET IN TOUCH</h1>
        </div>
  
  
        <div className="formDiv"> 
  
          <form ref={form} onSubmit={handleSubmit} >
  
            <CssTextField
             type="text"
             name="name"
              autoComplete="off"
              id="outlined-basic"
              label="Name"
              onChange={handleName}
              variant="outlined"
              className="input"
              required
            />
  
            <CssTextField
             name="email"
             type="email"
             onChange={(e) => validateEmail(e)}
              id="outlined-basic"            
              label="Email"
              variant="outlined"
              className="input"
              required
            />
          <span className="emailErr">{emailErr}</span>
  
            <TextareaAutosize
            name="message"
              placeholder="Message*"
              className="textArea"
            //  maxRows={6}
              minRows={3}
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