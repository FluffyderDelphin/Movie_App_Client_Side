import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';

import { Link } from 'react-router-dom';

export class MovieCard extends React.Component {
  render() {
    const { movie, updateFav, user } = this.props;
    const handleUpdate = (e) => {
      axios
        .post(`/users/${user.username}/favorites/remove/${movie._id}`)
        .then((response) => {
          const data = response.data;
          console.log(data);
          updateFav(data);
          alert('Update was sucessful ! ');
          window.open('/', '_self');
        })
        .catch((response) => {
          console.error(response);
          alert('unable to update');
        });
      console.log('User has been updated');
    };

    return (
      <Card className="cardContainer">
        <Card.Img variant="top" src={movie.imageurl} />
        <Card.Body className="cardBody">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link" className="cardBtn">
              Open
            </Button>
          </Link>
          <Button
            variant="link"
            onClick={() => {
              this.handleUpdate();
            }}
          >
            Add to favorites
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
  }).isRequired,
};
