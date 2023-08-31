export default function NumberButtons({ count, index }) {
  const buttonArray = [];
  for (let i = 0; i < count; i++) {
    buttonArray.push(
      <button
        type="button"
        className="column-sixth button"
        key={i}
        style={{ backgroundColor: index === i ? 'lightblue' : 'white' }}>
        {i}
      </button>
    );
  }
  return <div className="buttons">{buttonArray}</div>;
}
