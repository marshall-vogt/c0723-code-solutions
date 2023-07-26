document.querySelectorAll('form');

// focus event

document.addEventListener('focusin', handleFocus);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

// blur event

document.addEventListener('focusout', handleBlur);

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

// input event

document.addEventListener('input', handleInput);

function handleInput(event) {
  console.log('Value of', event.target.name, ':', event.target.value);
}
