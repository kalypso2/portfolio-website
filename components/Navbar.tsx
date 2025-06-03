'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const navItems = [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-md">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="#landing" className="flex items-center">
                    <img src="/images/logo.png" alt="Logo" className="w-12 h-12 mr-2" />
                    <span className="font-mono text-lg font-bold">Sam Ebaugh</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 font-mono text-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="hover:text-purple-600 transition-transform hover:scale-110"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/sam_ebaugh_resume.pdf"
                        target="_blank"
                        className="border-2 border-purple-600 px-3 py-1 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white transition"
                    >
                        Resume
                    </a>
                </nav>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl hover:text-purple-600 transition-transform"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 font-mono text-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-purple-600 transition-transform hover:scale-110"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/sam_ebaugh_resume.pdf"
                        target="_blank"
                        className="border-2 border-purple-600 px-3 py-1 rounded-lg text-purple-600 hover:bg-purple-600 hover:text-white transition"
                    >
                        Resume
                    </a>
                </nav>
            )}
        </header>
    );
}
