import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './update-user.scss';
import axios from 'axios';

export function UpdateUser({ user, onBackClick, updateUser }) {
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const isReq = validate();
    if (isReq) {
      axios
        .put(
          `https://alexandersmovieapp.herokuapp.com/users/${user.username}`,
          {
            username: username,
            password: password,
            email: email,
            birthday: birthday,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          updateUser(data);
          alert('Update was sucessful ! ');
          window.open('/', '_self');
        })
        .catch((response) => {
          console.error(response);
          alert('unable to update');
        });
      console.log('User has been updated');
    }
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title className="updateTitle">Update Information</Card.Title>
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

          <Button type="submit" onClick={handleUpdate} className="upButtons">
            Submit
          </Button>
          <Button
            onClick={() => {
              onBackClick();
            }}
          >
            Back
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
