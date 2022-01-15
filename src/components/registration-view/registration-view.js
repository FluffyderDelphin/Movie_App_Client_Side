import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row, Card } from 'react-bootstrap';
import './registration-view.scss';

export function RegisterView({ closeRegisterView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log('User has been registred');
    closeRegisterView(false);
  };

  return (
    <Container className="registerContainer">
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title className="registerTitle">Register</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>
                    Username:
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>
                    Password:
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>
                    Email:
                    <Form.Control
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="formBirthday">
                  <Form.Label>
                    Birthday:
                    <Form.Control
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Form.Label>
                </Form.Group>
                <Button type="submit" onClick={handleRegistration}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

RegisterView.propType = {
  closeRegisterView: PropTypes.func.isRequired,
};
