import React from 'react';

export function RegisterView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
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
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Birthday:
          <input
            type="date"
            value={birthday}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button>Back</button>
    </>
  );
}
LoginView.PropTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};
