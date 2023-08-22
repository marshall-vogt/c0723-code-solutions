const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => console.log(value));
values.forEach((value) =>
  console.log(values[values.length - 1 - values.indexOf(value)])
);
