import express from 'express';

const app = express();

app.use((req, res) => {
  console.log(req.method);
  console.log(res.send('Hello, world!!'));
});

app.listen(8000, () => {
  console.log('Express server listening on port 8000!');
});
