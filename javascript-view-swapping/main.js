const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  const $match = event.target;
  if ($match.matches('.tab')) {
    const $attribute = $match.getAttribute('data-view');
    for (let i = 0; i < $tabElements.length; i++) {
      if ($match === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
    for (let i = 0; i < $viewElements.length; i++) {
      if ($attribute === $viewElements[i].getAttribute('data-view')) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
    }
  }
}
