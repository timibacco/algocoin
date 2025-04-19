'use client';
import StockNews from "./StockNews"
import { useEffect, useState } from "react";

const availableSymbols = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA"];

const LiveMarketData = () => {
    const [symbol, setSymbol] = useState(availableSymbols[0]);

    useEffect(() => {
        // Remove any existing widget to prevent duplication
        document.getElementById("tradingview-container").innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "width": "100%",
            "height": 500,
            "symbol": `NASDAQ:${symbol}`, // Dynamic stock symbol
            "interval": "D",
            "theme": "dark",
            "style": "1", // Candlestick chart
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "hide_side_toolbar": false,
        });

        document.getElementById("tradingview-container")?.appendChild(script);
    }, [symbol]); // Update when `symbol` changes

    return (
        <div className="p-4">
            <div className="flex items-center gap-2 mb-4">
                <label htmlFor="symbol" className="text-white">Symbol:</label>
                <select
                    id="symbol"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white"
                >
                    {availableSymbols.map((sym) => (
                        <option key={sym} value={sym}>
                            {sym}
                        </option>
                    ))}
                </select>
            </div>

            <div id="tradingview-container" className="tradingview-widget-container" />
            {/* StockNews */}
        <div className="p-4">
            <StockNews symbol={symbol} />
        </div>
        </div>

    );
};

export default LiveMarketData;