const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index', {
        description: 'Access free and reliable fake JSON APIs for testing and development. Generate mock data for your projects with customizable endpoints, supporting seamless API integration.',
        keywords: 'fake JSON APIs, free JSON API for testing, mock API data, API development tools, fake API endpoints, JSON data for developers, API integration testing',
    });
});

// API page route
router.get('/api', (req, res) => {
    res.render('api');
});

module.exports = router;
