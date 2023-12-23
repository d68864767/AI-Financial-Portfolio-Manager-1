-- Create a table for user's financial portfolio
CREATE TABLE Portfolio (
    id INT PRIMARY KEY,
    user_id INT,
    asset_name VARCHAR(255),
    quantity INT,
    purchase_price DECIMAL(10, 2),
    purchase_date DATE
);

-- Create a table for market data
CREATE TABLE MarketData (
    id INT PRIMARY KEY,
    asset_name VARCHAR(255),
    current_price DECIMAL(10, 2),
    market_cap DECIMAL(15, 2),
    pe_ratio DECIMAL(10, 2),
    dividend_yield DECIMAL(5, 2),
    last_updated DATE
);

-- Create a table for investment recommendations
CREATE TABLE Recommendations (
    id INT PRIMARY KEY,
    user_id INT,
    asset_name VARCHAR(255),
    recommendation_type VARCHAR(255),
    recommendation_date DATE
);

-- Create a table for risk assessment
CREATE TABLE RiskAssessment (
    id INT PRIMARY KEY,
    user_id INT,
    risk_level VARCHAR(255),
    risk_assessment_date DATE
);
