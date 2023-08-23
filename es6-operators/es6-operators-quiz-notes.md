# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The AND operator returns true if and only if all operands are true, otherwise it returns false. The OR operator returns true if any of the operands are true and returns false if all operands are false. Both can be used outside of 'if' statements because the AND operator will return the value of the first falsy operand (or the last operand if all are truthy), and the OR operator will return the value of the first truthy operand (or the last operand if all are falsy).
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  'Short-circuit evaluation' is when the expression is terminated after the operator is determined from the first operand. I.E. the first falsy operand in an AND operator, or the first truthy operand in an OR operator.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The ?? operator is similar to the OR operator except that it returns the value of the right hand operand if the left hand operand is null or undefined, otherwise it returns the value of the left hand operand.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The ternary operator takes the syntax 'x ? y : z' where x is the condition, y is the expression that executes if the condition is true, and z is the expression that executes if the condition is false.
- What is the `?.` (optional chaining) operator? When would you use it?
  The optional chaining operator is used when accessing an object's properties and prevents an error by returning undefined when the property value is null or undefined.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Spread syntax allows the expansion of an array or string, or the enumeration of an object's properties into a new array, string, or object. The expanded array, string, or object can be placed inside of a new array, string, or object, respectively by using '...' followed by the name of the array, string, or object.
- What data types can be spread into an array? Into an object?
  Only arrays can be spread into an array, and objects spread into an object.
- How does spread syntax differ from rest syntax?
  Spread syntax and rest syntax are opposite actions where spreading takes a single array and extracts all elements individually, while rest syntax takes an unspecified number of individual elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
