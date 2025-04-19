'use client';

import { useState, useEffect } from 'react';
import PortfolioSummary from '../../components/PortfolioSummary';
import MarketOverview from '../../components/MarketOverview';
import PriceChart from '../../components/PriceChart';
import RecentTransactions from '../../components/RecentTransactions';
import { getAccount, getPositions } from '../../lib/alpaca';

export default function DashboardPage() {
    const [accountData, setAccountData] = useState(null);
    const [positions, setPositions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [accountResponse, positionsResponse] = await Promise.all([
                    getAccount(),
                    getPositions()
                ]);

                setAccountData(accountResponse);
                setPositions(positionsResponse);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setError('Failed to load account data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-gray-500">Loading your dashboard...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            <PortfolioSummary account={accountData} positions={positions} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <PriceChart symbol="AAPL" />
                <MarketOverview />
            </div>

            <RecentTransactions />
        </div>
    );
}