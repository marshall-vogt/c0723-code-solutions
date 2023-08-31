import Banner from './Banner';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import NumberButtons from './NumberButtons';
import './RotatingBanner.css';
import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [index /* setIndex */] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <Banner item={items[index]} />
      </div>
      <div className="row">
        <PreviousButton />
      </div>
      <div className="row">
        <NumberButtons count={items.length} index={index} />
      </div>
      <div className="row">
        <NextButton />
      </div>
    </div>
  );
}
