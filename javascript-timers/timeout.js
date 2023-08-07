setTimeout(changeText, 2 * 1000);

const $h1 = document.querySelector('h1');
function changeText() {
  $h1.textContent = 'Hello There';
}
