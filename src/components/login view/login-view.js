import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './login-view.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function LoginView({ onLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const validate = () => {
    let isReq = true;
    if (!username) {
      setUsernameErr('Username Required');
      isReq = false;
    } else if (username.length < 2) {
      setUsernameErr('Username must be 2 characters long');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password is Required');
      isReq = false;
    } else if (password.length < 1) {
      setPassword('Password must be 6 characters long');
      isReq = false;
    }
    return isReq;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    // console.log(username, password);
    // onLoggedIn(username);
    if (isReq) {
      axios
        .post('https://alexandersmovieapp.herokuapp.com/login', {
          username: username,
          password: password,
        })
        .then((response) => {
          const data = response.data;
          onLoggedIn(data);
        })
        .catch((e) => {
          console.log(`User with the Name ${username} not found`);
          console.log(password);
        });
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title className="loginTitle">Login</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameErr && <p className="valClass">{usernameErr}</p>}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            {passwordErr && <p className="valClass">{passwordErr}</p>}
          </Form.Group>

          <Button
            className="loginButtons"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Link to={'/register'}>
            <Button className="loginButtons" variant="primary">
              Register
            </Button>
          </Link>
        </Form>
      </Card.Body>
    </Card>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
};
