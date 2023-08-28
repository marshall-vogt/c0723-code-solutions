import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);
  function handleClick() {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter', isClicked);
  }
  if (isClicked) {
    return (
      <button onClick={handleClick} className="white">
        {text}
      </button>
    );
  }
  return (
    <button onClick={handleClick} className={color}>
      {text}
    </button>
  );
}
