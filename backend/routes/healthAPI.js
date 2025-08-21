const express = require('express');
const router = express.Router();
const HealthNews = require('../models/healthModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await HealthNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
