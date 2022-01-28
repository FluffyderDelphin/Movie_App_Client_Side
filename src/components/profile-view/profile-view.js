import React from 'react';
import axios from 'axios';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './profile-view.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function ProfileView({
  onBackClick,
  user,
  movies,
  updateUser,
  onLoggedOut,
}) {
  const deleteAc = () => {
    const token = localStorage.getItem('token');
    let confirmDel = confirm('Are you sure you want to Delete your Acount ? ');
    if (confirmDel) {
      axios
        .delete(`http://localhost:8080/users/${user._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          onLoggedOut();
        })
        .catch((response) => {
          console.error(response);
          alert('unable to delete');
        });
    }
  };
  const deleteFav = (movieId) => {
    const token = localStorage.getItem('token');
    axios
      .put(
        `https://alexandersmovieapp.herokuapp.com/users/${user.username}/favorites/remove/${movieId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        updateUser(data);
        alert('Update was sucessful ! ');
      })
      .catch((response) => {
        console.error(response);
        alert('unable to update');
      });
    console.log('User has been updated');
  };

  const favMoviesList = () => {
    if (user.favMovies.length === 0) {
      return <ListGroup.Item>No Favorite Movies</ListGroup.Item>;
    } else {
      let filterArray = movies.filter((movie) => {
        return user.favMovies.includes(movie._id);
      });
      return filterArray.map((m) => (
        <ListGroup.Item key={m._id}>
          {m.title}
          <Button
            className="removeFavBtn"
            onClick={() => {
              deleteFav(m._id);
            }}
          >
            X
          </Button>
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
        <Button
          onClick={() => {
            deleteAc();
          }}
        >
          Delete Account
        </Button>
      </Card.Body>
    </Card>
  );
}
