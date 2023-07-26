const $openModal = document.querySelector('.open-modal-button');
$openModal.addEventListener('click', openModal);
const $closeModal = document.querySelector('.no-button');
$closeModal.addEventListener('click', closeModal);
const $overlay = document.querySelector('.overlay');
const $modal = document.querySelector('.modal');

function openModal(event) {
  $overlay.className = 'overlay shown';
  $modal.className = 'modal shown';
}

function closeModal(event) {
  $overlay.className = 'overlay hidden';
  $modal.className = 'modal hidden';
}
