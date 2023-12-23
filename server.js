const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Import AI and Search modules
const ai = require('./ai.js');
const search = require('./search.js');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/portfolio', (req, res) => {
    const portfolioData = ai.analyzePortfolio();
    res.json(portfolioData);
});

app.get('/api/recommendations', (req, res) => {
    const recommendations = ai.getRecommendations();
    res.json(recommendations);
});

app.get('/api/risk', (req, res) => {
    const riskAssessment = ai.assessRisk();
    res.json(riskAssessment);
});

app.get('/api/search', (req, res) => {
    const query = req.query.q;
    const results = search.searchMarketData(query);
    res.json(results);
});

// Serve static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
