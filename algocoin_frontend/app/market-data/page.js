// algo_frontend/app/live-market-data/page.js
'use client';

import Head from "next/head";

import LiveMarketData from "../../components/LiveMarketData";

export default function LiveMarketDataPage() {
    return (
        <>
            <Head>
                <title>Stock Market Dashboard</title>
            </Head>
            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Live Stock Chart</h1>
                <LiveMarketData symbol="AAPL" />
            </main>
        </>
    );
}