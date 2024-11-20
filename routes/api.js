const express = require('express');
const router = express.Router();

// Import JSON data
const shopData = require('../API/YaponOvqatlari.json');
const uzbRegions = require('../API/UzbekistonShaxarlari.json');

// Define API endpoints
router.get('/yaponOvqatlari', (req, res) => {
    res.json(shopData);
});

router.get('/uzbekistanShaxarlari', (req, res) => {
    res.json(uzbRegions);
});

module.exports = router;
