export default function ToggleButton({ text, CustomClick }) {
  return <button onClick={CustomClick}>{text}</button>;
}
