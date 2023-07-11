// student object
const student = {
  firstName: 'Marshall',
  lastName: 'Vogt',
  age: 34,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Case Manager';
console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);
console.log('value of student', student);

// vehicle object
const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2011,
};

vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

// pet object
const pet = {
  name: 'Frankie',
  type: 'Poodle',
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
