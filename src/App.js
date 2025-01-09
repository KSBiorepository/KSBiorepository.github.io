import './App.css';

import React from "react";
import { Navbar } from 'react-bootstrap';
import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./pages/about";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <title>Kansas State Biorepository</title>
      <div class='header'><header>Kansas State Biorepository</header></div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/"
            style={{ color: "green" }}>
            Home page
          </Navbar.Brand>
          <Navbar.Brand href="/about"
            style={{ color: "green" }}>
            About
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
