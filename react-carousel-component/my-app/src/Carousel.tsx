import IndicatorButtons from './IndicatorButtons';
import Image from './Image';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import './Carousel.css';
import { useState, useEffect } from 'react';

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);
  function handlePreviousClick() {
    return setIndex((index - 1 + images.length) % images.length);
  }

  function handleNextClick() {
    return setIndex((index + 1) % images.length);
  }

  function handleIndicatorClick(i: number) {
    return setIndex(i);
  }

  useEffect(() => {
    const timer = setTimeout(() => setIndex((index + 1) % images.length), 3000);
    return () => clearTimeout(timer);
  }, [index, images.length]);

  return (
    <div className="container">
      <div className="row1">
        <PreviousButton onPreviousClick={handlePreviousClick} />
        <Image image={images[index]} />
        <NextButton onNextClick={handleNextClick} />
      </div>
      <div className="row2">
        <IndicatorButtons
          count={images.length}
          current={index}
          onIndicatorClick={handleIndicatorClick}
        />
      </div>
    </div>
  );
}
