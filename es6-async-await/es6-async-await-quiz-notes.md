# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  'Async' lets us declare a new asynchronous function while 'await' allows us to return a value for a Promise inside an async function.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  'Async' and 'await' declare and call an async function, respectively, while Promise.then determines code to execute on a fullfilled Promise and Promise.catch determines code to execute on a rejected Promise.
- When do you use `async`?
  Async is used when defining an asynchronous function.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Await is used inside an async function to stop code from running until a promise is returned. Awaiting a synchronous function has no effect.
- How do you handle errors with `await`?
  With the 'catch' block inside the async function.
- What do `try`, `catch` and `throw` do? When do you use them?
  The 'try' block determines what code will run if a promise is fulfilled successfully, a 'catch' block determines what code will run if the promise fails, and a 'throw' expression notifies that an exception has occurred. These are all used inside of async functions.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  If we forget to 'await' a promise, the code will either never be settled, or will be fulfilled or rejected as normal. The promise rejection will throw an error of an unhandled rejection.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  Async/await because it's easier to understand.

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
