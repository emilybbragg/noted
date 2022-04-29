import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
  <div className="navigation">
    <Navbar bg="light" variant="light" className="navBar">
      <div className="navContainer">
      <div className="title">Noted.</div>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/reminderlist">Reminders</Nav.Link>
        <Nav.Link as={NavLink} to="/notelist">Notes</Nav.Link>
      </Nav>
        </div>
    </Navbar>
  </div>
  )
}

export default NavBar;