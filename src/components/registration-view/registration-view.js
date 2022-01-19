import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './registration-view.scss';
import axios from 'axios';

export function RegisterView({ closeRegisterView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');

  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErrr, setEmailErr] = useState('');

  const validate = () => {
    let isReq = true;

    if (!username) {
      setUsernameErr('Username Required');
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr('Username not valid');
      isReq = false;
    }

    if (!password) {
      setPasswordErr('Password is Required');
      isReq = false;
    } else if (password.length < 8) {
      setPasswordErr('Password not valid');
      isReq = false;
    }

    if (!email) {
      setEmailErr('Email is required');
      isReq = false;
    } else if (email.indexOf('@') === -1) {
      setEmailErr('Email is not valid');
      isReq = false;
    }
    return isReq;
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post('https://alexandersmovieapp.herokuapp.com/users', {
          username: username,
          password: password,
          email: email,
          birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert('Registration successful, please login ! ');
          window.open('/', '_self');
          // closeRegisterView(false);
        })
        .catch((response) => {
          console.error(response);
          alert('unable to register');
        });
      console.log('User has been registred');
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title className="registerTitle">Register</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username: </Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameErr && <p className="valClass">{usernameErr}</p>}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && <p className="valClass">{passwordErr}</p>}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErrr && <p className="valClass">{emailErrr}</p>}
          </Form.Group>
          <Form.Group controlId="formBirthday">
            <Form.Label>Birthday: </Form.Label>
            <Form.Control
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </Form.Group>

          <Button
            type="submit"
            onClick={handleRegistration}
            className="regButtons"
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

RegisterView.propType = {
  closeRegisterView: PropTypes.func.isRequired,
};
