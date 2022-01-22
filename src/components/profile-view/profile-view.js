import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './profile-view.scss';

function ProfileView({ user }) {
  return (
    <Card>
      <Card.Body>{user.username}</Card.Body>

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
