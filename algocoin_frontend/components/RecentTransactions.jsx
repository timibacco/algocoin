// components/RecentTransactions.jsx
export default function RecentTransactions() {
    const transactions = [
        { id: 1, type: 'Buy', symbol: 'AAPL', shares: 10, price: '$189.96', date: '2025-03-14' },
        { id: 2, type: 'Sell', symbol: 'MSFT', shares: 5, price: '$417.82', date: '2025-03-13' },
        { id: 3, type: 'Buy', symbol: 'TSLA', shares: 3, price: '$174.48', date: '2025-03-12' },
    ];

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                    <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {transactions.map((tx) => (
                        <tr key={tx.id}>
                            <td className={`px-6 py-4 whitespace-nowrap ${
                                tx.type === 'Buy' ? 'text-green-600' : 'text-red-600'
                            }`}>
                                {tx.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{tx.symbol}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{tx.shares}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{tx.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{tx.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}