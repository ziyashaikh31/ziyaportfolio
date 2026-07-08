import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Network, X, Download } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

// Large Microsoft logo
const MicrosoftLogo = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="11" height="11" fill="#F25022"/>
    <rect x="12" width="11" height="11" fill="#7FBA00"/>
    <rect y="12" width="11" height="11" fill="#00A4EF"/>
    <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
  </svg>
);

// Hologram particles helper
function HologramParticles({ count = 4, color = "rgba(0, 210, 255, 0.4)" }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.circle
          key={i}
          cx={35 + i * 40 + Math.random() * 15}
          cy={25 + Math.random() * 60}
          r={0.8 + Math.random() * 0.7}
          fill={color}
          animate={{
            y: [-4, 4, -4],
            x: [-2, 2, -2],
            opacity: [0.15, 0.6, 0.15]
          }}
          transition={{
            duration: 4 + i * 1.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
}

// 1. AZ-900 Hologram
function AZ900Hologram({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#060b18] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.08),transparent_70%)]" />
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 112" fill="none">
        <HologramParticles count={4} color="rgba(0, 210, 255, 0.4)" />
        <motion.path 
          d="M60 70 C60 52, 80 42, 100 47 C110 40, 130 42, 140 52 C150 50, 160 57, 160 67 C160 77, 150 82, 140 82 H60 C50 82, 50 72, 60 72 Z" 
          stroke="#00d2ff" strokeWidth="1.5" fill="rgba(0, 210, 255, 0.05)"
          style={{ filter: "drop-shadow(0 0 8px rgba(0, 210, 255, 0.4))" }}
          animate={isHovered ? { y: [-2, 2, -2] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <line x1="80" y1="67" x2="100" y2="54" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
        <line x1="120" y1="67" x2="100" y2="54" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
        <circle cx="100" cy="54" r="3" fill="#8b5cf6" style={{ filter: "drop-shadow(0 0 6px rgba(139, 92, 246, 0.8))" }} />
        <circle cx="80" cy="67" r="2" fill="#00d2ff" />
        <circle cx="120" cy="67" r="2" fill="#00d2ff" />
      </svg>
    </div>
  );
}

// 2. AI-900 Hologram
function AI900Hologram({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#060b18] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 112" fill="none">
        <HologramParticles count={4} color="rgba(139, 92, 246, 0.4)" />
        <motion.g animate={isHovered ? { scale: 1.04 } : { scale: 1 }} className="origin-center">
          <path d="M40 56 L80 36 L120 76 L160 56" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />
          <path d="M40 56 L90 76 L120 36 L160 56" stroke="rgba(0, 210, 255, 0.25)" strokeWidth="1" />
          <line x1="80" y1="36" x2="90" y2="76" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />
          <line x1="120" y1="36" x2="120" y2="76" stroke="rgba(0, 210, 255, 0.25)" strokeWidth="1" />

          <circle cx="80" cy="36" r="3.5" fill="#8b5cf6" style={{ filter: "drop-shadow(0 0 6px #8b5cf6)" }} />
          <circle cx="120" cy="36" r="3.5" fill="#00d2ff" style={{ filter: "drop-shadow(0 0 6px #00d2ff)" }} />
          <circle cx="90" cy="76" r="3.5" fill="#00d2ff" style={{ filter: "drop-shadow(0 0 6px #00d2ff)" }} />
          <circle cx="120" cy="76" r="3.5" fill="#8b5cf6" style={{ filter: "drop-shadow(0 0 6px #8b5cf6)" }} />
        </motion.g>
      </svg>
    </div>
  );
}

// 3. DP-900 Hologram
function DP900Hologram({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#060b18] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.08),transparent_70%)]" />
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 112" fill="none">
        <HologramParticles count={4} color="rgba(0, 210, 255, 0.4)" />
        <rect x="40" y="30" width="120" height="52" rx="4" fill="rgba(6,11,24,0.6)" stroke="rgba(0, 210, 255, 0.3)" strokeWidth="1" style={{ filter: "drop-shadow(0 0 4px rgba(0, 210, 255, 0.1))" }} />
        <motion.path 
          d="M50 70 Q70 45 90 60 T130 45 T150 55" 
          stroke="#00d2ff" strokeWidth="1.5" strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 6px #00d2ff)" }}
          animate={isHovered ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <rect x="50" y="72" width="8" height="4" fill="rgba(139, 92, 246, 0.4)" rx="1" />
        <rect x="62" y="70" width="8" height="6" fill="rgba(139, 92, 246, 0.4)" rx="1" />
        <rect x="74" y="66" width="8" height="10" fill="rgba(139, 92, 246, 0.4)" rx="1" />
      </svg>
    </div>
  );
}

// 4. PL-900 Hologram
function PL900Hologram({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#060b18] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 112" fill="none">
        <HologramParticles count={4} color="rgba(139, 92, 246, 0.4)" />
        <motion.circle 
          cx="80" cy="56" r="14" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 2"
          style={{ filter: "drop-shadow(0 0 6px #8b5cf6)" }}
          animate={isHovered ? { rotate: 360 } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="origin-[80px_56px]"
        />
        <motion.circle 
          cx="115" cy="56" r="10" stroke="#00d2ff" strokeWidth="1.5" strokeDasharray="3 2"
          style={{ filter: "drop-shadow(0 0 6px #00d2ff)" }}
          animate={isHovered ? { rotate: -360 } : {}}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          className="origin-[115px_56px]"
        />
      </svg>
    </div>
  );
}

// 5. Azure Fundamentals Hologram
function AzureFundamentalsHologram({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#060b18] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.08),transparent_70%)]" />
      <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 112" fill="none">
        <HologramParticles count={4} color="rgba(0, 210, 255, 0.4)" />
        <motion.g 
          animate={isHovered ? { y: [-2, 2, -2] } : {}}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M60 70 L100 50 L140 70 L100 90 Z" fill="rgba(0,210,255,0.05)" stroke="#00d2ff" strokeWidth="1" style={{ filter: "drop-shadow(0 0 6px rgba(0,210,255,0.3))" }} />
          <path d="M60 55 L100 35 L140 55 L100 75 Z" fill="rgba(139,92,246,0.05)" stroke="#8b5cf6" strokeWidth="1" style={{ filter: "drop-shadow(0 0 6px rgba(139,92,246,0.3))" }} />
          <circle cx="100" cy="55" r="2.5" fill="#00d2ff" />
          <circle cx="100" cy="70" r="2.5" fill="#8b5cf6" />
        </motion.g>
      </svg>
    </div>
  );
}

// 6. Internship Hologram
function InternshipHologram({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#060b18] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]" />
      <svg className="w-full h-full max-w-[400px]" viewBox="0 0 300 150" fill="none">
        <HologramParticles count={5} color="rgba(16,185,129,0.4)" />
        <motion.path 
          d="M50 110 L150 70 L250 110 L150 150 Z" 
          fill="rgba(16,185,129,0.03)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" 
        />
        <rect x="110" y="45" width="40" height="25" rx="1.5" fill="#060b18" stroke="#10b981" strokeWidth="1.2" style={{ filter: "drop-shadow(0 0 8px rgba(16,185,129,0.3))" }} />
        <rect x="155" y="45" width="40" height="25" rx="1.5" fill="#060b18" stroke="#10b981" strokeWidth="1.2" style={{ filter: "drop-shadow(0 0 8px rgba(16,185,129,0.3))" }} />
        
        <line x1="115" y1="52" x2="135" y2="52" stroke="#34d399" strokeWidth="0.8" />
        <line x1="115" y1="57" x2="145" y2="57" stroke="#34d399" strokeWidth="0.8" />
        <line x1="160" y1="52" x2="185" y2="52" stroke="#10b981" strokeWidth="0.8" />
        <line x1="160" y1="57" x2="175" y2="57" stroke="#34d399" strokeWidth="0.8" />

        <line x1="100" y1="85" x2="200" y2="85" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />

        <motion.path 
          d="M60 40 L90 120 L30 120 Z" fill="rgba(16,185,129,0.05)"
          animate={isHovered ? { opacity: [0.3, 0.7, 0.3] } : { opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <line x1="60" y1="40" x2="50" y2="80" stroke="#10b981" strokeWidth="1" />
        <circle cx="60" cy="40" r="2.5" fill="#10b981" />
      </svg>
    </div>
  );
}

function getCertVisual(name: string, isHovered: boolean) {
  if (name.includes("AZ-900")) {
    return <AZ900Hologram isHovered={isHovered} />;
  } else if (name.includes("AI-900")) {
    return <AI900Hologram isHovered={isHovered} />;
  } else if (name.includes("DP-900")) {
    return <DP900Hologram isHovered={isHovered} />;
  } else if (name.includes("PL-900")) {
    return <PL900Hologram isHovered={isHovered} />;
  } else if (name.includes("Azure Fundamentals")) {
    return <AzureFundamentalsHologram isHovered={isHovered} />;
  } else {
    return <InternshipHologram isHovered={isHovered} />;
  }
}

function CertCard({ cert, onViewCertificate }: { cert: any; onViewCertificate: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    const factorX = (y / height - 0.5) * 5;
    const factorY = (x / width - 0.5) * -5;
    tiltX.set(factorX);
    tiltY.set(factorY);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
    setIsHovered(false);
  }

  // Cards lift 12px on hover
  const transformTemplate = useMotionTemplate`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${isHovered ? "-12px" : "0px"})`;
  const spotlightTemplate = useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(79, 140, 255, 0.08), transparent 80%)`;

  // Zoom illustration 1.08x on hover
  const illustrationTransform = useMotionTemplate`translateZ(${isHovered ? "20px" : "0px"}) scale(${isHovered ? 1.08 : 1})`;

  const isInternship = cert.category === "Internship";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ transform: transformTemplate, transformStyle: "preserve-3d" as const }}
      whileHover={{ 
        boxShadow: isInternship 
          ? '0 30px 60px -15px rgba(16, 185, 129, 0.15)' 
          : '0 30px 60px -15px rgba(139, 92, 246, 0.15)'
      }}
      className={`relative rounded-[20px] border ${isInternship ? 'border-emerald-500/10' : 'border-white/10'} bg-[#060B18] overflow-hidden group select-none shadow-xl flex flex-col justify-between w-full h-[450px] animate-[float_6s_ease-in-out_infinite]`}
    >
      {/* Background halo */}
      <div className={`absolute -inset-4 bg-gradient-to-tr ${isInternship ? 'from-emerald-500/10 to-teal-500/10' : 'from-blue-500/10 to-purple-500/10'} rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}></div>

      {/* Animated Gradient border overlays (Blue -> Cyan -> Purple) */}
      <div className={`absolute inset-0 bg-gradient-to-r ${isInternship ? 'from-emerald-500 via-teal-400 to-emerald-600' : 'from-blue-500 via-cyan-400 to-purple-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0`}></div>
      <div className="absolute inset-[1px] bg-[#060B18] rounded-[19px] z-10 pointer-events-none"></div>

      {/* Spotlight mouse tracker */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
        style={{ background: spotlightTemplate }}
      />

      <div className="relative z-20 flex flex-col h-full justify-between p-6">
        
        {/* Top: Futuristic animated illustration */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/5 bg-[#030712] mb-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,15,45,0.75)_100%)] z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            style={{ transform: illustrationTransform, transformStyle: "preserve-3d" as const }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full origin-center z-0"
          >
            {getCertVisual(cert.name, isHovered)}
          </motion.div>
        </div>

        {/* Middle: Name (large & bold) */}
        <div className="flex-grow flex flex-col justify-start text-left space-y-3">
          <h3 className="text-white font-bold font-space text-lg leading-tight tracking-tight tracking-normal h-[54px] line-clamp-2">
            {cert.name}
          </h3>

          {/* Badges row below the title */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-full border text-[8px] font-mono font-bold uppercase tracking-wider ${cert.badgeColor}`}>
              {cert.category}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full border text-[8px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 ${isInternship ? 'text-emerald-400 border-emerald-500/25 bg-emerald-500/10' : 'text-blue-400 border-blue-500/25 bg-blue-500/10'}`}>
              {!isInternship && <MicrosoftLogo />}
              {isInternship ? "Internship" : "Microsoft Certified"}
            </span>
          </div>
        </div>

        {/* Floating holographic particles */}
        <div className="absolute inset-x-0 bottom-20 pointer-events-none overflow-hidden h-10">
          <motion.div 
            className="absolute left-[15%] w-1 h-1 rounded-full bg-cyan-400/40"
            animate={isHovered ? { y: [-10, 10], opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <motion.div 
            className="absolute right-[15%] w-1 h-1 rounded-full bg-purple-400/40"
            animate={isHovered ? { y: [10, -10], opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ repeat: Infinity, duration: 2.2, delay: 0.4 }}
          />
        </div>

        {/* Bottom: Premium glass button: View Certificate */}
        <div className="pt-5 mt-auto">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onViewCertificate();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 py-3 text-xs font-bold text-white shadow-md hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all cursor-pointer font-sans"
          >
            View Certificate
            <motion.span 
              className="inline-block"
              animate={isHovered ? { x: [0, 4, 0] } : {}}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Glass shine sweep */}
      <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[shine_1.8s_ease-in-out_infinite] z-25 pointer-events-none"></div>
    </motion.div>
  );
}

const certificationsData = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    category: "Azure",
    issueDate: "June 2024",
    credentialId: "7c49e73c-9944-4b5d-8404-f49e42d36c57",
    logo: <MicrosoftLogo />,
    badgeColor: "text-blue-400 border-blue-500/25 bg-blue-500/10",
    pdfUrl: "/certificates/az900.pdf",
    verifyUrl: "https://www.credly.com/badges/7c49e73c-9944-4b5d-8404-f49e42d36c57"
  },
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    category: "Artificial Intelligence",
    issueDate: "July 2024",
    credentialId: "MC-AI900-2024-098",
    logo: <MicrosoftLogo />,
    badgeColor: "text-purple-400 border-purple-500/25 bg-purple-500/10",
    pdfUrl: "/certificates/ai900.pdf"
  },
  {
    name: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    category: "Data Analytics",
    issueDate: "August 2024",
    credentialId: "MC-DP900-2024-118",
    logo: <MicrosoftLogo />,
    badgeColor: "text-cyan-400 border-cyan-500/25 bg-cyan-500/10",
    pdfUrl: "/certificates/dp900.pdf"
  },
  {
    name: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    category: "Power Platform",
    issueDate: "September 2024",
    credentialId: "MC-PL900-2024-208",
    logo: <MicrosoftLogo />,
    badgeColor: "text-orange-400 border-orange-500/25 bg-orange-500/10",
    pdfUrl: "/certificates/pl900.pdf"
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    category: "Cloud Computing",
    issueDate: "October 2024",
    credentialId: "MC-AZURE-2024-382",
    logo: <MicrosoftLogo />,
    badgeColor: "text-yellow-400 border-yellow-500/25 bg-yellow-500/10",
    pdfUrl: "/certificates/azure-certified.pdf"
  },
  {
    name: "Internship Completion Certificate",
    issuer: "KasNet Technologies Pvt. Ltd.",
    category: "Internship",
    issueDate: "May 2024",
    credentialId: "KAS-DEVOPS-2024-082",
    logo: <Network className="h-6 w-6 text-emerald-400" />,
    badgeColor: "text-emerald-400 border-emerald-500/25 bg-emerald-500/10",
    pdfUrl: "/certificates/internship-certificate.pdf"
  }
];

export default function Certifications() {
  const [activePdf, setActivePdf] = useState<{ url: string; name: string } | null>(null);

  // Support ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePdf(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="relative px-6 py-28 md:px-8 bg-slate-950/20 overflow-hidden">
      
      {/* CSS shine keyframes and float animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50%, 100% { transform: translateX(150%) skewX(-12deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(0.2deg); }
        }
      `}} />

      {/* Volumetric background effects, radial glows, grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      <div className="absolute top-1/4 left-[5%] w-72 h-72 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-[5%] w-72 h-72 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none z-0 animate-pulse"></div>

      {/* Floating tiny particles in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-blue-400/40 animate-ping"></div>
        <div className="absolute top-[70%] left-[80%] w-1 h-1 rounded-full bg-purple-400/40 animate-ping"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Core Header */}
        <div className="relative flex flex-col items-center mb-20 select-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 blur-[50px] pointer-events-none z-0"></div>
          <AnimatedHeading text="Certifications" />
          <p className="mt-6 text-slate-400 font-medium text-sm md:text-base max-w-2xl text-center leading-relaxed">
            Professional certifications that validate my cloud, DevOps, cybersecurity, and data analytics skills.
          </p>
        </div>

        {/* Clean, Premium 3-column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full items-stretch">
          {certificationsData.map((cert, idx) => (
            <CertCard 
              key={idx} 
              cert={cert} 
              onViewCertificate={() => setActivePdf({ url: cert.pdfUrl, name: cert.name })}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen PDF Modal Viewer */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActivePdf(null);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[85vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-900 bg-slate-950/90 z-20 select-none">
                <div className="space-y-0.5 pr-4">
                  <h3 className="text-white font-bold font-space text-sm sm:text-base leading-tight truncate max-w-xs sm:max-w-md md:max-w-xl">
                    {activePdf.name}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wider">CERTIFICATE PREVIEW</p>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  {/* Download button */}
                  <a
                    href={activePdf.url}
                    download
                    className="flex h-9 items-center gap-1.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 text-xs font-mono text-white hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all cursor-pointer"
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActivePdf(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer Frame */}
              <div className="flex-1 bg-slate-900/40 relative z-10 w-full h-full overflow-hidden flex items-center justify-center">
                <iframe 
                  src={`${activePdf.url}#toolbar=0&navpanes=0`} 
                  className="w-full h-full border-none"
                  title={activePdf.name}
                />
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
