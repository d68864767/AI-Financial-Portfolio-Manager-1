// Import necessary modules
const { Client } = require('pg');

// Database connection
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

// Function to analyze portfolio
async function analyzePortfolio() {
    const res = await client.query('SELECT * FROM Portfolio');
    return res.rows;
}

// Function to get investment recommendations
async function getRecommendations() {
    const res = await client.query('SELECT * FROM Recommendations');
    return res.rows.map(row => `${row.asset_name}: ${row.recommendation_type}`);
}

// Function to assess risk
async function assessRisk() {
    const res = await client.query('SELECT * FROM RiskAssessment');
    return res.rows.map(row => `${row.risk_level}`);
}

// Export functions
module.exports = {
    analyzePortfolio,
    getRecommendations,
    assessRisk
};
