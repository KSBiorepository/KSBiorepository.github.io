import './App.css';

import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

import Main from '.';

import hopelablogo from "./images/hopelablogo.jpg";
import ksulogo from "./images/ksulogo.jpg";

import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <title>Kansas State Biorepository</title>
      <div class='header'>
        <header>
          <div class="logo">
            <img class='logo' src={hopelablogo} alt="Hope Lab logo" />
          </div>
          <div class="title">
            <text>Kansas State Biorepository</text>
          </div>
          <div class="logo">
            <img class='logo' src={ksulogo} alt="KSU logo" />
          </div>
        </header>
      </div>

      <div class="goldspacer" />

      <Navbar className="navbar-bg" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div class="goldspacer" />

      <Main />
    </div>
  );
}

export default App;
