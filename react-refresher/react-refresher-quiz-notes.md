# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  JavaScript functions that return markup for a page
- How do you use JSX in a React component?
  JSX can be written inside React components similar to HTML, but with the requirements that self-closing tags need to be closed, multiple tags must be wrapped in a parent in order to be returned, and most things are named with camelCase.
- How do you declare the props a React component needs?
  Props are declared in the parent component.
- How do you pass props to a React component?
  Inside the component tag in the parent component, declare the prop and then destructure the props in the component parameters.
- How do you include JavaScript expressions in JSX?
  JavaScript expressions can be written in JSX by wrapping the expression in curly braces.
- What are React hooks and what are the three "Rules of Hooks"?
  Hooks are functions that are strictly available while React is rendering. Hooks can only be called at top level of components, they can't be inside conditions, loops, or nested functions, and they are unconditional declarations.
- How do you manage state in a React component?
  By importing 'useState' from react at the top of the file, and defining 'useState' with a state variable and the setter function.
- How do you handle events in React?
  By declaring a function to handle the event and assigning the event listener to pass the handle event function.
- How do you let a parent component know that an event happened?
  By passing the event handler as a prop.

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
