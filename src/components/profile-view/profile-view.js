import axios from 'axios';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './profile-view.scss';
import { useState } from 'react';

function ProfileView({ user }) {
  const [userData, setUserData] = useState('');
  const getUserData = () => {
    axios
      .get(`https://alexandersmovieapp.herokuapp.com/users/${user}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response);
      })
      .catch((err) => {
        setUserData('Userdata not found');
        console.log(err);
      });
  };
  return (
    <Card>
      <Card.Body></Card.Body>

      <Button
        onClick={() => {
          onBackClick();
        }}
        className="cardBtn"
      >
        Back
      </Button>
    </Card>
  );
}

export default ProfileView;
