// app/page.js
import Link from 'next/link';

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Trading Platform</h1>
                <p className="text-gray-600 mb-6">
                    Our professional trading platform provides you with powerful tools to manage your investments
                    and stay up-to-date with the market.
                </p>
                <div className="flex space-x-4">
                    <Link
                        href="/login"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    >
                        Log In
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Real-Time Market Data</h2>
                    <p className="text-gray-600">
                        Access real-time market data powered by Alpaca API to make informed trading decisions.
                    </p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Advanced Trading Tools</h2>
                    <p className="text-gray-600">
                        Utilize advanced trading tools, charts, and indicators to analyze market trends.
                    </p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Portfolio Management</h2>
                    <p className="text-gray-600">
                        Track your investments, monitor performance, and optimize your portfolio.
                    </p>
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Comprehensive Reports</h2>
                    <p className="text-gray-600">
                        Generate detailed statements and tax reports for your trading activity.
                    </p>
                </div>
            </div>
        </div>
    );
}