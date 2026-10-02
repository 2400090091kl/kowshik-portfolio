import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
      {/* Subtle Background Lighting & Grid Effects */}
      <AnimatedBackground />

      {/* Glassmorphism Navbar */}
      <Navbar />

      {/* Main Sections */}
      <div className="relative z-10 space-y-12">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <LeadershipSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
