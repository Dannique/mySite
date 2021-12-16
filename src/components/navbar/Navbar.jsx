import React from 'react';
import './navbar.scss';
import { Container, Navbar, Nav } from "react-bootstrap";
//  import EmailIcon from '@mui/icons-material/Email';
//@material-ui/icons/
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';


//import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
//import Container from 'react-bootstrap/Container';
export default function Topbar() {
    return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#intro"> <img src="https://i.ibb.co/qCfhcLG/Dannique-4-removebg-preview.png" height="65px" width="65px" alt="logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#intro">Intro</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

   
    )
}

    //    <div className="navbar" id="navbar">
    //    <div id="wrapper">
    //      <div className="left">
    //        <a className="logo" href="#intro">
    //          <img src="https://i.ibb.co/qCfhcLG/Dannique-4-removebg-preview.png" height="65px" width="65px" alt="logo" />
    //        </a>
    //      </div>
    
    //      <div className="right">

    //        <div className="itemContainer">
    //          <a href="#about">
    //          <PersonIcon className="icon personIcon" />
    //          <span className="iconText">About</span>
    //          </a>
    //        </div>
    
    //        <div className="itemContainer">
    //        <a href="#portfolio">
    //          <BusinessCenterIcon className="icon kofferIcon" />
    //          <span className="iconText">Portfolio</span>
    //          </a>
    //        </div>
    
    //        <div className="itemContainer">
    //        <a href="#contact">
    //          <EmailIcon className="icon emailIcon" />
    //          <span className="iconText">Contact</span>
    //          </a>
    //        </div>
    
    //      </div>
    //    </div>
    //  </div>






