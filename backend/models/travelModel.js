const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema({
  article_id: String,
  title: String,
  pubDate: String,
  pubDateTZ: String,
  image_url: String,
  source_url: String,
  sentiment: String,
  ai_tag: [String],
});

module.exports = mongoose.model('TravelNews', TravelSchema);
