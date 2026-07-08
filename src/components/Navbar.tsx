import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

function AnimeAvatar() {
  return (
    <div className="relative w-[42px] h-[42px] flex items-center justify-center select-none">
      {/* Static thin border */}
      <div className="absolute inset-0 rounded-full border border-blue-500/30"></div>
      
      {/* Avatar Image container */}
      <div className="relative z-10 w-[38px] h-[38px] rounded-full overflow-hidden flex items-center justify-center border border-white/10">
        <img 
          src="/anime_avatar.jpg" 
          alt="Shaikh Ziya Anime Avatar" 
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  );
}

// Magnetic Text Component
function MagneticText({ label, isActive }: { label: string; isActive: boolean }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!textRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = textRef.current.getBoundingClientRect();
    
    // Calculate distance from center of the text element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Magnetic pull factor (subtle 22% influence)
    const pullX = (clientX - centerX) * 0.22;
    const pullY = (clientY - centerY) * 0.22;
    
    // Cap pull to a subtle maximum of 4px to maintain alignment
    const maxPull = 4;
    const capX = Math.min(Math.max(pullX, -maxPull), maxPull);
    const capY = Math.min(Math.max(pullY, -maxPull), maxPull);
    
    setPosition({ x: capX, y: capY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.span
      ref={textRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={`relative z-10 block select-none ${isActive ? 'font-semibold' : ''}`}
      style={{ display: 'inline-block' }}
    >
      {label}
    </motion.span>
  );
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        
        {/* Brand Logo / Initials */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
          className="flex items-center gap-2.5 relative group font-bold tracking-tight text-2xl text-white"
        >
          <AnimeAvatar />
          
          <span className="font-space">
            <span className="text-[#FFFFFF]">Shaikh</span>
            <span className="text-[#FF7A1A] ml-1.5 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,122,26,0.15)]">Ziya</span>
          </span>
          <span className="absolute -bottom-1 left-[54px] w-0 h-0.5 bg-[#FF7A1A] transition-all duration-300 group-hover:w-[calc(100%-54px)]"></span>
        </a>

        {/* Desktop Menu */}
        <nav 
          className="hidden md:flex items-center gap-1.5"
          onMouseLeave={() => setHoveredId(null)}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-white cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400'
                }`}
              >
                {/* Floating/Sliding Hover Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="hoveredPill"
                    className="absolute inset-0 rounded-full border border-white/5 shadow-[0_0_15px_rgba(59,130,246,0.06)] -z-10"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(2px)'
                    }}
                    transition={{ type: 'spring', stiffness: 320, damping: 25 }}
                  />
                )}

                {/* Floating/Sliding Active Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                
                {/* Magnetic Tab Label Text */}
                <MagneticText label={item.label} isActive={isActive} />
              </a>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-slate-300 hover:text-white p-1 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.id);
                    }}
                    className={`block py-2 text-base font-medium transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-slate-400'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
