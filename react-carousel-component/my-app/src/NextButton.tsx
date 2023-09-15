type NextButtonProps = {
  onNextClick: () => void;
};

export default function NextButton({ onNextClick }: NextButtonProps) {
  return (
    <button type="button" className="column-full next" onClick={onNextClick}>
      Next
    </button>
  );
}
