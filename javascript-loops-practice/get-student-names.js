/* exported getStudentNames */

function getStudentNames(students) {
  const studentsArray = [];
  for (let i = 0; i < students.length; i++) {
    studentsArray.push(students[i].name);
  }
  return studentsArray;
}
