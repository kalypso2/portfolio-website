import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import LightWave from './LightWave';

export default function ContactSection() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-20">
            <div className="max-w-2xl text-center">
                <h2 className="text-5xl font-mono underline text-purple-600 mb-6">Contact Me</h2>
                <div className="flex items-center justify-center mb-4 space-x-4">
                    <FaMailBulk size={45} className="text-purple-600" />
                    <a href="mailto:sam.ebaugh@gmail.com" className="text-2xl underline text-purple-600">sam.ebaugh@gmail.com</a>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <FaLinkedin size={45} className="text-purple-600" />
                    <a href="https://www.linkedin.com/in/samuel-ebaugh-130010233" target="_blank" rel="noopener noreferrer" className="text-2xl underline text-purple-600">samuel-ebaugh</a>
                </div>
            </div>
            <LightWave />
        </section>
    );
}
