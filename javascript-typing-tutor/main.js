const $allCharacters = document.querySelectorAll('span');
document.addEventListener('keydown', typeTutor);

let i = 0;

function typeTutor(event) {
  const $character = $allCharacters[i];
  const $nextCharacter = $allCharacters[i + 1];
  if (event.key === $character.textContent) {
    $character.className = 'green';
    $nextCharacter.className = 'current';
    i++;
  } else {
    $character.className = 'red';
  }
}
