// * app.js

// Module Requirements
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Defining Routes
// ? Home Route
app.get('/', (req, res) => {
    res.render('home');
});

// ? Individual Post Route
app.get('/post', (req, res) => {
    const { id } = req.params;
    res.render('post', { id });
});

// ? Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});