// Automatic carousel

const $allImages = document.querySelectorAll('img');

const $allButtons = document.querySelectorAll('.dot-button');

let intervalTimerId = setInterval(imageSwap, 3000);
let i = 1;
function imageSwap() {
  if (i === 0) {
    i++;
  } else if (i < $allImages.length) {
    $allImages[i - 1].className = 'hidden';
    $allImages[i].className = 'active';
    $allButtons[i].classList.remove('fa-regular');
    $allButtons[i].classList.add('fa-solid');
    $allButtons[i - 1].classList.remove('fa-solid');
    $allButtons[i - 1].classList.add('fa-regular');
    i++;
  } else {
    $allImages[i - 1].className = 'hidden';
    $allImages[0].className = 'active';
    $allButtons[0].classList.remove('fa-regular');
    $allButtons[0].classList.add('fa-solid');
    $allButtons[i - 1].classList.remove('fa-solid');
    $allButtons[i - 1].classList.add('fa-regular');
    i = 1;
  }
}

// Right Arrow and Button Selections

const $leftArrow = document.querySelector('.left-arrow');
const $rightArrow = document.querySelector('.right-arrow');

$leftArrow.addEventListener('click', leftArrow);
$rightArrow.addEventListener('click', rightArrow);

function rightArrow(event) {
  clearInterval(intervalTimerId);
  imageSwap();
  intervalTimerId = setInterval(imageSwap, 3000);
}
const $row2 = document.querySelector('.row-2');
$row2.addEventListener('click', buttonSelection);

function buttonSelection(event) {
  for (let j = 0; j < $allButtons.length; j++) {
    if (event.target.id === $allButtons[j].id) {
      $allButtons[j].classList.remove('fa-regular');
      $allButtons[j].classList.add('fa-solid');
      $allImages[j].className = 'active';
      i = j;
    } else {
      $allButtons[j].classList.remove('fa-solid');
      $allButtons[j].classList.add('fa-regular');
      $allImages[j].className = 'hidden';
    }
  }
  clearInterval(intervalTimerId);
  imageSwap();
  intervalTimerId = setInterval(imageSwap, 3000);
}

function leftArrow(event) {
  let k = i;
  if (k > 1) {
    k -= 2;
    $allImages[k + 1].className = 'hidden';
    $allImages[k].className = 'active';
    $allButtons[k].classList.remove('fa-regular');
    $allButtons[k].classList.add('fa-solid');
    $allButtons[k + 1].classList.remove('fa-solid');
    $allButtons[k + 1].classList.add('fa-regular');
    i--;
  } else if (k === 1) {
    k = $allImages.length - 1;
    $allImages[0].className = 'hidden';
    $allImages[k].className = 'active';
    $allButtons[k].classList.remove('fa-regular');
    $allButtons[k].classList.add('fa-solid');
    $allButtons[0].classList.remove('fa-solid');
    $allButtons[0].classList.add('fa-regular');
    i = $allImages.length;
  } else {
    k = $allImages.length - 2;
    $allImages[k + 1].className = 'hidden';
    $allImages[k].className = 'active';
    $allButtons[k].classList.remove('fa-regular');
    $allButtons[k].classList.add('fa-solid');
    $allButtons[k + 1].classList.remove('fa-solid');
    $allButtons[k + 1].classList.add('fa-regular');
  }
  clearInterval(intervalTimerId);
  intervalTimerId = setInterval(imageSwap, 3000);
}
