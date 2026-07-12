import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const techItems = [
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2s-3.5 1.5-3.5 4.5c0 .6.2 1.3.5 1.9C6.8 9.3 5 11.4 5 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.6-1.8-4.7-4-5.6.3-.6.5-1.3.5-1.9C15.5 3.5 12 2 12 2zm0 2.5c1.5.8 2 2 2 3.5s-.5 2.5-2 3.5c-1.5-1-2-2-2-3.5s.5-2.7 2-3.5zm-3.5 9c.8 0 1.5.7 1.5 1.5S9.3 16.5 8.5 16.5 7 15.8 7 15s.7-1.5 1.5-1.5zm7 0c.8 0 1.5.7 1.5 1.5S16.3 16.5 15.5 16.5 14 15.8 14 15s.7-1.5 1.5-1.5z"/>
      </svg>
    ),
    name: "Linux"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 6.94l-9.5-5.5a1 1 0 00-1 0L2 6.94a1 1 0 00-.5.87v10.38a1 1 0 00.5.87l9.5 5.5a1 1 0 001 0l9.5-5.5a1 1 0 00.5-.87V7.81a1 1 0 00-.5-.87zM12 3.4l8 4.63-3.11 1.8-8-4.63zm-9 5.2l8-4.62v9.25l-8 4.62zm10 12v-9.25l8-4.62v9.25z"/>
      </svg>
    ),
    name: "AWS Cloud"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.962 7.475h-2.42V4.96h2.42v2.515zm0-2.73h-2.42V2.23h2.42v2.515zM11.23 7.475H8.81V4.96H11.23v2.515zm0-2.73H8.81V2.23H11.23v2.515zM8.51 7.475H6.09V4.96h2.42v2.515zM5.776 7.475H3.355V4.96h2.42v2.515zM16.702 7.475h-2.42V4.96h2.42v2.515zm2.84 3.003h-2.42V7.964h2.42V10.48zm-2.84 0h-2.42V7.964h2.42V10.48zm-2.738 0h-2.42V7.964h2.42V10.48zm-2.73 0H8.81V7.964H11.23V10.48zm-2.73 0H6.09V7.964h2.42V10.48zm-2.738 0H3.355V7.964h2.42V10.48zm19.244 1.13c-.158-.088-.57-.367-1.127-.367a2.535 2.535 0 00-1.85.807 5.6 5.6 0 00-1.173 1.91 14.996 14.996 0 00-.77 2.766c-.33 1.637-.992 2.656-2.146 3.197-.84.394-2.146.474-3.794.474H1.362v-1.157c0-.28.187-.525.455-.6.76-.214 1.15-.59 1.15-1.112v-6.326c0-.522-.39-1.077-1.15-1.29a.625.625 0 01-.455-.602v-.868c1.332 0 2.222.784 2.85 1.543.642.775.952 1.488.952 2.12v1.076h17.915c.348 0 .614.337.525.674-.085.32-.234.693-.418 1.05z"/>
      </svg>
    ),
    name: "Docker"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.002 0a1.996 1.996 0 00-1.272.463L2.247 7.551a1.99 1.99 0 00-.728 1.54v10.158c0 .61.277 1.185.752 1.564l8.473 6.727a2.001 2.001 0 002.518 0l8.473-6.727a1.996 1.996 0 00.752-1.564V9.091a1.99 1.99 0 00-.728-1.54L13.27.463A1.996 1.996 0 0012.002 0zm.006 3.328l6.398 5.08v3.473L12 9.07v-.004l-.008-5.738zm-1.096.38v5.361l-6.392 2.812V8.79l6.392-5.082zm2.188 0l6.392 5.082v3.089l-6.392-2.81V3.708zm-7.484 7.89l6.392 2.811v5.362l-6.392-5.081V11.6zm12.78 0v3.09l-6.392 5.083V14.41l6.392-2.81zM12 10.366l5.296 2.327L12 17.253l-5.296-4.56L12 10.366z"/>
      </svg>
    ),
    name: "Kubernetes"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    name: "Git & GitHub"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z"/>
      </svg>
    ),
    name: "DevOps"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.969 0C5.358 0 5.484 2.875 5.484 2.875L5.5 5.813H12V6.25H2.969s-2.969.344-2.969 5.5c0 5.156 2.594 5.375 2.594 5.375l2.313.031v-3.219c0-3.375 2.75-3.375 2.75-3.375h5.375c3.375 0 3.375-2.75 3.375-2.75V1.28s.094-1.28-4.437-1.28zm5.188 5.625v3.219c0 3.375-2.75 3.375-2.75 3.375H9.031c-3.375 0-3.375 2.75-3.375 2.75v6.438s-.094 1.28 4.437 1.28c6.61 0 6.484-2.875 6.484-2.875l-.015-2.938h-6.5v-.438h9.031s2.969-.344 2.969-5.5c0-5.156-2.594-5.375-2.594-5.375l-2.313-.031z"/>
      </svg>
    ),
    name: "Python"
  },
  {
    icon: (
      <svg className="h-5 w-5 transition-transform duration-300 tech-icon text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 15c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5zm0-5c-5.52 0-10-2.02-10-4.5v3c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-3c0 2.48-4.48 4.5-10 4.5z"/>
      </svg>
    ),
    name: "SQL"
  }
];

