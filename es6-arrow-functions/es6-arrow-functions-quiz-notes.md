# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  The function parameter on the left followed by the arrow and the function statements on the right. If there are zero or more than one parameters they are enclosed by parentheses, and if there is more than statement they are enclosed with curly braces.
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It returns the expression automatically without needing to call a return statement.
- When using _concise body syntax_, how do you return an object literal?
  By wrapping the object literal in parentheses.
- In the expression
  `js
    foo(() => 42);
    `
  - Identify the arrow function
    The arrow function is () => 42
  - How many arguments does the arrow function take?
    Zero
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    An arrow function
- In the expression
  `` js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
     `` - Identify the arrow function
  (y) => {
  console.log(`4y = ${4 * y}`);
  }

      - How many arguments does the arrow function take?

  1

      - What value does it return?

  `4y = ${4 * y}`

      - How many arguments are passed to the function `bar`?

  1 - What type of argument is passed to the function `bar`?
  An arrow function - When does the arrow function's code get executed?
  When the function 'bar' is called.

- How does the value of `this` differ between standard functions and arrow functions?
  In a standard function, 'this' is defined by the calling object. In an arrow function, 'this' is defined by its lexical scope.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
