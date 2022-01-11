import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function LoginView({ onLoggedIn, onRegisterClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    onLoggedIn(username);
  };

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <button
        onClick={() => {
          onRegisterClick(true);
        }}
      >
        Register
      </button>
    </form>
  );
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func,
  onRegisterClick: PropTypes.func,
};
