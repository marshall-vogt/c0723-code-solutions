import { useState } from 'react';
import './HotButton.css';

export default function HotButton() {
  const [clicks, setClicks] = useState(0);
  let color;
  if (clicks <= 3) {
    color = 'purple';
  } else if (clicks <= 6) {
    color = 'violet';
  } else if (clicks <= 9) {
    color = 'red';
  } else if (clicks <= 12) {
    color = 'orange';
  } else if (clicks <= 15) {
    color = 'yellow';
  } else {
    color = 'white';
  }

  return (
    <>
      <button onClick={() => setClicks(clicks + 1)} className={color}>
        Hot Button
      </button>
      <p>Clicks: {clicks}</p>
    </>
  );
}
