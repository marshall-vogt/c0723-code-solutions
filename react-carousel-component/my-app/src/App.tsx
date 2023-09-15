import Carousel from './Carousel';

const images: string[] = [
  '/images/001.png',
  '/images/004.png',
  '/images/007.png',
  '/images/025.png',
  '/images/039.png',
];
function App() {
  return (
    <div className="main">
      <Carousel images={images} />
    </div>
  );
}

export default App;
