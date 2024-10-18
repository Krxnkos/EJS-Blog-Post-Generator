// app.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// In-memory storage for posts (replace with actual database in production)
let posts = require('./blog_data.json').posts;

// Route to display the form
app.get('/new-post', (req, res) => {
  res.render('new-post');
});

// Route to handle form submission
app.post('/new-post', (req, res) => {
  const { title, author, date, content, tags } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    author,
    date,
    content,
    tags: tags.split(',').map(tag => tag.trim())
  };
  posts.push(newPost);

  // Save to blog_data.json (for simplicity, not recommended for production)
  fs.writeFileSync('./blog_data.json', JSON.stringify({ posts }, null, 2));

  res.redirect('/');
});

// Existing routes...
app.get('/', (req, res) => {
  const featuredPosts = posts.slice(0, 2); // Example: first 2 posts as featured
  const recentPosts = posts.slice(2); // Example: remaining posts as recent

  res.render('home', { featuredPosts, recentPosts });
});

app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  res.render('post', { post });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});