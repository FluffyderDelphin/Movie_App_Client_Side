import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './profile-view.scss';
import { useState } from 'react';

export function ProfileView({ onBackClick, user }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>test test test</Card.Title>
        <Card.Text>Lorem Ipsum</Card.Text>
        <Button
          onClick={() => {
            onBackClick();
          }}
          className="cardBtn"
        >
          Back
        </Button>
      </Card.Body>
    </Card>
  );
}
