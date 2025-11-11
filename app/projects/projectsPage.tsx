import { FaGithub, FaLinkedin } from "react-icons/fa";
import LightWave from '../../components/LightWave';
import DarkWave from '../../components/DarkWave';

export default function Projects() {
    return (
        <section className="flex flex-col">
            {/* Project 1 - SharkVision */}
            <article className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-100 text-black px-4 py-20">
                <div className="flex flex-col items-center md:items-end md:mr-10">
                    <h2 className="text-5xl font-mono underline text-purple-600 mb-2">SharkVision 🦈</h2>
                    <p className="max-w-md text-right text-sm text-gray-600 mb-6 italic">🥇 First Place Overall – SharkByte Hackathon 2025</p>
                    <p className="max-w-md text-right mb-4">
                        🦈 An <span className="text-purple-600">AI-powered presentation analysis tool</span> that evaluates body language, speech delivery, and presentation content in real time using the Gemini API.
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-2">
                        Built in 36 hours during SharkByte Hackathon · 🥇 1st Place Overall Winner
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        Python · Gemini API · React · RAG methods · OpenCV
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        Computer vision + speech analysis for real-time feedback
                    </p>
                    <div className="flex flex-col items-end space-y-2">
                        <a href="https://github.com/kalypso2/shark-vision" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:scale-105 transition-transform">
                            <FaGithub size={25} className="mr-2" /> Source Code
                        </a>
                        <a href="https://www.linkedin.com/posts/samuel-ebaugh_hackathon-ai-innovation-ugcPost-7393692090171498496-zOgv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADozQbQBnfZaIAhmoRl5TB2EQ8FH5nxdrFs" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:scale-105 transition-transform">
                            <FaLinkedin size={25} className="mr-2" /> LinkedIn Post
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-6 md:mt-0">
                    <img src="/images/shark_landing.png" alt="SharkVision Landing Page" className="rounded-lg shadow-lg w-92 h-auto" />
                    <img src="/images/shark_win.jpg" alt="SharkVision Team - First Place Win" className="rounded-lg shadow-lg w-92 h-auto" />
                    <img src="/images/shark_analysis.png" alt="SharkVision Analysis Output" className="rounded-lg shadow-lg w-92 h-auto" />
                </div>
                <DarkWave />
            </article>

            {/* Project 2 - Ask Knightro */}
            <article className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-slate-200 to-slate-100 text-black px-4 py-20">
                <div className="flex flex-col items-center md:items-end md:mr-10">
                    <h2 className="text-5xl font-mono underline text-purple-600 mb-6">Ask Knightro</h2>
                    <p className="max-w-md text-right mb-4">
                        🤖 An <span className="text-purple-600">AI chatbot</span> built to help UCF students get fast, accurate answers about academics, resources, and campus life.
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        Node.js · Google Gemini API · Retrieval-Augmented Generation (RAG)
                    </p>
                    <p className="max-w-md text-right text-gray-600 text-sm mb-4">
                        NLP · Custom Knowledge Base · Hackathon Project
                    </p>
                    <a href="https://github.com/kalypso2/ask-knightro" target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-600 hover:scale-105 transition-transform">
                        <FaGithub size={25} className="mr-2" /> Source Code
                    </a>
                </div>
                <div className="flex">
                    <img src="/images/askknightro.jpeg" alt="Ask Knightro UI" className="rounded-lg shadow-lg w-92 h-auto mx-2" />
                </div>
                <DarkWave />
            </article>

            {/* Project 3 - Scholar Knights */}
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
        </section>
    );
}
