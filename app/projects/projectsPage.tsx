import { FaGithub } from "react-icons/fa";
import LightWave from '../../components/LightWave';
import DarkWave from '../../components/DarkWave';

export default function Projects() {
    return (
        <section className="flex flex-col">
            {/* Project 1 */}
            <article className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-100 text-black px-4 py-20">
                <div className="flex flex-col items-center md:items-end md:mr-10">
                    <h2 className="text-5xl font-mono underline text-purple-600 mb-6">Scholar Knights</h2>
                    <p className="max-w-md text-right mb-4">
                        📱 A <span className="text-purple-600">web + mobile app</span> created for UCF students to create, join, and search for study groups.
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        React · Node.js · Express · MongoDB 
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        Mongoose · JWT Authentication · Vite
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        TailWind CSS · Flutter · Nginx
                    </p>
                    <a href="https://github.com/kalypso2/scholar-knights" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:scale-105 transition-transform">
                        <FaGithub size={25} className="mr-2" /> Source Code
                    </a>
                </div>
                <div className="flex">
                    <img src="/images/knightshome.jpeg" alt="Scholar Knights Home" className="rounded-lg shadow-lg w-92 h-auto mx-2" />
                    <img src="/images/knightssearch.png" alt="Scholar Knghts Search/Filter" className="hidden md:block rounded-lg shadow-lg w-64 h-auto mx-2" />
                </div>
                <DarkWave />
            </article>

            {/* Project 2 */}
            <article className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white px-4 py-20">
                <div className="flex">
                    <img src="/images/contactcloud.png" alt="Contact Cloud" className="rounded-lg shadow-lg w-96 h-auto mx-2" />
                </div>
                <div className="flex flex-col items-center md:items-start md:ml-10">
                    <h2 className="text-5xl font-mono underline text-purple-600 mb-6">Contact Cloud</h2>
                    <p className="max-w-md text-left mb-4">
                        ☁️ A <span className="text-purple-600">contact manager</span> designed for users to store contact information of all types with ease
                    </p>
                    <p className="max-w-md text-left text-gray-400 text-sm mb-4">
                        Linux · Apache · MySQL · PHP
                    </p>
                    <a href="https://github.com/kalypso2/COP4331-contact-manager" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:scale-105 transition-transform">
                        <FaGithub size={25} className="mr-2" /> Source Code
                    </a>
                </div>
                <LightWave />
            </article>
        </section>
    );
}
