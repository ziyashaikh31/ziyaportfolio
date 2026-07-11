import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Volume2, VolumeX, RotateCcw } from 'lucide-react';

// Brand SVGs
const GithubIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

function HeroSocialIcon({ social }: { social: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="relative group/tooltip select-none">
      <motion.a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        whileHover={{ y: -4, scale: 1.1, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.15)' }}
        className="relative flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/70 border border-slate-800 text-slate-400 hover:text-white transition-all shadow-md group overflow-hidden"
      >
        <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#3b82f6,#f97316,#3b82f6)] opacity-20 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none z-0"></div>
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            background: useMotionTemplate`radial-gradient(40px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.15), transparent 80%)`
          }}
        />
        
        <div className="relative z-20 group-hover:scale-115 transition-transform duration-300">
          {social.icon}
        </div>
      </motion.a>

      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] text-slate-300 font-sans tracking-wide text-center w-max opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-xl z-30">
        {social.name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
      </div>
    </div>
  );
}

const roles = [
  "Aspiring DevOps Engineer",
  "Cloud Architecture Enthusiast",
  "CI/CD & Automation Specialist"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Video playback control states
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isBuffering, setIsBuffering] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set default volume to 100%
    video.volume = 1.0;

    const handleAutoplay = async () => {
      try {
        video.muted = false;
        setIsMuted(false);
        await video.play();
      } catch (err) {
        console.log("Autoplay unmuted blocked by browser safety, playing muted:", err);
        try {
          video.muted = true;
          setIsMuted(true);
          await video.play();
        } catch (muteErr) {
          console.error("Muted autoplay also blocked:", muteErr);
        }
      }
    };

    const onCanPlay = () => {
      setIsBuffering(false);
      handleAutoplay();
    };
    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);
    const onEnded = () => setVideoEnded(true);

    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('ended', onEnded);

    if (video.readyState >= 3) {
      setIsBuffering(false);
      handleAutoplay();
    }

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('ended', onEnded);
    };
  }, []);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
      video.play()
        .then(() => {
          setVideoEnded(false);
        })
        .catch((err) => console.error("Replay failure:", err));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };
  // Parallax Scroll Effect
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, -35]);

  // 3D Card Tilt State
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    const rX = -(mouseY / (height / 2)) * 7;
    const rY = (mouseX / (width / 2)) * 7;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = roles[roleIndex];
    
    // Typing speeds
    const typingSpeed = isDeleting ? 30 : 60;
    const pauseTime = isDeleting ? 100 : 2000;

    const handleType = () => {
      if (!isDeleting) {
        if (currentText !== fullText) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Pause at full text
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        if (currentText !== '') {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 64; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-12 md:px-8 lg:py-16"
    >
      {/* Premium background mesh & ambient lights */}
      <div className="absolute inset-0 -z-10 bg-slate-950">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>
        {/* Ambient colored glowing orbs */}
        <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]"></div>
      </div>

      <div className="mx-auto grid max-w-7xl w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Left Column: Bio & Intro wrapped in premium glassmorphism */}
        <div className="lg:col-span-7 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              y: -4, 
              boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.08), 0 30px 60px -15px rgba(249, 115, 22, 0.08)',
              borderColor: 'rgba(255, 255, 255, 0.12)'
            }}
            className="relative w-full rounded-[24px] border border-white/5 bg-slate-950/45 p-6 sm:p-8 md:p-10 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-2xl flex flex-col gap-6 sm:gap-8"
          >
            {/* Soft gradient border glows inside the container */}
            <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/5 blur-[80px]"></div>
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-orange-500/5 blur-[80px]"></div>

            {/* Section 1: Greeting Badge */}
            <div className="flex items-start">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                👋 Hello...
              </motion.div>
            </div>

            {/* Section 2 & 3: Grouped Name and Animated Role */}
            <div className="flex flex-col gap-2">
              {/* Main Name Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight"
              >
                I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]">Shaikh Ziya</span>
              </motion.h1>

              {/* Typewriter role title */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="min-h-[44px] text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl md:text-4xl"
              >
                <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  {currentText}
                </span>
                <span className="ml-1 inline-block w-[3px] h-[30px] bg-orange-400 animate-[pulse_0.8s_infinite] align-middle"></span>
              </motion.div>
            </div>

            {/* Section 4: Short Introduction inside a transparent glass panel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-2xl border border-white/5 bg-white/5 p-4 sm:p-5 backdrop-blur-sm"
            >
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                Pursuing Master of Computer Applications (MCA) at <strong className="text-white">JSPM University, Pune</strong>. Passionate about DevOps, Cloud Computing, and Automation.
              </p>
            </motion.div>

            {/* Section 5: CTA Action Buttons inside a horizontal action bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <style>{`
                /* Soft pulse for the Get In Touch button shadow every 4 seconds */
                @keyframes get-in-touch-pulse {
                  0%, 100% {
                    box-shadow: 0 8px 20px -6px rgba(59, 130, 246, 0.4), 
                                0 8px 20px -6px rgba(249, 115, 22, 0.4);
                  }
                  50% {
                    box-shadow: 0 12px 25px -2px rgba(59, 130, 246, 0.55), 
                                0 12px 25px -2px rgba(249, 115, 22, 0.55);
                  }
                }

                .pulse-glow-get-in-touch {
                  box-shadow: 0 8px 20px -6px rgba(59, 130, 246, 0.4), 0 8px 20px -6px rgba(249, 115, 22, 0.4);
                  animation: get-in-touch-pulse 4s ease-in-out infinite;
                  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .pulse-glow-get-in-touch:hover {
                  box-shadow: 0 20px 35px -5px rgba(59, 130, 246, 0.75), 0 20px 35px -5px rgba(249, 115, 22, 0.75) !important;
                }

                /* Shimmer sweep effect every 7 seconds */
                @keyframes shimmer-sweep-btn {
                  0% { left: -150%; }
                  12% { left: 150%; }
                  100% { left: 150%; }
                }

                .btn-shimmer-effect {
                  position: absolute;
                  top: 0;
                  left: -150%;
                  width: 50%;
                  height: 100%;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.18) 50%,
                    rgba(255, 255, 255, 0) 100%
                  );
                  transform: skewX(-20deg);
                  animation: shimmer-sweep-btn 7s ease-in-out infinite;
                  pointer-events: none;
                }

                /* Glass reflection sweep on hover */
                .btn-glass-sweep {
                  position: absolute;
                  top: 0;
                  left: -150%;
                  width: 50%;
                  height: 100%;
                  background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.3) 50%,
                    rgba(255, 255, 255, 0) 100%
                  );
                  transform: skewX(-20deg);
                  transition: left 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                  pointer-events: none;
                }

                .btn-container-hover:hover .btn-glass-sweep {
                  left: 150%;
                }

                /* Custom Download Bounce & Rotate */
                @keyframes download-bounce-rotate {
                  0%, 100% {
                    transform: translateY(0) rotate(0deg);
                  }
                  50% {
                    transform: translateY(-4px) rotate(5deg);
                  }
                }
                .btn-container-hover:hover .btn-download-icon {
                  animation: download-bounce-rotate 0.6s ease-in-out infinite;
                }

                /* Elegant download glow */
                .glow-download-resume {
                  box-shadow: 0 4px 12px -3px rgba(59, 130, 246, 0.15), inset 0 0 10px rgba(59, 130, 246, 0.05);
                  border-color: rgba(59, 130, 246, 0.2) !important;
                  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
                }
                .glow-download-resume:hover {
                  box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.4), inset 0 0 12px rgba(59, 130, 246, 0.15);
                  border-color: rgba(59, 130, 246, 0.4) !important;
                }
              `}</style>

              {/* Primary Button */}
              <motion.button
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={scrollToContact}
                className="pulse-glow-get-in-touch btn-container-hover group relative flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-6 py-3.5 text-sm font-semibold text-white cursor-pointer overflow-hidden shadow-lg"
              >
                {/* Glossy shimmer sweep */}
                <div className="btn-shimmer-effect"></div>
                {/* Hover glass reflection sweep */}
                <div className="btn-glass-sweep"></div>
                
                <span className="relative z-10">Get in Touch</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-2" />
              </motion.button>

              {/* Secondary Button */}
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()} // Placeholder action for resume download
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="glow-download-resume btn-container-hover group relative flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white backdrop-blur-sm cursor-pointer overflow-hidden"
              >
                {/* Glossy shimmer sweep */}
                <div className="btn-shimmer-effect"></div>
                {/* Hover glass reflection sweep */}
                <div className="btn-glass-sweep"></div>

                <Download className="btn-download-icon relative z-10 h-4 w-4 transition-all duration-300 ease-out" />
                <span className="relative z-10">Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Section 6: Social Icons inside a rounded glass container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="self-start inline-flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-2 px-3 backdrop-blur-sm"
            >
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mr-2 ml-1">Connect:</span>
              {[
                { name: 'GitHub', url: 'https://github.com', icon: <GithubIcon className="h-5 w-5" /> },
                { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedinIcon className="h-5 w-5" /> },
                { name: 'Instagram', url: 'https://instagram.com/mr_ziyxx_18', icon: <InstagramIcon className="h-5 w-5" /> }
              ].map((social, idx) => (
                <HeroSocialIcon key={idx} social={social} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Avatar / DevOps Floating Showcase */}
        <div className="flex flex-col gap-6 justify-center items-center lg:col-span-5 relative z-10">
          <motion.div
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Soft Ambient Glows behind the photo */}
            <div className="absolute -inset-10 -z-20 bg-gradient-to-tr from-blue-500/15 via-transparent to-orange-500/15 rounded-full blur-[80px] opacity-90 pointer-events-none" />

            <motion.div
              style={{ y: yParallax, transformStyle: "preserve-3d" as const }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => {
                handleMouseLeave();
                setShowControls(false);
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="group relative flex h-[320px] w-[320px] sm:h-[380px] sm:w-[380px] md:h-[440px] md:w-[440px] lg:h-[465px] lg:w-[465px] items-center justify-center rounded-3xl p-[1.5px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8),_0_20px_50px_-20px_rgba(59,130,246,0.15),_0_20px_50px_-20px_rgba(249,115,22,0.15)]"
            >
              {/* Rotating border gradient */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#3b82f6,#f97316,#3b82f6)] animate-[spin_8s_linear_infinite] z-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Inner Frame Container */}
              <div className="relative z-10 w-full h-full bg-slate-950 rounded-[22.5px] overflow-hidden flex items-center justify-center">
                {/* Loading spinner */}
                {isBuffering && (
                  <div className="absolute inset-0 z-35 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
                    <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-blue-500 border-r-transparent border-slate-800"></div>
                  </div>
                )}

                 <video 
                  ref={videoRef}
                  src={`${import.meta.env.BASE_URL}AI-video-new.mp4`} 
                  preload="metadata"
                  autoPlay 
                  playsInline 
                  controls={showControls}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] select-none ${isBuffering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                />

                {/* Custom Mute Toggle Button */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-30 p-2 rounded-xl bg-slate-950/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-slate-900 cursor-pointer shadow-lg"
                  title={isMuted ? "Unmute Video" : "Mute Video"}
                >
                  {isMuted ? <VolumeX className="h-4.5 w-4.5 text-orange-400" /> : <Volume2 className="h-4.5 w-4.5 text-blue-400" />}
                </button>
                
                {/* Premium Moving Light Sweep (Shine Effect) */}
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                  <style>{`
                    @keyframes shine-sweep {
                      0% { left: -150%; }
                      50% { left: -150%; }
                      100% { left: 200%; }
                    }
                    .shine-effect-hero {
                      position: absolute;
                      top: 0;
                      left: -150%;
                      width: 70%;
                      height: 100%;
                      background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0.08) 50%,
                        rgba(255, 255, 255, 0) 100%
                      );
                      transform: skewX(-25deg);
                      animation: shine-sweep 6s ease-in-out infinite;
                    }
                  `}</style>
                  <div className="shine-effect-hero"></div>
                </div>

                {/* Hover Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Replay Video Button */}
          <AnimatePresence>
            {videoEnded && (
              <motion.button
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.45)',
                  borderColor: 'rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReplay}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white transition-all shadow-lg cursor-pointer"
              >
                <RotateCcw className="h-4 w-4" />
                Replay Video
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
