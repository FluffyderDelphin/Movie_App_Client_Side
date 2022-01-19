import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './navbar.scss';

export function Navbar({}) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>MovieApp</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
