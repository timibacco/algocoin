// components/PriceChart.jsx
'use client';

import { useEffect, useRef } from 'react';

export default function PriceChart({ symbol = 'AAPL', timeframe = '1D' }) {
    const chartRef = useRef(null);

    useEffect(() => {
        // In a real implementation, you would integrate with a charting library
        // like TradingView, Highcharts, or D3.js here
        const ctx = chartRef.current.getContext('2d');
        ctx.fillStyle = '#f0f9ff';
        ctx.fillRect(0, 0, chartRef.current.width, chartRef.current.height);

        ctx.font = '16px Arial';
        ctx.fillStyle = '#1e293b';
        ctx.textAlign = 'center';
        ctx.fillText(`${symbol} Price Chart (${timeframe})`, chartRef.current.width/2, 30);

        // Placeholder for actual chart implementation
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(100, 100);
        ctx.lineTo(150, 120);
        ctx.lineTo(200, 80);
        ctx.lineTo(250, 140);
        ctx.lineTo(300, 110);
        ctx.lineTo(350, 130);
        ctx.lineTo(400, 90);
        ctx.strokeStyle = '#0369a1';
        ctx.lineWidth = 2;
        ctx.stroke();
    }, [symbol, timeframe]);

    return (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
            <canvas
                ref={chartRef}
                width="500"
                height="300"
                className="w-full h-auto"
            />
            <div className="flex justify-center space-x-2 mt-4">
                {['1D', '1W', '1M', '3M', '1Y', 'All'].map((period) => (
                    <button
                        key={period}
                        className={`px-3 py-1 rounded ${
                            timeframe === period ? 'bg-blue-500 text-white' : 'bg-gray-100'
                        }`}
                    >
                        {period}
                    </button>
                ))}
            </div>
        </div>
    );
}
//
// // components/PriceChart.jsx
// 'use client';
//
// import { useEffect, useRef } from 'react';
//
// export default function PriceChart({ symbol = 'AAPL', timeframe = '1D' }) {
//     const chartRef = useRef(null);
//
//     useEffect(() => {
//         // In a real implementation, you would integrate with a charting library
//         // like TradingView, Highcharts, or D3.js here
//         const ctx = chartRef.current.getContext('2d');
//         ctx.fillStyle = '#f0f9ff';
//         ctx.fillRect(0, 0, chartRef.current.width, chartRef.current.height);
//
//         ctx.font = '16px Arial';
//         ctx.fillStyle = '#1e293b';
//         ctx.textAlign = 'center';
//         ctx.fillText(`${symbol} Price Chart (${timeframe})`, chartRef.current.width/2, 30);
//
//         // Placeholder for actual chart implementation
//         ctx.beginPath();
//         ctx.moveTo(50, 150);
//         ctx.lineTo(100, 100);
//         ctx.lineTo(150, 120);
//         ctx.lineTo(200, 80);
//         ctx.lineTo(250, 140);
//         ctx.lineTo(300, 110);
//         ctx.lineTo(350, 130);
//         ctx.lineTo(400, 90);
//         ctx.strokeStyle = '#0369a1';
//         ctx.lineWidth = 2;
//         ctx.stroke();
//     }, [symbol, timeframe]);
//
//     return (
//         <div className="bg-white shadow rounded-lg p-6 mb-6">
//             <canvas
//                 ref={chartRef}
//                 width="500"
//                 height="300"
//                 className="w-full h-auto"
//             />
//             <div className="flex justify-center space-x-2 mt-4">
//                 {['1D', '1W', '1M', '3M', '1Y', 'All'].map((period) => (
//                     <button
//                         key={period}
//                         className={`px-3 py-1 rounded ${
//                             timeframe === period ? 'bg-blue-500 text-white' : 'bg-gray-100'
//                         }`}
//                     >
//                         {period}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }