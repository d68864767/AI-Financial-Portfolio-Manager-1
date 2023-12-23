// Import necessary modules
const axios = require('axios');

// Function to search market data
async function searchMarketData(query) {
    try {
        // Make a request to a financial data API
        // Replace 'YOUR_API_KEY' with your actual API key
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=YOUR_API_KEY`);

        // Extract the data from the response
        const data = response.data;

        // Map the data to a more readable format
        const results = data.map(item => `${item.name} (${item.symbol}): ${item.stockExchange}`);

        return results;
    } catch (error) {
        console.error(`Error searching market data: ${error}`);
        return [];
    }
}

// Export the function
module.exports = {
    searchMarketData
};