// Hex, RGB and glow offsets customized per technology brand
const colorPairs: Record<string, { c1: string; c2: string; rgb1: string; rgb2: string }> = {
  "Linux": { c1: "#8B5CF6", c2: "#06B6D4", rgb1: "139, 92, 246", rgb2: "6, 182, 212" },
  "AWS Cloud": { c1: "#F97316", c2: "#FACC15", rgb1: "249, 115, 22", rgb2: "250, 204, 21" },
  "Docker": { c1: "#06B6D4", c2: "#3B82F6", rgb1: "6, 182, 212", rgb2: "59, 130, 246" },
  "Kubernetes": { c1: "#3B82F6", c2: "#8B5CF6", rgb1: "59, 130, 246", rgb2: "139, 92, 246" },
  "Git & GitHub": { c1: "#84CC16", c2: "#22C55E", rgb1: "132, 204, 22", rgb2: "34, 197, 94" },
  "DevOps": { c1: "#EF4444", c2: "#F97316", rgb1: "239, 68, 68", rgb2: "249, 115, 22" },
  "Python": { c1: "#FACC15", c2: "#3B82F6", rgb1: "250, 204, 21", rgb2: "59, 130, 246" },
  "SQL": { c1: "#06B6D4", c2: "#A855F7", rgb1: "6, 182, 212", rgb2: "168, 85, 247" }
};

