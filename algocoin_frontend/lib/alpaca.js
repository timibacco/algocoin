// lib/alpaca.js
import { useState, useEffect } from 'react';

// Alpaca API configuration
const ALPACA_API_KEY = process.env.NEXT_PUBLIC_ALPACA_API_KEY || 'PKH6PUF3ZZ2SLZ5NQYHU';
const ALPACA_API_SECRET = process.env.NEXT_PUBLIC_ALPACA_API_SECRET || 'NmhaQXPocjjyOlxi382iOWifc8bA1keyQ8F4jzsc';
const ALPACA_BASE_URL = 'https://paper-api.alpaca.markets'; // Using paper trading for development
const ALPACA_DATA_URL = 'https://data.alpaca.markets';

// Function to fetch account information
export async function getAccount() {
    const response = await fetch(`${ALPACA_BASE_URL}/v2/account`, {
        headers: {
            'APCA-API-KEY-ID': ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': ALPACA_API_SECRET
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch account data');
    }

    return response.json();
}

// Function to fetch positions
export async function getPositions() {
    const response = await fetch(`${ALPACA_BASE_URL}/v2/positions`, {
        headers: {
            'APCA-API-KEY-ID': ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': ALPACA_API_SECRET
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch positions');
    }

    return response.json();
}

// Function to place a trade order
export async function placeOrder(symbol, qty, side, type = 'market', timeInForce = 'day') {
    const response = await fetch(`${ALPACA_BASE_URL}/v2/orders`, {
        method: 'POST',
        headers: {
            'APCA-API-KEY-ID': ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': ALPACA_API_SECRET,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            symbol,
            qty,
            side,
            type,
            time_in_force: timeInForce
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to place order: ${errorData.message}`);
    }

    return response.json();
}

// Function to get recent orders
export async function getOrders(status = 'all', limit = 100) {
    const response = await fetch(`${ALPACA_BASE_URL}/v2/orders?status=${status}&limit=${limit}`, {
        headers: {
            'APCA-API-KEY-ID': ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': ALPACA_API_SECRET
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }

    return response.json();
}

// Function to get stock bars (historical data)
export async function getBars(symbol, timeframe = '1D', start, end) {
    const params = new URLSearchParams({
        symbols: symbol,
        timeframe,
        start,
        end
    });

    const response = await fetch(`${ALPACA_DATA_URL}/v2/stocks/bars?${params}`, {
        headers: {
            'APCA-API-KEY-ID': ALPACA_API_KEY,
            'APCA-API-SECRET-KEY': ALPACA_API_SECRET
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch bars data');
    }

    return response.json();
}

// Custom hook for WebSocket connection to Alpaca's streaming API
export function useAlpacaStream(symbols = ['AAPL', 'MSFT', 'AMZN', 'GOOGL']) {
    const [quotes, setQuotes] = useState({});
    const [connected, setConnected] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ws;

        const connect = () => {
            ws = new WebSocket('wss://stream.data.alpaca.markets/v2/iex');

            ws.onopen = () => {
                console.log('Connected to Alpaca WebSocket');
                setConnected(true);

                // Authentication message
                ws.send(JSON.stringify({
                    action: 'auth',
                    key: ALPACA_API_KEY,
                    secret: ALPACA_API_SECRET
                }));

                // Subscribe to trades and quotes
                ws.send(JSON.stringify({
                    action: 'subscribe',
                    trades: symbols,
                    quotes: symbols
                }));
            };

            ws.onmessage = (event) => {
                const data = JSON.parse(event.data);

                if (Array.isArray(data)) {
                    data.forEach(msg => {
                        if (msg.T === 'q') { // Quote message
                            setQuotes(prev => ({
                                ...prev,
                                [msg.S]: {
                                    bid: msg.bp,
                                    ask: msg.ap,
                                    bidSize: msg.bs,
                                    askSize: msg.as,
                                    timestamp: msg.t
                                }
                            }));
                        }
                    });
                }
            };

            ws.onerror = (error) => {
                console.error('WebSocket error:', error);
                setError('Failed to connect to market data stream');
            };

            ws.onclose = () => {
                console.log('WebSocket connection closed');
                setConnected(false);

                // Try to reconnect after a delay
                setTimeout(connect, 5000);
            };
        };

        connect();

        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [symbols.join(',')]);

    return { quotes, connected, error };
}