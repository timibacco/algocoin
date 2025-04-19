// app/trade/page.js
'use client';

import { useState } from 'react';
import { placeOrder } from '../../lib/alpaca';
import LiveMarketData from '../../components/LiveMarketData';

export default function TradePage() {
    const [orderForm, setOrderForm] = useState({
        symbol: '',
        quantity: '',
        side: 'buy',
        type: 'market',
        timeInForce: 'day'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await placeOrder(
                orderForm.symbol,
                orderForm.quantity,
                orderForm.side,
                orderForm.type,
                orderForm.timeInForce
            );

            setSuccess(`Order placed successfully! Order ID: ${response.id}`);
            // Reset form
            setOrderForm({
                symbol: '',
                quantity: '',
                side: 'buy',
                type: 'market',
                timeInForce: 'day'
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Trade</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <LiveMarketData />
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Place Order</h2>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symbol">
                                Symbol
                            </label>
                            <input
                                id="symbol"
                                name="symbol"
                                type="text"
                                placeholder="AAPL"
                                value={orderForm.symbol}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                                Quantity
                            </label>
                            <input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                step="1"
                                value={orderForm.quantity}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="side">
                                Side
                            </label>
                            <select
                                id="side"
                                name="side"
                                value={orderForm.side}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="buy">Buy</option>
                                <option value="sell">Sell</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                                Order Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={orderForm.type}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="market">Market</option>
                                <option value="limit">Limit</option>
                                <option value="stop">Stop</option>
                                <option value="stop_limit">Stop Limit</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeInForce">
                                Time in Force
                            </label>
                            <select
                                id="timeInForce"
                                name="timeInForce"
                                value={orderForm.timeInForce}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="day">Day</option>
                                <option value="gtc">Good Till Canceled</option>
                                <option value="ioc">Immediate or Cancel</option>
                                <option value="fok">Fill or Kill</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                                orderForm.side === 'buy'
                                    ? 'bg-green-500 hover:bg-green-700 text-white'
                                    : 'bg-red-500 hover:bg-red-700 text-white'
                            }`}
                        >
                            {loading ? 'Processing...' : orderForm.side === 'buy' ? 'Buy' : 'Sell'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
