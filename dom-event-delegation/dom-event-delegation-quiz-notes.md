# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The original element that triggered the bubbling.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  The bubble ascends from the original target to each parent element.
- What DOM element property tells you what type of element it is?
  The 'tagName' property
- What does the `element.closest()` method take as its argument and what does it return?
  It takes a CSS selector as its argument and returns the closest element ancestor with a matching selector.
- How can you remove an element from the DOM?
  With the remove() method.
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Using event delegation through parent elements

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
