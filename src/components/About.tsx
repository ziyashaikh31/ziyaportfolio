import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal, Target, Lightbulb, Download, Mail, Cpu, Cloud, Settings } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

const Github = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Linkedin = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Premium animated DevOps visualization showing AWS, Docker, Kubernetes, CI/CD, Dashboard flow
function DevOpsVisualization() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-slate-950/40 p-4 select-none">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-60"></div>
      
      <svg className="w-full h-full max-w-[400px] max-h-[300px]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Pulsating central hub core */}
        <motion.circle 
          cx="200" 
          cy="150" 
          r="45" 
          fill="url(#cloudGrad)"
          filter="url(#glow)"
          animate={{
            r: [40, 48, 40],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Core title dashboard indicators */}
        <text x="200" y="145" textAnchor="middle" fill="#ffffff" className="font-space font-bold text-[10px]" letterSpacing="1px">DEV-OPS</text>
        <text x="200" y="160" textAnchor="middle" fill="#60a5fa" className="font-mono text-[8px] font-bold">MONITOR: OK</text>

        {/* Connection paths with dashoffset animation representing data flows */}
        <g stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5">
          <path d="M200 150 L80 80" />
          <path d="M200 150 L320 80" />
          <path d="M200 150 L80 220" />
          <path d="M200 150 L320 220" />
        </g>

        {/* Pulsating data flow dots along the connection paths */}
        <motion.g stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round">
          <motion.path d="M200 150 L80 80" strokeDasharray="30 150"
            animate={{ strokeDashoffset: [180, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path d="M200 150 L320 80" strokeDasharray="30 150"
            animate={{ strokeDashoffset: [0, 180] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path d="M200 150 L80 220" strokeDasharray="30 150"
            animate={{ strokeDashoffset: [180, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.path d="M200 150 L320 220" strokeDasharray="30 150"
            animate={{ strokeDashoffset: [0, 180] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </motion.g>

        {/* Floating Node 1: AWS (Top Left) */}
        <motion.g 
          animate={{ y: [-4, 4, -4], x: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="80" cy="80" r="22" fill="#0f172a" stroke="#4f8cff" strokeWidth="1.5" filter="url(#glow)"/>
          <text x="80" y="84" textAnchor="middle" fill="#60a5fa" className="text-[14px]">☁️</text>
          <text x="80" y="112" textAnchor="middle" fill="#94a3b8" className="font-space font-bold text-[8px]">AWS CLOUD</text>
        </motion.g>

        {/* Floating Node 2: Kubernetes (Top Right) */}
        <motion.g 
          animate={{ y: [4, -4, 4], x: [-1, 1, -1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <circle cx="320" cy="80" r="22" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" filter="url(#glow)"/>
          <text x="320" y="84" textAnchor="middle" fill="#a78bfa" className="text-[14px]">☸️</text>
          <text x="320" y="112" textAnchor="middle" fill="#94a3b8" className="font-space font-bold text-[8px]">K8S CLUSTER</text>
        </motion.g>

        {/* Floating Node 3: Docker (Bottom Left) */}
        <motion.g 
          animate={{ y: [3, -3, 3], x: [2, -2, 2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <circle cx="80" cy="220" r="22" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" filter="url(#glow)"/>
          <text x="80" y="224" textAnchor="middle" fill="#22d3ee" className="text-[14px]">🐳</text>
          <text x="80" y="252" textAnchor="middle" fill="#94a3b8" className="font-space font-bold text-[8px]">DOCKER</text>
        </motion.g>

        {/* Floating Node 4: CI/CD Pipeline (Bottom Right) */}
        <motion.g 
          animate={{ y: [-3, 3, -3], x: [-2, 2, -2] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <circle cx="320" cy="220" r="22" fill="#0f172a" stroke="#ec4899" strokeWidth="1.5" filter="url(#glow)"/>
          <text x="320" y="224" textAnchor="middle" fill="#f472b6" className="text-[14px]">🔄</text>
          <text x="320" y="252" textAnchor="middle" fill="#94a3b8" className="font-space font-bold text-[8px]">CI/CD PIPELINE</text>
        </motion.g>

        {/* Dynamic telemetry charts at the bottom */}
        <g stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" fill="none">
          <path d="M150 250 H250 M150 255 H250" />
        </g>
        <motion.path 
          d="M150 252 Q162.5 240 175 252 T200 252 T225 252 T250 252" 
          stroke="#06b6d4" 
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: [
              "M150 252 Q162.5 240 175 252 T200 252 T225 252 T250 252",
              "M150 252 Q162.5 264 175 252 T200 252 T225 252 T250 252",
              "M150 252 Q162.5 240 175 252 T200 252 T225 252 T250 252"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Small floating background telemetry stars/nodes */}
        <motion.circle cx="120" cy="50" r="2" fill="#ffffff" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.circle cx="280" cy="50" r="1.5" fill="#a78bfa" animate={{ opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.circle cx="150" cy="210" r="2" fill="#60a5fa" animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="250" cy="210" r="1" fill="#ec4899" animate={{ opacity: [0.9, 0.3, 0.9] }} transition={{ duration: 3.5, repeat: Infinity }} />
      </svg>
    </div>
  );
}

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleSectionMouseMove}
      className="relative px-6 py-28 md:px-8 bg-slate-950/20 overflow-hidden"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0 animate-grid-shift"></div>

      {/* Shifting Grid Keyframes */}
      <style>{`
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 4rem 4rem; }
        }
        .animate-grid-shift {
          animation: grid-move 30s linear infinite;
        }

        /* Float rotations for right illustration */
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

      `}</style>

      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.04), rgba(139, 92, 246, 0.03), transparent 70%)`
        }}
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl relative z-10"
      >
        
        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (60%): Title, Intro, Cards, Resume */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <AnimatedHeading text="About Me" />
            </motion.div>

            {/* Description Text */}
            <motion.div variants={itemVariants} className="space-y-5 text-slate-300 text-lg leading-relaxed max-w-[700px] font-sans">
              <p className="font-semibold text-white text-xl">
                Hi, I'm Shaikh Ziya, an MCA student specializing in Cloud Computing at JSPM University, Pune.
              </p>
              <p>
                I am passionate about DevOps, Cloud Computing, Infrastructure Automation, Linux, and modern cloud technologies. I enjoy building real-world projects that improve my practical understanding of cloud infrastructure, automation, containerization, and CI/CD.
              </p>
              <p>
                My objective is to become a skilled DevOps Engineer capable of designing secure, scalable, and highly automated cloud solutions while continuously learning modern technologies and industry best practices.
              </p>
            </motion.div>

            {/* 4 Cards Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Education */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-6 rounded-[20px] bg-slate-950/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 flex flex-col justify-between shadow-lg"
              >
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-blue-500/10 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                    Education
                  </h3>
                  <div className="space-y-1 text-slate-400 text-xs leading-relaxed">
                    <p className="font-semibold text-slate-200">MCA</p>
                    <p>JSPM University, Pune</p>
                    <p className="text-[10px] uppercase text-blue-500 font-bold tracking-wider">Cloud Computing Specialization</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Currently Learning */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-6 rounded-[20px] bg-slate-950/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 flex flex-col justify-between shadow-lg"
              >
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-purple-500/10 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Terminal className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-purple-400" />
                    Currently Learning
                  </h3>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Linux", "AWS", "Docker", "Kubernetes", "Git", "GitHub", "Ansible", "Shell Scripting"].map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Career Goal */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-6 rounded-[20px] bg-slate-950/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 flex flex-col justify-between shadow-lg"
              >
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-blue-500/10 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Target className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-400" />
                    Career Goal
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Aspiring DevOps Engineer focused on Cloud Infrastructure, Automation, CI/CD and Kubernetes.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Learning Philosophy */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-6 rounded-[20px] bg-slate-950/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 flex flex-col justify-between shadow-lg"
              >
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-purple-500/10 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-white font-bold text-base flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-purple-400" />
                    Learning Philosophy
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Learning by building real-world DevOps projects and continuously improving practical skills.
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* Resume Button and Socials Row */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-4 items-center">
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                whileHover={{ 
                  y: -4, 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.45)'
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white transition-all shadow-lg cursor-pointer hover:brightness-110 font-sans"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </motion.a>
              
              <div className="flex gap-3 pl-2">
                {[
                  { icon: <Github className="h-5 w-5" />, url: "https://github.com" },
                  { icon: <Linkedin className="h-5 w-5" />, url: "https://linkedin.com" },
                  { icon: <Mail className="h-5 w-5" />, url: "mailto:shaikhziya@example.com" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3, scale: 1.1, color: '#60a5fa' }}
                    className="p-2.5 rounded-full bg-slate-900 border border-white/5 text-slate-400 hover:border-blue-500/20 transition-all shadow"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column (40%): Workspace Image & Floating Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Background Glows */}
            <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -top-10 -left-10 pointer-events-none"></div>
            <div className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -bottom-10 -right-10 pointer-events-none"></div>

            {/* Main Illustration frame */}
            <motion.div
              variants={itemVariants}
              className="relative p-[1.5px] rounded-[24px] overflow-hidden group shadow-2xl w-full max-w-[450px]"
            >
              {/* Spinning Aurora border */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#3b82f6,#8b5cf6,#3b82f6)] animate-[spin_15s_linear_infinite] opacity-35 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              <div className="relative z-10 rounded-[22.5px] overflow-hidden bg-slate-950/80 aspect-[4/3] w-full flex items-center justify-center">
                <DevOpsVisualization />
              </div>
            </motion.div>

            {/* Floating Glassmorphic Tag 1 */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 right-2 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 px-4 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Cloud className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Infrastructure</p>
                <p className="text-xs font-bold text-white">AWS • Cloud Architect</p>
              </div>
            </motion.div>

            {/* Floating Glassmorphic Tag 2 */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-2 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 px-4 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                <Cpu className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Virtualization</p>
                <p className="text-xs font-bold text-white">Docker • Kubernetes</p>
              </div>
            </motion.div>

            {/* Floating Glassmorphic Tag 3 */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 px-4 shadow-xl backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                <Settings className="h-4.5 w-4.5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Pipelines</p>
                <p className="text-xs font-bold text-white">Ansible • Automation</p>
              </div>
            </motion.div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
