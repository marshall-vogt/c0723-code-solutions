/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const descriptionOfPerson =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return descriptionOfPerson;
}
