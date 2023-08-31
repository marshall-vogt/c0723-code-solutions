import Banner from './Banner';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import NumberButtons from './NumberButtons';
import './RotatingBanner.css';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  function handlePreviousClick() {
    return setIndex((index - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    return setIndex((index + 1) % items.length);
  }

  function handleIndicatorClick(i) {
    return setIndex(i);
  }

  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <Banner item={items[index]} />
      </div>
      <div className="row">
        <PreviousButton onPreviousClick={handlePreviousClick} />
      </div>
      <div className="row">
        <NumberButtons
          count={items.length}
          current={index}
          onIndicatorClick={handleIndicatorClick}
        />
      </div>
      <div className="row">
        <NextButton onNextClick={handleNextClick} />
      </div>
    </div>
  );
}
