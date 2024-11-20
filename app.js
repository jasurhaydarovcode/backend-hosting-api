const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Middleware for JSON parsing
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const viewRoutes = require('./routes/views');
const apiRoutes = require('./routes/api');

// Use routes
app.use('/', viewRoutes);
app.use('/api', apiRoutes);

module.exports = app;

