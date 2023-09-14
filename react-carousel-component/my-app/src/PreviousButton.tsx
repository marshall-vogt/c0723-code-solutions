type PreviousButtonProps = {
  onPreviousClick: () => void;
};

export default function PreviousButton({
  onPreviousClick,
}: PreviousButtonProps) {
  return (
    <button
      type="button"
      className="column-full previous"
      onClick={onPreviousClick}>
      Prev
    </button>
  );
}
