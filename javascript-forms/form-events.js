const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');
$userName.addEventListener('focusin', handleFocus);
$userName.addEventListener('focusout', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focusin', handleFocus);
$userEmail.addEventListener('focusout', handleBlur);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('focusin', handleFocus);
$userMessage.addEventListener('focusout', handleBlur);
$userMessage.addEventListener('input', handleInput);

// focus event

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

// blur event

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name', event.target.name);
}

// input event

function handleInput(event) {
  console.log('Value of', event.target.name, ':', event.target.value);
}
