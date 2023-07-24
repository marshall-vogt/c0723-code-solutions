// Click event

function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

const btn = document.querySelector('button.click-button');

btn.addEventListener('click', handleClick);

// Mouseover event

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target" ', event.target);
}

const hvr = document.querySelector('button.hover-button');

hvr.addEventListener('mouseover', handleMouseover);

// Double-click event

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

const dbl = document.querySelector('button.double-click-button');

dbl.addEventListener('dblclick', handleDoubleClick);
