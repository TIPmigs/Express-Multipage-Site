const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//specify folder to access static files using express
app.use(express.static(path.join(__dirname, 'public')));


//ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.get('/posts', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error reading posts');
        }

        // Parse the JSON data
        const posts = JSON.parse(data);

        // Send the posts data as JSON
        res.json(posts);
    });
});
//Server
app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});