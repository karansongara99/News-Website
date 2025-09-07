const express = require('express');
const router = express.Router();
const EducationNews = require('../models/educationModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await EducationNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
