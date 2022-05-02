import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import './navbar.scss';

export function NavBar({ user, onLoggedOut }) {
  const isAuth = () => {
    if (typeof window == 'undefined') {
      return false;
    }
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  };

  return (
    <Navbar
      className="main-nav"
      sticky="top"
      bg="dark"
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="navbar-logo" href="/">
          {' '}
          MovieApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {isAuth() && <Link href={`/user/${user}`}>{user}</Link>}
            {isAuth() && (
              <Button
                variant="link"
                onClick={() => {
                  onLoggedOut();
                  window.open('/', '_self');
                }}
              >
                Logout
              </Button>
            )}
            {!isAuth() && <Link href="/">Sign-in</Link>}
            {!isAuth() && <Link href="/register">Sign-up</Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
