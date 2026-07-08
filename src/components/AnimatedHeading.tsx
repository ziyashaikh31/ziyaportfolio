import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
}

export default function AnimatedHeading({ text }: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse hover coordinates for interactive spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Intersection observer to trigger once
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Scroll dynamics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [-1, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const rotateXSpring = useSpring(rawRotateX, { stiffness: 100, damping: 25 });
  const yParallaxSpring = useSpring(rawY, { stiffness: 100, damping: 25 });

  // Stagger letter reveals
  const letters = Array.from(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.8,
      clipPath: "inset(0% 100% 0% 0%)",
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      filter: "blur(0px)",
      transition: {
        type: "spring" as any,
        stiffness: 80,
        damping: 18
      }
    }
  };

  // Laser beam width sweep
  const laserVariants = {
    hidden: { left: "-5%", opacity: 0 },
    visible: {
      left: "105%",
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 0.2 + letters.length * 0.08,
        ease: "easeInOut" as any,
        delay: 0.15
      }
    }
  };

  // Underline glow spring scale
  const underlineWidth = isHovered ? 170 : 120;
  const springUnderline = useSpring(underlineWidth, { stiffness: 90, damping: 20 });

  // Spotlight radial backdrop blur track coordinates
  const spotlightTemplate = useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(79, 140, 255, 0.18), transparent 85%)`;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-start gap-3 select-none"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px)',
        display: 'inline-block'
      }}
    >
      {/* Interactive mouse spotlight glow & background blur */}
      <motion.div 
        className="absolute inset-0 rounded-2xl pointer-events-none z-0 backdrop-blur-[1px] transition-opacity duration-300"
        style={{
          background: spotlightTemplate,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Main 3D Floating Block */}
      <motion.div
        style={{
          y: yParallaxSpring,
          rotateX: rotateXSpring,
          transformStyle: 'preserve-3d'
        }}
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 100, damping: 22 }}
        className="relative inline-block z-10"
      >
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative text-4xl md:text-5xl lg:text-[64px] font-black font-space leading-tight tracking-[-1px] text-white flex flex-wrap"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* Glowing Outline & Color Wave Overlay (shows only on hover) */}
          <motion.span
            className="absolute inset-0 pointer-events-none select-none font-black font-space text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text"
            style={{
              WebkitTextStroke: "0.5px rgba(79, 140, 255, 0.45)",
              backfaceVisibility: 'hidden'
            }}
            animate={{
              opacity: isHovered ? 0.9 : 0,
              y: isHovered ? -1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {text}
          </motion.span>
        </motion.h2>

        {/* Laser Scanning Line */}
        {inView && (
          <motion.div
            variants={laserVariants}
            initial="hidden"
            animate="visible"
            className="absolute top-0 bottom-0 w-[4px] bg-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.95),0_0_30px_rgba(79,140,255,0.85)] z-20 pointer-events-none"
          >
            {/* Particle trail */}
            <div className="absolute top-1/4 -left-1.5 w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping opacity-60"></div>
            <div className="absolute top-1/2 -left-2 w-1.5 h-1.5 rounded-full bg-blue-300 animate-ping opacity-50" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-3/4 -left-1 w-1 h-1 rounded-full bg-cyan-200 animate-ping opacity-75" style={{ animationDelay: '0.4s' }}></div>
          </motion.div>
        )}
      </motion.div>

      {/* Animated Underline beam using Framer Motion spring width */}
      <motion.div
        style={{
          width: springUnderline,
          height: '5px',
          borderRadius: '9999px',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)'
        }}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 z-10"
      />
    </div>
  );
}
