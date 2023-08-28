import { useState } from 'react';
import './App.css';
import ToggleButton from './ToggleButton';
import './ToggleButton.css';

function App() {
  const [index, setIndex] = useState(0);

  function minusOne() {
    setIndex(index - 1);
  }

  function plusOne() {
    setIndex(index + 1);
  }

  return (
    <>
      <ToggleButton text="Down" CustomClick={minusOne} />
      <>{index}</>
      <ToggleButton text="Up" CustomClick={plusOne} />
    </>
  );
}

export default App;