export default function TechStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Mouse coordinates
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  
  // Continuous scroll coordinates
  const xRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
      setMouseY(e.clientY - rect.top);
    }
  };

  useEffect(() => {
    let animationFrameId: number;
    
    const update = () => {
      // Constant scrolling speed (increased by ~40% for faster movement)
      xRef.current -= 1.88;

      // Seamless loop reset
      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (xRef.current <= -halfWidth) {
          xRef.current = 0;
        }
        trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      // Gentle vertical sine-wave float
      const now = performance.now();
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.tech-card-wrapper');
        items.forEach((item, index) => {
          const floatY = Math.sin(now * 0.0018 + index * 0.8) * 3.5;
          (item as HTMLElement).style.setProperty('--float-y', `${floatY}px`);
        });
      }

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className="w-full py-11 overflow-hidden relative select-none ticker-container bg-[#050816]"
    >
      {/* CSS Stylesheet Injector */}
      <style>{`
        /* Energy Beams Top/Bottom Borders (Continuously Moving opposing Flows) */
        .top-energy-beam {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2.2px;
          background: linear-gradient(90deg, #3B82F6, #8B5CF6, #F97316, #06B6D4, #3B82F6);
          background-size: 200% 100%;
          animation: energy-flow-right 4.5s linear infinite;
          z-index: 20;
        }
        .bottom-energy-beam {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2.2px;
          background: linear-gradient(90deg, #F97316, #EC4899, #3B82F6, #F97316);
          background-size: 200% 100%;
          animation: energy-flow-left 4.5s linear infinite;
          box-shadow: 0 -3px 14px rgba(236, 72, 153, 0.4);
          z-index: 20;
        }

        @keyframes energy-flow-right {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes energy-flow-left {
          0% { background-position: 200% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Running sparks traveling across the energy beams */
        @keyframes spark-travel-right {
          0% { left: -10%; }
          30% { left: 110%; }
          100% { left: 110%; }
        }
        @keyframes spark-travel-left {
          0% { right: -10%; }
          30% { right: 110%; }
          100% { right: 110%; }
        }
        .energy-spark-top {
          position: absolute;
          top: 0;
          width: 140px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #06B6D4, #ffffff, #8B5CF6, transparent);
          filter: blur(1px);
          animation: spark-travel-right 5s ease-in-out infinite;
          z-index: 21;
        }
        .energy-spark-bottom {
          position: absolute;
          bottom: 0;
          width: 160px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #EC4899, #ffffff, #F97316, transparent);
          filter: blur(1px);
          animation: spark-travel-left 4.5s ease-in-out infinite;
          z-index: 21;
        }

        /* Ambient grid pattern background */
        .ambient-grid {
          position: absolute;
          inset: 0;
          background-size: 3.5rem 3.5rem;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.35) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 65% 55% at 50% 50%, #000 65%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* Floating background glow blobs (aurora effect) */
        .aurora-blob-1 {
          position: absolute;
          top: -30%;
          left: 15%;
          width: 320px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.04), transparent 70%);
          filter: blur(50px);
          animation: blob-drift 20s ease-in-out infinite alternate;
          z-index: 0;
          pointer-events: none;
        }
        .aurora-blob-2 {
          position: absolute;
          bottom: -30%;
          right: 15%;
          width: 350px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.03), transparent 70%);
          filter: blur(50px);
          animation: blob-drift 24s ease-in-out infinite alternate-reverse;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes blob-drift {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          100% { transform: translate3d(40px, -20px, 0) scale(1.18); }
        }

        /* Colored particles floating in the background */
        .bg-particle-blue { background: rgba(59, 130, 246, 0.16); }
        .bg-particle-orange { background: rgba(249, 115, 22, 0.14); }
        .bg-particle-purple { background: rgba(139, 92, 246, 0.15); }
        .bg-particle-cyan { background: rgba(6, 182, 212, 0.16); }

        .bg-particle-set {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: particle-floating 14s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes particle-floating {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.15; }
          50% { transform: translateY(-20px) translateX(20px); opacity: 0.45; }
          100% { transform: translateY(8px) translateX(-8px); opacity: 0.15; }
        }

        /* Global rainbow glass sweep (every 6 seconds) */
        @keyframes rainbow-glass-sweep {
          0% { left: -150%; }
          30% { left: 250%; }
          100% { left: 250%; }
        }
        .global-rainbow-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 400px;
          background: linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.03) 20%, 
            rgba(168, 85, 247, 0.03) 40%, 
            rgba(236, 72, 153, 0.03) 60%, 
            rgba(249, 115, 22, 0.03) 80%, 
            transparent 100%
          );
          transform: skewX(-28deg);
          animation: rainbow-glass-sweep 7.5s ease-in-out infinite;
          pointer-events: none;
          z-index: 5;
        }

        /* Premium glass chip capsule design (multicolor neon breathe) */
        .tech-card {
          --c1: var(--neon-color-1, #3b82f6);
          --c2: var(--neon-color-2, #f97316);
          --rgb1: var(--neon-rgb-1, 59, 130, 246);
          --rgb2: var(--neon-rgb-2, 249, 115, 22);

          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 11px 26px;
          border-radius: 9999px;
          border: 1.5px solid rgba(255, 255, 255, 0.04);
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.25));
          backdrop-filter: blur(18px);
          box-shadow: inset 0 1px 1.5px rgba(255, 255, 255, 0.08),
                      0 5px 15px rgba(0, 0, 0, 0.4),
                      0 0 12px rgba(var(--rgb1), 0.08);
          animation: neon-breathe-glow 4.5s ease-in-out infinite alternate;
          transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          overflow: hidden;
          will-change: transform, box-shadow;
        }

        @keyframes neon-breathe-glow {
          0% {
            border-color: rgba(var(--rgb1), 0.12);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06),
                        0 4px 12px rgba(0, 0, 0, 0.35),
                        0 0 14px rgba(var(--rgb1), 0.08);
          }
          100% {
            border-color: rgba(var(--rgb2), 0.28);
            box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.06),
                        0 4px 12px rgba(0, 0, 0, 0.35),
                        0 0 22px rgba(var(--rgb2), 0.24);
          }
        }

        /* Glass shine sweep effect */
        .tech-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-25deg);
          transition: left 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .tech-card:hover::after {
          left: 150%;
        }

        /* Hover behavior (Lift, expand shadow, illuminate text) */
        .tech-card:hover {
          border-color: var(--c1) !important;
          background-color: rgba(15, 23, 42, 0.72) !important;
          transform: translate3d(0, -6px, 0) scale(1.08) !important;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.18),
                      0 8px 24px rgba(0, 0, 0, 0.5),
                      0 0 28px rgba(var(--rgb1), 0.42),
                      0 0 28px rgba(var(--rgb2), 0.28) !important;
        }

        /* Tech Icon Idle Floating / Breathing */
        .tech-icon-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: icon-float-breathing 4s ease-in-out infinite alternate;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        @keyframes icon-float-breathing {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-1.5px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(-1deg); }
        }

        .tech-card:hover .tech-icon-container {
          animation: none !important;
          transform: rotate(15deg) scale(1.15) translateY(-1px) !important;
        }

        .tech-card:hover .tech-icon {
          color: var(--c1) !important;
          filter: drop-shadow(0 0 6px var(--c1));
        }

        .tech-card:hover .tech-text {
          color: #ffffff !important;
          text-shadow: 0 0 10px var(--c1);
        }
      `}</style>

      {/* Futuristic Energy Beams borders */}
      <div className="top-energy-beam"></div>
      <div className="energy-spark-top"></div>
      <div className="bottom-energy-beam"></div>
      <div className="energy-spark-bottom"></div>

      {/* Background patterns */}
      <div className="ambient-grid"></div>
      <div className="aurora-blob-1"></div>
      <div className="aurora-blob-2"></div>

      {/* Floating Low Opacity Particles (Blue, Orange, Purple, Cyan) */}
      <div className="bg-particle-set bg-particle-blue w-2 h-2 left-[12%] top-[25%]" style={{ animationDelay: '0s', animationDuration: '9s' }}></div>
      <div className="bg-particle-set bg-particle-orange w-1.5 h-1.5 right-[18%] bottom-[20%]" style={{ animationDelay: '2.5s', animationDuration: '11s' }}></div>
      <div className="bg-particle-set bg-particle-purple w-2.5 h-2.5 left-[38%] bottom-[30%]" style={{ animationDelay: '4.8s', animationDuration: '14s' }}></div>
      <div className="bg-particle-set bg-particle-cyan w-1.5 h-1.5 right-[32%] top-[15%]" style={{ animationDelay: '1.2s', animationDuration: '10s' }}></div>
      <div className="bg-particle-set bg-particle-blue w-1 h-1 left-[65%] top-[10%]" style={{ animationDelay: '3.4s', animationDuration: '12s' }}></div>
      <div className="bg-particle-set bg-particle-orange w-2 h-2 left-[82%] bottom-[12%]" style={{ animationDelay: '0.8s', animationDuration: '13s' }}></div>

      {/* Global rainbow glass reflection sweep */}
      <div className="global-rainbow-sweep"></div>

      {/* Fade Edge Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-[#050816] via-[#050816]/75 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-[#050816] via-[#050816]/75 to-transparent pointer-events-none z-10"></div>

      {/* Multi-color mouse radial spotlight */}
      {isMouseOver && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.04) 30%, rgba(249, 115, 22, 0.03) 60%, transparent 100%)`
          }}
        />
      )}

      {/* Marquee Ticker Track */}
      <div 
        ref={trackRef} 
        className="flex shrink-0 w-max relative z-20"
      >
        {/* Track Loop 1 */}
        <div className="flex shrink-0 items-center justify-around gap-6 px-3">
          {techItems.map((item, idx) => {
            const colors = colorPairs[item.name] || { c1: "#3B82F6", c2: "#F97316", rgb1: "59, 130, 246", rgb2: "249, 115, 22" };
            return (
              <div key={`c1-${idx}`} className="flex items-center shrink-0">
                <div 
                  className="tech-card-wrapper"
                  style={{
                    transform: `translate3d(0, var(--float-y, 0px), 0)`,
                    borderRadius: '9999px',
                    transition: 'transform 0.15s ease-out',
                    '--neon-color-1': colors.c1,
                    '--neon-color-2': colors.c2,
                    '--neon-rgb-1': colors.rgb1,
                    '--neon-rgb-2': colors.rgb2
                  } as React.CSSProperties}
                >
                  <div className="tech-card">
                    <span className="tech-icon-container">{item.icon}</span>
                    <span className="font-space font-bold text-sm lg:text-base tracking-widest text-slate-300 tech-text transition-colors duration-300 select-none">
                      {item.name}
                    </span>
                  </div>
                </div>
                <span className="text-blue-500/20 font-bold px-3 select-none pointer-events-none">
                  •
                </span>
              </div>
            );
          })}
        </div>

        {/* Track Loop 2 */}
        <div className="flex shrink-0 items-center justify-around gap-6 px-3">
          {techItems.map((item, idx) => {
            const colors = colorPairs[item.name] || { c1: "#3B82F6", c2: "#F97316", rgb1: "59, 130, 246", rgb2: "249, 115, 22" };
            return (
              <div key={`c2-${idx}`} className="flex items-center shrink-0">
                <div 
                  className="tech-card-wrapper"
                  style={{
                    transform: `translate3d(0, var(--float-y, 0px), 0)`,
                    borderRadius: '9999px',
                    transition: 'transform 0.15s ease-out',
                    '--neon-color-1': colors.c1,
                    '--neon-color-2': colors.c2,
                    '--neon-rgb-1': colors.rgb1,
                    '--neon-rgb-2': colors.rgb2
                  } as React.CSSProperties}
                >
                  <div className="tech-card">
                    <span className="tech-icon-container">{item.icon}</span>
                    <span className="font-space font-bold text-sm lg:text-base tracking-widest text-slate-300 tech-text transition-colors duration-300 select-none">
                      {item.name}
                    </span>
                  </div>
                </div>
                <span className="text-blue-500/20 font-bold px-3 select-none pointer-events-none">
                  •
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
