export default function NextButton({ onNextClick }) {
  return (
    <button type="button" className="column-full next" onClick={onNextClick}>
      Next
    </button>
  );
}
