const express = require('express');
const router = express.Router();
const AllNews = require('../models/newsModel');

router.get('/', async (req, res) => {
  try {
    const allNews = await AllNews.find();
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const allNews = await AllNews.findById(req.params.id);
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/business', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'business' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/health', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'health' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/education', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'education' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/sport', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'sport' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/entertainment', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'entertainment' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/lifestyle', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'lifestyle' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/travel', async (req, res) => {
  try {
    const allNews = await AllNews.find({ category: 'travel' });
    res.json(allNews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
