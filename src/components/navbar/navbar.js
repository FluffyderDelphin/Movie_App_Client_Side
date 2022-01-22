import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import './navbar.scss';

export function Navbar({ user }) {
  const onLoggedOut = () => {
    localStorage.clear();
    window.open('/', '_self');
  };

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

  // if (localStorage.getItem('token') === null)
  //   return (
  //     <Navbar>
  //       <Container>
  //         <Navbar.Brand>MovieApp</Navbar.Brand>
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav>
  //             <Nav.Link>Sign Up</Nav.Link>
  //             <Nav.Link>Register</Nav.Link>
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   );

  // return (
  //   <Navbar bg="light" expand="lg" fixed="top" className="navbar">
  //     <Container>
  //       <Navbar.Brand>MovieApp</Navbar.Brand>
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav>
  //           <Nav.Link>Home</Nav.Link>
  //           <Nav.Link>Profile</Nav.Link>
  //           <Nav.Link>
  //             <button
  //               onClick={() => {
  //                 onLoggedOut();
  //               }}
  //             >
  //               {' '}
  //               Sign Out
  //             </button>
  //           </Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );

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
            {isAuth() && <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>}
            {isAuth() && (
              <Button
                variant="link"
                onClick={() => {
                  onLoggedOut();
                }}
              >
                Logout
              </Button>
            )}
            {!isAuth() && <Nav.Link href="/">Sign-in</Nav.Link>}
            {!isAuth() && <Nav.Link href="/register">Sign-up</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
