export default function SearchBar({ textInput, onTextInput }) {
  return (
    <input
      type="text"
      placeholder="search"
      value={textInput}
      onChange={(e) => onTextInput(e.target.value)}
    />
  );
}
