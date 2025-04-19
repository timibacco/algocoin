// components/Navigation.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Trade', path: '/trade' },
        { name: 'Market Data', path: '/market-data' },
        { name: 'Reports', path: '/reports' },
        { name: 'Settings', path: '/settings' },
    ];

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold">Trading Platform</Link>
                    </div>
                    <div className="flex space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-3 py-2 rounded ${
                                    pathname === item.path
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}