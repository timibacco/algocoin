// components/MarketOverview.jsx
export default function MarketOverview() {
    const markets = [
        { name: 'S&P 500', value: '4,782.90', change: '+0.4%', direction: 'up' },
        { name: 'Dow Jones', value: '38,654.42', change: '+0.2%', direction: 'up' },
        { name: 'NASDAQ', value: '15,990.66', change: '-0.3%', direction: 'down' },
        { name: 'Bitcoin', value: '$67,242.15', change: '+1.2%', direction: 'up' },
    ];

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
            <div className="divide-y">
                {markets.map((market) => (
                    <div key={market.name} className="py-3 flex justify-between items-center">
                        <p className="font-medium">{market.name}</p>
                        <div className="text-right">
                            <p className="font-bold">{market.value}</p>
                            <p className={market.direction === 'up' ? 'text-green-500' : 'text-red-500'}>
                                {market.change}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}