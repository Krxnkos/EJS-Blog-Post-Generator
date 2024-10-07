const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Read blog data
const blogData = JSON.parse(fs.readFileSync(path.join(__dirname, 'blog_data.json'), 'utf-8'));

// Home route
app.get('/', (req, res) => {
    res.render('home', { posts: blogData.posts });
});

// Individual post route
app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = blogData.posts.find(p => p.id === postId);
    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});