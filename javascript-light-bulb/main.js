const $btn = document.querySelector('.button-on');
const $lightStatus = document.querySelector('.light-on');
$btn.addEventListener('click', handleClick);

function handleClick(event) {
  if ($lightStatus.className === 'light-on') {
    $lightStatus.className = 'light-off';
    $btn.className = 'button-off';
  } else if ($lightStatus.className === 'light-off') {
    $lightStatus.className = 'light-on';
    $btn.className = 'button-on';
  }
}
