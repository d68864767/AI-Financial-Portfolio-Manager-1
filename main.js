// Import necessary modules
const ai = require('./ai.js');
const search = require('./search.js');

// Get HTML elements
const overviewContent = document.getElementById('overview-content');
const recommendationsContent = document.getElementById('recommendations-content');
const riskContent = document.getElementById('risk-content');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Function to update portfolio overview
function updatePortfolioOverview() {
    const portfolioData = ai.analyzePortfolio();
    overviewContent.innerHTML = JSON.stringify(portfolioData, null, 2);
}

// Function to update investment recommendations
function updateInvestmentRecommendations() {
    const recommendations = ai.getRecommendations();
    recommendationsContent.innerHTML = recommendations.map(rec => `<p>${rec}</p>`).join('');
}

// Function to update risk assessment
function updateRiskAssessment() {
    const riskAssessment = ai.assessRisk();
    riskContent.innerHTML = `<p>${riskAssessment}</p>`;
}

// Function to search market data
function searchMarketData() {
    const query = searchInput.value;
    const results = search.searchMarketData(query);
    searchResults.innerHTML = results.map(res => `<p>${res}</p>`).join('');
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', searchMarketData);

// Initial function calls
updatePortfolioOverview();
updateInvestmentRecommendations();
updateRiskAssessment();
