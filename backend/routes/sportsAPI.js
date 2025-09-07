const express = require('express');
const router = express.Router();
const SportsNews = require('../models/sportsModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await SportsNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
