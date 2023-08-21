function ExampleConstructor() {}

console.log('value of prototype property', ExampleConstructor.prototype);
console.log('typeof prototype property', typeof ExampleConstructor.prototype);

const newExampleConstructor = new ExampleConstructor();

console.log('newExampleConstructor:', newExampleConstructor);

const constructorInstance = newExampleConstructor instanceof ExampleConstructor;
console.log('constructorInstance:', constructorInstance);
