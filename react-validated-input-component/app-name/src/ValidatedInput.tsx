import { useState } from 'react';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [passwordInput, setPasswordInput] = useState('');
  let displaySymbol = '\u274C';
  let displayMessage = '';
  let dm = 'not-valid';

  if (passwordInput.length === 0) {
    displayMessage = 'A password is required.';
  } else if (passwordInput.length < 8) {
    displayMessage = 'Your password is too short.';
  } else {
    displayMessage = '';
    displaySymbol = '\u2705';
    dm = 'is-valid';
  }

  return (
    <form>
      <div className="column">
        <label>Password:</label>
        <div>
          <input
            type="password"
            name="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}></input>
          {displaySymbol}
        </div>
        <div className={`display ${dm}`}>{displayMessage}</div>
      </div>
    </form>
  );
}
