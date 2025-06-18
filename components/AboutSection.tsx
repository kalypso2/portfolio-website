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
                    Experienced in <span className="text-purple-600 font-bold">fullstack development</span>, <span className="text-purple-600 font-bold">cybersecurity</span>, and <span className="text-purple-600 font-bold">emerging AI technologies</span>.
                </p>
                <p className="mb-4">
                    From building and deploying production-ready web and mobile applications (React, Next.js, Node.js, Flutter) to designing scalable APIs and managing databases (MongoDB, MySQL), I’ve led development teams, contributed clean and maintainable code, and tackled difficult problems through structured project planning.
                </p>
                <p className="mb-4">
                    Notable projects include <span className="text-purple-600 font-bold">ScholarKnights</span>, a full-stack group study platform for UCF students, and <span className="text-purple-600 font-bold">Contact Cloud</span>, a contact manager built on the LAMP stack.
                </p>
                <p className="mb-4">
                    I’m currently seeking opportunities in <span className="text-purple-600 font-bold">software engineering</span>,<span className="text-purple-600 font-bold"> AI development</span>, or <span className="text-purple-600 font-bold">data-driven</span> roles where I can contribute, grow, and continue building technology.
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
