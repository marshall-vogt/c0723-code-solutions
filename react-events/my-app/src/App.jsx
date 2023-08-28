import CustomButton from './CustomButton';
import './App.css';
import './CustomButton.css';

function App() {
  function handleCustomClick({ text }) {
    alert(text);
  }

  return (
    <>
      <CustomButton
        color="red"
        text="Hello"
        onCustomClick={handleCustomClick}></CustomButton>
      <CustomButton
        color="yellow"
        text="Darkness"
        onCustomClick={handleCustomClick}></CustomButton>
      <CustomButton
        color="green"
        text="My old friend"
        onCustomClick={handleCustomClick}></CustomButton>
    </>
  );
}

export default App;
