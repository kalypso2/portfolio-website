import LightWave from './LightWave';

export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white px-4 py-20">
            <div className="flex flex-col max-w-2xl md:mr-10">
                <h2 className="text-5xl font-mono underline text-purple-600 mb-6">About Me</h2>
                <p className="mb-4">
                    👋 Hello! I’m <span className="text-purple-600 font-bold">Sam Ebaugh</span>, a Computer Science major at <span className="text-purple-600 font-bold">UCF</span>.
                </p>
                <p className="mb-4">
                    🏢 Experienced in <span className="text-purple-600 font-bold"></span>fullstack development, <span className="text-purple-600 font-bold"></span>cybersecurity, and <span className="text-purple-600 font-bold"></span>emerging tech.
                </p>
                <p className="mb-4">
                    💥 Exploring <span className="text-purple-600">compilers</span>, <span className="text-purple-600">securing various operating systems</span>, and <span className="text-purple-600">AI</span>.
                </p>
                <p>
                    Reach out on the <a href="#contact" className="underline text-purple-600">Contact</a> section!
                </p>
            </div>
            <img className="rounded-full border-4 border-purple-600 shadow-lg w-64 h-92 mt-10 md:mt-0" src="/images/headshot.png" alt="Headshot" />
            <LightWave />
        </section>
    );
}
