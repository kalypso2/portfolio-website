import LightWave from './LightWave';

export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-20">
            <div className="flex flex-col max-w-2xl md:mr-10">
                <h2 className="text-5xl font-mono underline text-purple-600 mb-6">About Me</h2>
                <p className="mb-4">
                    👋 Hi, I'm <span className="text-purple-600 font-bold">Sam Ebaugh</span> — a Computer Science major at <span className="text-purple-600 font-bold">UCF</span> and R&D Intern at <span className="text-purple-600 font-bold">OneEthos</span>, passionate about building intelligent, data-driven systems that make technology more useful and human.
                </p>
                <p className="mb-4">
                    I specialize in <span className="text-purple-600 font-bold">full-stack development</span>, <span className="text-purple-600 font-bold">AI integration</span>, and <span className="text-purple-600 font-bold">scalable data pipelines</span>, bridging backend infrastructure with real-world impact. From designing production-ready applications (React, Next.js, Node.js, Flutter) to orchestrating complex ETL and AI workflows (FastAPI, Gemini, OpenAI, MongoDB, AWS), I focus on creating systems that are technically elegant and practically valuable.
                </p>
                <p className="mb-4">
                    I've led and contributed to projects like <span className="text-purple-600 font-bold">ScholarKnights</span>, a full-stack platform for UCF students to find and host study sessions, and <span className="text-purple-600 font-bold">SharkVision</span>, an AI-powered presentation coach that won <span className="text-purple-600 font-bold">🥇 1st Place Overall</span> at SharkByte Hackathon 2025.
                </p>
                <p className="mb-4">
                    At <span className="text-purple-600 font-bold">OneEthos</span>, I'm helping architect a nationwide small-business data platform that uses AI to discover and verify sustainable organizations — blending engineering precision with purpose-driven innovation.
                </p>
                <p className="mb-4">
                    I'm driven by a simple goal: to build technology that scales intelligently, empowers people, and leaves the world a little better designed than I found it.
                </p>
                <p>
                    📬 Let's connect — I'm always open to new ideas, collaborations, and opportunities in <span className="text-purple-600 font-bold">software engineering</span>, <span className="text-purple-600 font-bold">AI</span>, or <span className="text-purple-600 font-bold">data systems</span>.
                </p>
            </div>
            <img className="rounded-full border-4 border-purple-600 shadow-lg w-64 h-92 mt-10 md:mt-0" src="/images/headshot.png" alt="Headshot" />
            <LightWave />
        </section>
    );
}
