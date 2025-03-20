const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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

//Server
app.listen(PORT, () => {
    console.log(`app running at http://localhost:${PORT}`);
});