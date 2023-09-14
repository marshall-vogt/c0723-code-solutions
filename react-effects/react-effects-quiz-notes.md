# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  When the component is first rendered
- What is a React Effect?
  A react effect is a function that allows us to interact with things outside of react.
- When should you use an Effect and when should you not use an Effect?
  An Effect should only be used when no other option is available to accomplish a task.
- When do Effects run?
  On the initial render and when a dependency has changed.
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  Dependencies are passed as a second argument to the useEffect function and they tell useEffect when something has changed with it will be called again.
- Why would you want to clean up from an Effect?
  To undo an action that the useEffect has performed.
- How do you clean up from an Effect?
  With an arrow function in the return statement.
- When does the cleanup function run?
  Before a component unmounts and before useEffect is called again.

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
