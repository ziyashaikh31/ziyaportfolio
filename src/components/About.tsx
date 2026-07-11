import { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Compass, GraduationCap, Award, Briefcase, MapPin, Activity } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleSectionMouseMove}
      className="relative px-6 py-28 md:px-8 bg-slate-950/20 overflow-hidden"
    >
      {/* Background Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1.2px,transparent_1.2px),linear-gradient(to_bottom,#0f172a_1.2px,transparent_1.2px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none z-0 animate-grid-shift"></div>

      {/* Futuristic Telemetry Lines */}
      <div className="absolute top-0 left-10 w-[1px] h-full bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent pointer-events-none z-0"></div>

      {/* Shifting Grid Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 3.5rem 3.5rem; }
        }
        .animate-grid-shift {
          animation: grid-move 35s linear infinite;
        }
        @keyframes pulse-glowing {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(6, 182, 212, 0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(6, 182, 212, 0.8)); }
        }
        .animate-core-pulse {
          animation: pulse-glowing 4s ease-in-out infinite;
        }
      `}} />

      {/* Mouse Track Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.04), rgba(6, 182, 212, 0.03), transparent 70%)`
        }}
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl relative z-10"
      >
        {/* Section Header */}
        <div className="max-w-3xl mb-16 select-none">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">System Identity // Integration</span>
          <div className="mt-2">
            <AnimatedHeading text="Holographic Profile" />
          </div>
        </div>

        {/* 3-Column Futuristic Command Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN (lg:col-span-4): Floating Info Panels */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1 justify-center">
            
            {/* Panel 1: WHO I AM */}
            <motion.div
              variants={panelVariants}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.3)" }}
              className="relative p-5 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500/60"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500/60"></div>

              <div className="flex items-center gap-3 mb-3.5 select-none">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Compass className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-[11px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                  01 // Who I Am
                </h3>
              </div>
              <p className="text-slate-350 text-[13px] leading-relaxed font-sans font-medium">
                A passionate MCA student and aspiring DevOps Engineer focused on building scalable cloud infrastructure, configuration standards, and continuous delivery workflows.
              </p>
            </motion.div>

            {/* Panel 2: MISSION */}
            <motion.div
              variants={panelVariants}
              whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.3)" }}
              className="relative p-5 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-purple-500/60"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-500/60"></div>

              <div className="flex items-center gap-3 mb-3.5 select-none">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Target className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-[11px] font-mono font-bold tracking-widest text-purple-400 uppercase">
                  02 // Mission
                </h3>
              </div>
              <p className="text-slate-350 text-[13px] leading-relaxed font-sans font-medium">
                Continuously learning cloud virtualization tools, scripting processes, and code deployments while implementing secure configurations across real-world server architectures.
              </p>
            </motion.div>

            {/* Panel 3: VISION */}
            <motion.div
              variants={panelVariants}
              whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.3)" }}
              className="relative p-5 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Glowing Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/60"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500/60"></div>

              <div className="flex items-center gap-3 mb-3.5 select-none">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Shield className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-[11px] font-mono font-bold tracking-widest text-cyan-400 uppercase">
                  03 // Vision
                </h3>
              </div>
              <p className="text-slate-350 text-[13px] leading-relaxed font-sans font-medium">
                To design secure, highly automated, and self-healing cloud delivery pipelines that solve complex infrastructure problems and drive rapid software releases.
              </p>
            </motion.div>

          </div>

          {/* CENTER COLUMN (lg:col-span-4): Glowing Hologram Globe */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center order-1 lg:order-2 py-8 min-h-[360px] relative select-none">
            
            {/* Hologram Backing Orbs */}
            <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute w-48 h-48 bg-purple-500/5 rounded-full blur-[60px] top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            {/* Rotating Globe SVG Grid */}
            <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
              <svg 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full select-none overflow-visible"
              >
                <defs>
                  <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0891b2" stopOpacity="0.4" />
                    <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                  </radialGradient>
                  
                  <mask id="sphereClip">
                    <circle cx="200" cy="200" r="115" fill="#ffffff" />
                  </mask>

                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Concentric Gyroscope Rings */}
                <motion.ellipse
                  cx="200"
                  cy="200"
                  rx="155"
                  ry="50"
                  stroke="#3b82f6"
                  strokeWidth="0.8"
                  opacity="0.3"
                  style={{ transform: "rotate(-20deg)", transformOrigin: "200px 200px" }}
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />
                <motion.ellipse
                  cx="200"
                  cy="200"
                  rx="170"
                  ry="60"
                  stroke="#8b5cf6"
                  strokeWidth="0.6"
                  opacity="0.25"
                  style={{ transform: "rotate(30deg)", transformOrigin: "200px 200px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                />

                {/* Orb core backing */}
                <circle cx="200" cy="200" r="115" fill="url(#globeGlow)" />

                {/* Latitude Lines */}
                <g mask="url(#sphereClip)">
                  <path d="M 50 120 Q 200 145 350 120" stroke="#06b6d4" strokeWidth="0.6" opacity="0.25" />
                  <path d="M 50 160 Q 200 185 350 160" stroke="#06b6d4" strokeWidth="0.65" opacity="0.35" />
                  <path d="M 50 200 L 350 200" stroke="#06b6d4" strokeWidth="0.75" opacity="0.45" />
                  <path d="M 50 240 Q 200 215 350 240" stroke="#06b6d4" strokeWidth="0.65" opacity="0.35" />
                  <path d="M 50 280 Q 200 255 350 280" stroke="#06b6d4" strokeWidth="0.6" opacity="0.25" />
                </g>

                {/* Longitude Ellipses Simulating Rotation */}
                <g mask="url(#sphereClip)">
                  <motion.ellipse
                    cx="200"
                    cy="200"
                    rx="115"
                    ry="115"
                    stroke="#0891b2"
                    strokeWidth="0.65"
                    opacity="0.3"
                    fill="none"
                    animate={{ rx: [115, 0, 115] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.ellipse
                    cx="200"
                    cy="200"
                    rx="75"
                    ry="115"
                    stroke="#0891b2"
                    strokeWidth="0.65"
                    opacity="0.35"
                    fill="none"
                    animate={{ rx: [75, 115, 0, 75] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.ellipse
                    cx="200"
                    cy="200"
                    rx="35"
                    ry="115"
                    stroke="#0891b2"
                    strokeWidth="0.65"
                    opacity="0.4"
                    fill="none"
                    animate={{ rx: [35, 75, 115, 0, 35] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </g>

                {/* Glowing Outer Ring border */}
                <circle cx="200" cy="200" r="115" stroke="url(#globeGlow)" strokeWidth="1.5" opacity="0.75" />

                {/* Rotating Orbiting Satellites */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                >
                  <circle cx="200" cy="45" r="3.5" fill="#06b6d4" filter="url(#glowFilter)" className="animate-core-pulse" />
                  <circle cx="200" cy="45" r="7" stroke="#06b6d4" strokeWidth="0.5" opacity="0.4" className="animate-ping" />
                </motion.g>

                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                >
                  <circle cx="200" cy="355" r="3" fill="#8b5cf6" filter="url(#glowFilter)" />
                </motion.g>
              </svg>

              {/* HUD Telemetry Stats overlaying the centerpiece */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-slate-500 tracking-wider text-left leading-tight pointer-events-none">
                <p>SYS.LOCK: ACTIVE</p>
                <p>GRID.SYNC: OK</p>
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-slate-500 tracking-wider text-right leading-tight pointer-events-none">
                <p>E.ROTATION: 0.15rad/s</p>
                <p>H.BEAM: 486nm</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (lg:col-span-4): Live Status Widgets */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-3 justify-center">
            
            <motion.div
              variants={panelVariants}
              whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.25)" }}
              className="relative p-6 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Telemetry Corner Accents */}
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-500/50"></div>
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-500/50"></div>

              <div className="flex items-center gap-2 mb-5 pb-2 border-b border-white/5 select-none">
                <Activity className="h-4.5 w-4.5 text-cyan-400 animate-pulse" />
                <h3 className="text-[10px] font-mono font-bold tracking-[0.2em] text-white uppercase">
                  Real-Time Telemetry
                </h3>
              </div>

              {/* Status readout items */}
              <div className="space-y-4 font-mono text-left select-none">
                
                {/* 1. Status */}
                <div className="flex items-start gap-3">
                  <div className="text-[14px] leading-none pt-0.5">🟢</div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Current Status</p>
                    <p className="text-xs font-bold text-slate-200 uppercase tracking-wide">Learning & Building</p>
                  </div>
                </div>

                {/* 2. Location */}
                <div className="flex items-start gap-3">
                  <div className="text-[14px] leading-none pt-0.5"><MapPin className="h-3.5 w-3.5 text-blue-400" /></div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Primary Location</p>
                    <p className="text-xs font-bold text-slate-200 tracking-wide">Pune, India</p>
                    <p className="text-[8px] font-medium text-slate-500">18.5204° N, 73.8567° E</p>
                  </div>
                </div>

                {/* 3. Education */}
                <div className="flex items-start gap-3">
                  <div className="text-[14px] leading-none pt-0.5"><GraduationCap className="h-3.5 w-3.5 text-purple-400" /></div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Education</p>
                    <p className="text-xs font-bold text-slate-200 leading-tight">Master of Computer Applications (MCA)</p>
                    <p className="text-[8px] font-medium text-purple-400 uppercase tracking-widest font-semibold">JSPM University</p>
                  </div>
                </div>

                {/* 4. Certifications */}
                <div className="flex items-start gap-3">
                  <div className="text-[14px] leading-none pt-0.5"><Award className="h-3.5 w-3.5 text-cyan-400" /></div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Certifications</p>
                    <p className="text-xs font-bold text-slate-200">Microsoft Certified</p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="text-[8px] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase tracking-wider">AZ-900</span>
                      <span className="text-[8px] px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold uppercase tracking-wider">PL-900</span>
                    </div>
                  </div>
                </div>

                {/* 5. Internship */}
                <div className="flex items-start gap-3">
                  <div className="text-[14px] leading-none pt-0.5"><Briefcase className="h-3.5 w-3.5 text-orange-450" /></div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Internship History</p>
                    <p className="text-xs font-bold text-slate-200">Data Analyst Intern</p>
                    <p className="text-[8.5px] font-medium text-slate-400 leading-none">KasNet Technologies Pvt. Ltd.</p>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
