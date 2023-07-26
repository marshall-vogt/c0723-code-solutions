const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  const messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };

  console.log('messageData: ', messageData);
  $contactForm.reset();
}
