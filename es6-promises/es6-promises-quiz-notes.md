# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the Event Queue model of Promises?
  First, a promise is created and placed synchronously in the event queue. Code is executed synchronously until the end of the function, then the event loop begins. The promise is executed and, upon completion, calls the 'then' handler with a successful completion, the 'catch' handler with a failed completion, followed by the 'finally' handler.
- What are the three states a Promise can be in?
  Pending, fulfilled, or rejected.
- How do you handle the fulfillment of a Promise?
  With a callback function passed to the 'then' method.
- How do you handle the rejection of a Promise?
  With a callback function passed to the 'catch' method.

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
