# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  An identifier for corresponding rows in a separate table.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  We can use the join keyword followed by the table name in double quotes, the 'using' keyword, and the key name in double quotes and parentheses.
  Or if the primary key and foreign key have different names, we can use join keyword followed the table name, the 'on' keyword, and "table1"."keyname" = "table2"."keyname"
- How do you temporarily rename columns or tables in a SQL statement?
  By following table name with 'as', followed by temporary name in double quotes.
- How do you create a one-to-many relationship between two tables?
  By using a foreign key in one table to point to the primary key in another table.
- How do you create a many-to-many relationship between two tables?
  By creating a separate table that links the foreign keys of two different tables.

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
