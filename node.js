const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const posts = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/post', (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body
  };

  posts.push(post);
  res.json(post);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
