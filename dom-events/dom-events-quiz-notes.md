# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To debug our code and verify that our functions are returning the right information when needed.
- What is the purpose of events and event handling?
  To program automatic responses to signals that an event has occurred.
- Are all possible parameters required to use a JavaScript method or function?
  No, sometimes they are optional.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener method
- What is a callback function?
  A function that is passed into another function as an argument.
- What object is passed into an event listener callback when the event fires?
  Event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It is a reference to the object that was targeted by an event. It can be referenced at MDN.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  The first line is calling a reference to a function while the second is invoking the function.

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
