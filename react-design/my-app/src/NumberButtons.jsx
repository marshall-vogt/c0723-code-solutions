export default function NumberButtons({ count, current, onIndicatorClick }) {
  const buttonArray = [];
  for (let i = 0; i < count; i++) {
    buttonArray.push(
      <button
        type="button"
        className="column-sixth button"
        key={i}
        style={{ backgroundColor: current === i ? 'lightblue' : 'white' }}
        onClick={() => onIndicatorClick(i)}>
        {i}
      </button>
    );
  }
  return <div className="buttons">{buttonArray}</div>;
}
