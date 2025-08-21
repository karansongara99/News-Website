const express = require('express');
const router = express.Router();
const BusinessNews = require('../models/businessModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await BusinessNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
