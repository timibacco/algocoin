// components/PortfolioSummary.jsx
export default function PortfolioSummary() {
    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Portfolio Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-500">Total Value</p>
                    <p className="text-2xl font-bold">$124,500.00</p>
                    <p className="text-green-500">+2.4% today</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-500">Day Change</p>
                    <p className="text-2xl font-bold">+$2,890.24</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-500">Open Positions</p>
                    <p className="text-2xl font-bold">12</p>
                </div>
            </div>
        </div>
    );
}