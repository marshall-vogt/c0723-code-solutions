const setIntervalId = setInterval(countdown, 1 * 1000);

const $headingText = document.querySelector('.countdown-display');
const countdownArray = [3, 2, 1, '~Earth Beeeelooowww Us~'];
let i = 0;

function countdown() {
  if (i < countdownArray.length) {
    $headingText.textContent = countdownArray[i];
    i++;
  } else {
    clearInterval(setIntervalId);
  }
}
