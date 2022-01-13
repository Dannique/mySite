import { React, useState } from "react";
import "./contact.scss"
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export default function Contact(){

   const [message, setMessage] = useState(false);
   const [name, setName] = useState("");
 
   const handleChange = (e) => {
     return setName(e.target.value);
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
     setMessage(true);
   };
    
return(
<div className="contact center" id="contact">

<div className="formContainer">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="none"
          onChange={handleChange}
        />
        <input type="email" placeholder="Email" autoComplete="none" />
        <textarea placeholder="Message"></textarea>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Send
        </Button>

        {message && (
          <span class="submitMessage">
            Thank you for the message {name}, I'll reply ASAP!
          </span>
        )}
      </form>
    </div>
</div>

)}