CREATE TABLE IF NOT EXISTS stock (
                                     symbol VARCHAR(10) PRIMARY KEY,
    company_name VARCHAR(255),
    current_price DECIMAL(10,2),
    previous_close DECIMAL(10,2),
    daily_high DECIMAL(10,2),
    daily_low DECIMAL(10,2),
    volume BIGINT
    );