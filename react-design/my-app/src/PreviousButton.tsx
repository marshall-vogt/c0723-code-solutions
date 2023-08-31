export default function PreviousButton({ onPreviousClick }) {
  return (
    <button
      type="button"
      className="column-full previous"
      onClick={onPreviousClick}>
      Prev
    </button>
  );
}
