const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Create a route
app.get('/', function (req, res) {
    res.render('index', {
        description: 'Access free and reliable fake JSON APIs for testing and development. Generate mock data for your projects with customizable endpoints, supporting seamless API integration.',
        keywords: 'fake JSON APIs, free JSON API for testing, mock API data, API development tools, fake API endpoints, JSON data for developers, API integration testing'
    });
});

// Create a API route
app.get('/api', function (req, res) {
    res.render('api');
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// JSON faylini import qilish
const shopData = require('./API/YaponOvqatlari.json');
const uzbRegions = require('./API/UzbekistonShaxarlari.json')

// JSON uchun middleware
app.use(express.json());

// API endpoint
app.get('/api/yaponOvqatlari', (req, res) => {
    res.json(shopData);
});

app.get('/api/uzbekistanShaxarlari', (req, res) => {
    res.json(uzbRegions);
});

// Serverni ishga tushirish
app.listen(port, () => {
    console.log(`\n API server http://localhost:${port} da ishga tushdi!\n`);
});
