// app.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Read blog data from JSON file
const blogDataPath = path.join(__dirname, 'blog_data.json');
const blogData = JSON.parse(fs.readFileSync(blogDataPath, 'utf-8'));

// Extract posts and add excerpts
const posts = blogData.posts.map(post => ({
    ...post,
    excerpt: post.content.replace(/(<([^>]+)>)/gi, "").substring(0, 100) + '...' // Remove HTML tags and get first 100 characters
}));

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
  res.redirect('/');
});

app.get('/', (req, res) => {
    const featuredPosts = posts.slice(0, 2); // Example: first 2 posts as featured
    const recentPosts = posts.slice(2); // Example: remaining posts as recent

    res.render('home', { featuredPosts, recentPosts });
});

app.get('/post/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    res.render('post', { post });
});

// Search route
app.get('/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const searchResults = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
    );
    res.render('search', { searchResults, query });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});