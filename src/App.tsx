import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ImpactBar } from './components/ImpactBar';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

export function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((d) => !d)} />
      <main>
        <Hero />
        <ImpactBar />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
