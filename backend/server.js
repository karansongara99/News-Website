const express = require('express');
const cors = require('cors');
const newsRoutes = require('./routes/newsAPI');
const businessRoutes = require('./routes/businessAPI');
const healthRoutes = require('./routes/healthAPI');
const educationRoutes = require('./routes/educationAPI');
const sportsRoutes = require('./routes/sportsAPI');
const politicanRoutes = require('./routes/politicanAPI');
const lifestyleRoutes = require('./routes/lifestyleAPI');
const travelRoutes = require('./routes/travelAPI');
const connectDB = require('./database/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/news', newsRoutes);
app.use('/api/news/:id', newsRoutes);
app.use('/api/business', businessRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/sports', sportsRoutes);
app.use('/api/politican', politicanRoutes);
app.use('/api/lifestyle', lifestyleRoutes);
app.use('/api/travel', travelRoutes);

// DB Connection
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
