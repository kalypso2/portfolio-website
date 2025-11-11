import LeftSocials from '../components/LeftSocials';
import PurpleArrows from '../components/PurpleArrows';
import DarkWave from '../components/DarkWave';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="font-mono">
      {/* Landing Section */}
      <section
        id="landing"
        className="relative flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-br from-[#b8c6db] to-[#f5f7fa]"
      >
        <div className="mb-2 text-sm md:text-base text-gray-500">
          🥇 First Place Overall – SharkByte Hackathon 2025 (SharkVision)
          <br />
          <span className="text-xs md:text-sm text-gray-400 italic">Hosted by Miami Dade College</span>
        </div>
        <div className="mb-4">
          <span className="text-purple-600">Hi, my name is</span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 shadow-sm">Sam Ebaugh.</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 shadow-sm">I like computers.</h1>
        </div>
        <hr className="w-1/3 md:w-1/4 border-2 border-purple-600 my-8 animate-[fadeInAnimation_3s_ease_forwards]" />
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 shadow-sm">Check out my projects</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 shadow-sm">and other cool stuff!</h1>
        </div>
        {/* Place LeftSocialMediaIcons inside landing only */}
        <div className="absolute bottom-10 left-5">
          <LeftSocials />
        </div>
        <PurpleArrows />
        <DarkWave />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}



