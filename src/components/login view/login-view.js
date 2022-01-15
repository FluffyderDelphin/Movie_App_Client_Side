import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import '../../scss/components/login-view/_login-view.scss';

export function LoginView({ onLoggedIn, onRegisterClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    onLoggedIn(username);
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title className="loginTitle">Login</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Card.Text>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Card.Text>
          <Button
            className="loginButtons"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            className="loginButtons"
            variant="primary"
            onClick={() => {
              onRegisterClick(true);
            }}
          >
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
};
