import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUserName] = useState('');
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
          onChange={(e) => setUserName(e.target.value)}></input>
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
