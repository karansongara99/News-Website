const express = require('express');
const router = express.Router();
const LifestyleNews = require('../models/lifestyleModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await LifestyleNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
