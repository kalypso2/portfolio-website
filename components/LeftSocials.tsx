import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function LeftSocialMediaIcons() {
    return (
        <div className="flex flex-col items-center space-y-4">
            <a href="https://github.com/kalypso2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={30} className="text-gray-800 hover:text-purple-600 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/samuel-ebaugh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={30} className="text-gray-800 hover:text-purple-600 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/sam.ebaugh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={30} className="text-gray-800 hover:text-purple-600 transition-transform hover:scale-110" />
            </a>
            <div className="h-24 border-l-2 border-purple-600 mt-4" />
        </div>
    );
}
