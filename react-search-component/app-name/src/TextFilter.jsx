import './TextFilter.css';

export default function TextFilter({ textContent, textInput }) {
  const textList = textContent.map((text, index) =>
    text.toLowerCase().includes(textInput.toLowerCase()) ? (
      <li key={index}>{text}</li>
    ) : undefined
  );

  return (
    <div className="text">
      <ul>{textList}</ul>
    </div>
  );
}
