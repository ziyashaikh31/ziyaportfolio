import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { useActiveSection } from './hooks/useActiveSection';

const sectionIds = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];

// Section reveal animations wrapper (Subtle blur and y slide)
function FadeUpReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const activeSection = useActiveSection(sectionIds);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Path routing observer
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Framer Motion Scroll Progress Bar hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Render 404 page if path is invalid
  const base = import.meta.env.BASE_URL;
  const cleanPath = currentPath.replace(/\/$/, "");
  const cleanBase = base.replace(/\/$/, "");

  if (
    cleanPath !== cleanBase &&
    cleanPath !== `${cleanBase}/index.html` &&
    cleanPath !== '/' &&
    cleanPath !== '/index.html'
  ) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-orange-500/30 selection:text-orange-200 antialiased scroll-smooth">
      
      {/* 1. Scroll Progress Bar fixed at the top */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 origin-left z-[100] shadow-[0_0_12px_rgba(139,92,246,0.5)]"
        style={{ scaleX }}
      />

      {/* Dynamic Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main className="relative flex flex-col">
        {/* Decorative background gradients (Recruiter WOW factors) */}
        <div className="pointer-events-none fixed left-1/4 top-1/4 -z-20 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]"></div>
        <div className="pointer-events-none fixed right-1/4 bottom-1/4 -z-20 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]"></div>

        <Hero />
        <TechStrip />
        
        {/* Scroll transitions reveal wrappers */}
        <FadeUpReveal>
          <About />
        </FadeUpReveal>
        
        <FadeUpReveal>
          <Skills />
        </FadeUpReveal>
        
        <FadeUpReveal>
          <Projects />
        </FadeUpReveal>
        
        <FadeUpReveal>
          <Certifications />
        </FadeUpReveal>
        
        <FadeUpReveal>
          <Contact />
        </FadeUpReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* 3. Floating Action Resume Button */}
      <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 group select-none">
        
        {/* Glassmorphism tooltip */}
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#070b15]/90 border border-white/5 text-[10px] font-mono font-bold text-slate-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-md">
          Download Resume
        </div>

        <motion.a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(59,130,246,0.35)" }}
          whileTap={{ scale: 0.95 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 border border-white/10 text-white shadow-xl backdrop-blur-md cursor-pointer hover:opacity-95 transition-all"
        >
          <Download className="h-5 w-5 animate-pulse" />
        </motion.a>

      </div>
    </div>
  );
}
