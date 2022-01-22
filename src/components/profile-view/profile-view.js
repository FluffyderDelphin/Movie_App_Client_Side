import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './profile-view.scss';
import { useState } from 'react';

export function ProfileView({ onBackClick, user, movies }) {
  const testList = ['61a8ea062c5b82227094ce5e'];
  const favMoviesList = (list) => {
    if (list.length === 0) {
      return <ListGroup.Item>No Favorite Movies</ListGroup.Item>;
    } else {
      return list.map((m) => (
        <ListGroup.Item>
          {movies.find((param) => param._id === m).title}
        </ListGroup.Item>
      ));
    }
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>User Profile :</Card.Title>
        <ListGroup variant="flush" className="Profile List">
          <ListGroup.Item>Username : {user.username}</ListGroup.Item>
          <ListGroup.Item>Email : {user.email}</ListGroup.Item>
          <ListGroup.Item>Birthday: {user.birthday}</ListGroup.Item>
        </ListGroup>
        <Card.Title>Favorite Movies:</Card.Title>
        <ListGroup>{favMoviesList(user.favMovies)}</ListGroup>
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
