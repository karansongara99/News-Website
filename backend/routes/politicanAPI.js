const express = require('express');
const router = express.Router();
const PoliticanNews = require('../models/politicanModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await PoliticanNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
