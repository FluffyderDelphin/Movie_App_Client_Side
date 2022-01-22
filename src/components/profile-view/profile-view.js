import axios from 'axios';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './profile-view.scss';
import { useState } from 'react';

function ProfileView({ onBackClick }) {
  const userData = Json.parse(localStorage.getItem('user'));
  return (
    <Card>
      <Card.Body>{userData.username}</Card.Body>

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
