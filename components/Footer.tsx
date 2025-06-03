import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 text-black py-10 space-y-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
                <hr className="hidden md:block w-16 border-2 border-purple-600" />
                <a href="https://github.com/kalypso2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub size={30} className="text-gray-600 hover:text-purple-600 transition-transform hover:scale-110" />
                </a>
                <a href="https://linkedin.com/in/samuel-ebaugh-130010233" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={30} className="text-gray-600 hover:text-purple-600 transition-transform hover:scale-110" />
                </a>
                <a href="https://instagram.com/sam.ebaugh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={30} className="text-gray-600 hover:text-purple-600 transition-transform hover:scale-110" />
                </a>
                <a href="https://twitter.com/YOUR-TWITTER" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter size={30} className="text-gray-600 hover:text-purple-600 transition-transform hover:scale-110" />
                </a>
                <hr className="hidden md:block w-16 border-2 border-purple-600" />
            </div>

            {/* Logo */}
            <Link href="#landing">
                <img src="/images/logo.png" alt="Logo" className="w-12 h-12" />
            </Link>

            {/* Copyright */}
            <p className="text-sm">© 2025 Sam Ebaugh.</p>
            <p className="text-sm">Made with Next.js </p>

            {/* Source Code Link */}
            <a href="https://github.com/YOUR-GITHUB-REPO" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 underline hover:text-purple-600 transition-transform hover:scale-105">
                <FaGithub size={20} />
                <span>Check Out The Source Code</span>
                <FaExternalLinkAlt size={14} />
            </a>
        </footer>
    );
}
