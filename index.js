const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Create a route
app.get('/', function (req, res) {
    res.render('index', {title: 'Hello', message: 'This is an EJS example.'});
});

app.use(express.static('public'))

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
    console.log(`\n API server http://localhost:${port} da ishga tushdi! \n
 Yapon Ovqatlari http://localhost:${port}/api/yaponOvqatlari da ishga tushdi!
    `);
});
