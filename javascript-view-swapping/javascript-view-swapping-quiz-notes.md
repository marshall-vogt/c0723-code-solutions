# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The original element that triggered an event.
- What is the affect of setting an element to `display: none`?
  The element and it's children are not rendered to the display.
- What does the `element.matches()` method take as an argument and what does it return?
  The 'matches()' method takes a CSS selector as an argument and returns a boolean.
- How can you retrieve the value of an element's attribute?
  With the getAttribute() method.
- At what steps of the solution would it be helpful to log things to the console?
  When obtaining values of elements to verify we obtain the correct value
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  An event listener would need to be added on every event target.
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  The code would need to re-assign the class for each tab manually.

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
