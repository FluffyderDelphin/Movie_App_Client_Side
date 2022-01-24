import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './profile-view.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ProfileView({ onBackClick, user, movies }) {
  const favMoviesList = () => {
    if (user.favMovies.length === 0) {
      return <ListGroup.Item>No Favorite Movies</ListGroup.Item>;
    } else {
      let filterArray = movies.filter((movie) => {
        return user.favMovies.includes(movie._id);
      });
      return filterArray.map((m) => (
        <ListGroup.Item key={m._id}>{m.title}</ListGroup.Item>
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
        <Card.Title className="titleclass">Favorite Movies:</Card.Title>
        <ListGroup>{favMoviesList()}</ListGroup>
        <Button
          onClick={() => {
            onBackClick();
          }}
          className="profileBtn"
        >
          Back
        </Button>
        <Link to={`/user-update/${user.username}`}>
          <Button className="cardLinkOne">Update Information</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
