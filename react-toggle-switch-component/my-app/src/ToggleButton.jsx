import './ToggleButton.css';
import { useState } from 'react';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  let text = '';
  if (isOn) {
    text = 'On';
  } else {
    text = 'Off';
  }
  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <div className="container">
      <div className={`button-background-${text}`} onClick={handleClick}>
        <div className={`button-${text}`}></div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
}
