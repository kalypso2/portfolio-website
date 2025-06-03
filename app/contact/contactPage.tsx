import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import LightWave from '../../components/LightWave';

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-20">
            <div data-aos="fade-right" className="max-w-2xl text-center">
                <h2 className="text-5xl font-mono underline text-purple-600 mb-6">Contact Me</h2>
                {/* Optional custom message */}
                {/* <p className="text-lg mb-8">Currently looking for new opportunities in Software Development!</p> */}
                <div className="flex items-center justify-center mb-4 space-x-4">
                    <FaMailBulk size={45} className="text-purple-600" />
                    <a href="mailto:samebaugh@ucf.edu" className="text-2xl underline text-purple-600">
                        samebaugh@ucf.edu
                    </a>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <FaLinkedin size={45} className="text-purple-600" />
                    <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-2xl underline text-purple-600">
                        your-linkedin
                    </a>
                </div>
            </div>
            <LightWave />
        </section>
    );
}
