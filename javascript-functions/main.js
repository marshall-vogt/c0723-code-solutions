// convertMinuteToSeconds Function
function convertMinuteToSeconds(minutes) {
  return minutes * 60;
}

console.log(convertMinuteToSeconds(5));

// greet function
function greet(name) {
  return 'Hey, ' + name;
}

console.log(greet('Beavis'));

// getArea function
function getArea(width, height) {
  return width * height;
}

console.log(getArea(17, 42));

// getFirstName function
function getFirstName(person) {
  return person.firstName;
}

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamerouge' }));

// getLastElement function
function getLastElement(array) {
  return array[array.length - 1];
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
