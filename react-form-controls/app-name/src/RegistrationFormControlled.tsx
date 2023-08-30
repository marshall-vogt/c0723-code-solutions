import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Controlled input:', { username, password });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
