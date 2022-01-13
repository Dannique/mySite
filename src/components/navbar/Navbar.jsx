import React from 'react';
import './navbar.scss';
import { Container, Navbar, Nav } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';


export default function Topbar() {
    return (
    <Navbar collapseOnSelect className='navbar' fixed="top" expand="md" >
    <Container>
    <Navbar.Brand href="#intro"> <img src="https://i.ibb.co/qCfhcLG/Dannique-4-removebg-preview.png" height="65px" width="65px" alt="logo" /> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end items col-11">
          <Nav.Link href="#about" className='navLink'>  <p className='navText'> <PersonIcon className='icon' /> About Me </p> </Nav.Link>
          <Nav.Link href="#portfolio" className='navLink'>     <p className='navText'> <BusinessCenterIcon className='icon' /> Portfolio </p> </Nav.Link>
          <Nav.Link href="#contact" className='navLink'>    <p className='navText'> <EmailIcon className='icon' /> Contact </p> </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  
    )
}






