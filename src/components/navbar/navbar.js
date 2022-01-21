import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './navbar.scss';

export function Navbar({ onLoggedOut }) {
  if (localStorage.getItem('token') === null)
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>MovieApp</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link>Sign Up</Nav.Link>
              <Nav.Link>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand>MovieApp</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link
              onClick={() => {
                this.onLoggedOut();
              }}
            >
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
