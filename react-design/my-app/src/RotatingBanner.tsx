import Banner from './Banner';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import NumberButton from './NumberButton';
import './RotatingBanner.css';

export default function RotatingBanner({ items }) {
  return (
    <div className="container">
      <div className="row">
        <Banner item={items[0]} />
      </div>
      <div className="row">
        <PreviousButton />
      </div>
      <div className="row">
        <NumberButton number="0" />
        <NumberButton number="1" />
        <NumberButton number="2" />
        <NumberButton number="3" />
        <NumberButton number="4" />
        <NumberButton number="5" />
      </div>
      <div className="row">
        <NextButton />
      </div>
    </div>
  );
}
