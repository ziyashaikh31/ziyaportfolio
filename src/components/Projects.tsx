import { useRef, useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, useTransform } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';

interface Project {
  title: string;
  description: string;
  status: 'In Progress' | 'Coming Soon';
  gradient: string;
  statusBg: string;
  statusColor: string;
}

const projects: Project[] = [
  {
    title: "Linux Automation Scripts",
    description: "Building Bash scripts for user management, backups, process monitoring, and task automation.",
    status: "In Progress",
    gradient: "from-blue-600/20 via-blue-500/5 to-transparent",
    statusBg: "bg-blue-500/10 border-blue-500/20",
    statusColor: "text-blue-400"
  },
  {
    title: "AWS Cloud Infrastructure",
    description: "Deploying secure cloud infrastructure using AWS EC2, IAM, VPC, Security Groups, and Load Balancers.",
    status: "Coming Soon",
    gradient: "from-purple-600/20 via-purple-500/5 to-transparent",
    statusBg: "bg-purple-500/10 border-purple-500/20",
    statusColor: "text-purple-400"
  },
  {
    title: "Docker Containerization",
    description: "Containerizing applications using Docker and Docker Compose.",
    status: "In Progress",
    gradient: "from-cyan-600/20 via-cyan-500/5 to-transparent",
    statusBg: "bg-cyan-500/10 border-cyan-500/20",
    statusColor: "text-cyan-400"
  },
  {
    title: "Kubernetes Deployment",
    description: "Deploying and managing containerized applications using Kubernetes.",
    status: "Coming Soon",
    gradient: "from-indigo-600/20 via-indigo-500/5 to-transparent",
    statusBg: "bg-indigo-500/10 border-indigo-500/20",
    statusColor: "text-indigo-400"
  },
  {
    title: "CI/CD Pipeline",
    description: "Building automated CI/CD pipelines using GitHub Actions and Jenkins.",
    status: "Coming Soon",
    gradient: "from-pink-600/20 via-pink-500/5 to-transparent",
    statusBg: "bg-pink-500/10 border-pink-500/20",
    statusColor: "text-pink-400"
  },
  {
    title: "Infrastructure Automation",
    description: "Automating server provisioning and configuration using Ansible and Terraform.",
    status: "Coming Soon",
    gradient: "from-orange-600/20 via-orange-500/5 to-transparent",
    statusBg: "bg-orange-500/10 border-orange-500/20",
    statusColor: "text-orange-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 20 } }
};

function getImagePath(title: string) {
  const base = import.meta.env.BASE_URL;
  switch (title) {
    case "Linux Automation Scripts":
      return `${base}linux_automation_v2.jpg`;
    case "AWS Cloud Infrastructure":
      return `${base}aws_infrastructure_v2.jpg`;
    case "Docker Containerization":
      return `${base}docker_containerization_v2.jpg`;
    case "Kubernetes Deployment":
      return `${base}kubernetes_deployment_v2.jpg`;
    case "CI/CD Pipeline":
      return `${base}cicd_pipeline_v2.jpg`;
    case "Infrastructure Automation":
      return `${base}infrastructure_automation_v2.jpg`;
    default:
      return "";
  }
}

// Global cinematic floating dust particles overlay
function FloatingDustParticles({ count = 3 }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.circle
          key={i}
          cx={30 + i * 55 + Math.random() * 15}
          cy={25 + Math.random() * 50}
          r={0.7 + Math.random() * 0.6}
          fill="rgba(255,255,255,0.3)"
          animate={{
            y: [-3, 3, -3],
            x: [-2, 2, -2],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
}

// Project specific animated HUD layers overlaying the original JPEGs
function ProjectOverlay({ title }: { title: string }) {
  switch (title) {
    case "Linux Automation Scripts":
      return (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 112">
          <FloatingDustParticles count={3} />
          {/* Pulsing server indicators on bottom-left rack elements */}
          <motion.circle cx="45" cy="52" r="1.2" fill="#22c55e" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity }} />
          <motion.circle cx="50" cy="52" r="1.2" fill="#22c55e" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
          <motion.circle cx="55" cy="52" r="1.2" fill="#ef4444" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
        </svg>
      );
    case "AWS Cloud Infrastructure":
      return (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 112">
          <FloatingDustParticles count={3} />
          {/* Animated data flow connections linking central cloud elements */}
          <motion.path 
            d="M50 48 L100 28 L150 48" 
            stroke="rgba(249,115,22,0.35)" 
            strokeWidth="0.8" 
            strokeDasharray="4 6" 
            animate={{ strokeDashoffset: [40, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }} 
          />
        </svg>
      );
    case "Docker Containerization":
      return (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 112">
          <FloatingDustParticles count={3} />
          {/* Pulsing cyan sonar ring over microservices containers */}
          <motion.circle 
            cx="100" cy="48" r="8" stroke="rgba(6,182,212,0.35)" strokeWidth="0.8" fill="none" 
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} 
          />
        </svg>
      );
    case "Kubernetes Deployment":
      return (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 112">
          <FloatingDustParticles count={3} />
          {/* Pulsing purple cluster nodes waves */}
          <motion.circle 
            cx="100" cy="55" r="11" stroke="rgba(139,92,246,0.35)" strokeWidth="0.8" fill="none" 
            animate={{ scale: [1, 1.9], opacity: [0.5, 0] }} 
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} 
          />
        </svg>
      );
    case "CI/CD Pipeline":
      return (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 112">
          <FloatingDustParticles count={3} />
          {/* Deploy conveyor paths moving dots */}
          <motion.path 
            d="M40 56 H160" 
            stroke="rgba(236,72,153,0.35)" 
            strokeWidth="0.8" 
            strokeDasharray="8 25" 
            animate={{ strokeDashoffset: [66, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
          />
        </svg>
      );
    case "Infrastructure Automation":
      return (
        <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 200 112">
          <FloatingDustParticles count={3} />
          {/* Provisioning indicators */}
          <motion.circle cx="68" cy="60" r="1.5" fill="#f97316" animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.8, repeat: Infinity }} />
          <motion.circle cx="132" cy="60" r="1.5" fill="#f97316" animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }} />
        </svg>
      );
    default:
      return null;
  }
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse track coordinate state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    // 3D Perspective rotation
    const factorX = (y / height - 0.5) * 6;
    const factorY = (x / width - 0.5) * -6;
    tiltX.set(factorX);
    tiltY.set(factorY);
  }

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
    setIsHovered(false);
  }

  // Cards float up 3px on hover directly inside the hardware-accelerated transform
  const transformTemplate = useMotionTemplate`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${isHovered ? "-3px" : "0px"})`;
  const spotlightTemplate = useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, rgba(79, 140, 255, 0.08), transparent 80%)`;

  // Dynamic parallax layers (Opposing shift direction for image vs. HUD overlay)
  const imgParallaxX = useTransform(mouseX, [0, 300], [-3, 3]);
  const imgParallaxY = useTransform(mouseY, [0, 180], [-2, 2]);
  const hudParallaxX = useTransform(mouseX, [0, 300], [2, -2]);
  const hudParallaxY = useTransform(mouseY, [0, 180], [1.5, -1.5]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      variants={itemVariants}
      style={{ transform: transformTemplate, transformStyle: "preserve-3d" as const }}
      whileHover={{ 
        borderColor: 'rgba(79, 140, 255, 0.25)',
        boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.12)'
      }}
      className="relative flex flex-col h-full rounded-[20px] border border-white/5 bg-slate-900/25 overflow-hidden backdrop-blur-sm transition-all duration-[600ms] group select-none"
    >
      {/* Interactive mouse spotlight lens overlay */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
        style={{ background: spotlightTemplate }}
      />

      {/* Image Wrapper (16:9 Aspect Ratio with Parallax offsets) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[19px] border-b border-white/5 z-0 origin-center">
        {/* Soft edge ambient borders (blue & purple) */}
        <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/20 shadow-[inset_0_0_15px_rgba(139,92,246,0.15)] group-hover:shadow-[inset_0_0_25px_rgba(79,140,255,0.25)] transition-all duration-[600ms] z-20 pointer-events-none rounded-t-[19px]"></div>
        
        {/* Dark cinematic vignette overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,7,15,0.7)_100%)] mix-blend-multiply z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Glass reflection shine moving left-to-right every 8 seconds */}
        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full animate-[shine_8s_ease-in-out_infinite] z-20 pointer-events-none"></div>

        {/* The Original Illustration Image (enhanced with 3% brightness, 5% saturation, zoom) */}
        <motion.div
          style={{ x: imgParallaxX, y: imgParallaxY }}
          animate={isHovered ? { scale: 1.06 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full origin-center"
        >
          <img 
            src={getImagePath(project.title)} 
            alt={project.title} 
            className="w-full h-full object-cover brightness-[1.03] saturate-[1.05] contrast-[1.02] filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Interactive HUD Overlay with dynamic animations */}
        <motion.div
          style={{ x: hudParallaxX, y: hudParallaxY }}
          className="absolute inset-0 w-full h-full z-15 origin-center pointer-events-none"
        >
          <ProjectOverlay title={project.title} />
        </motion.div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-grow p-6 justify-between z-10" style={{ transform: "translateZ(15px)" }}>
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200 font-space leading-snug">
              {project.title}
            </h3>
            <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-semibold tracking-wider uppercase shrink-0 ${project.statusBg} ${project.statusColor}`}>
              {project.status}
            </span>
          </div>
          
          <p className="text-sm text-slate-450 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-8 bg-slate-950/30 overflow-hidden">
      {/* Dynamic Keyframes for Shine Sweep */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50%, 100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}} />

      {/* Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 select-none">
          <AnimatedHeading text="Projects Under Development" />
          <p className="mt-6 text-slate-400 font-medium text-sm md:text-base max-w-2xl text-center leading-relaxed font-sans">
            I am actively building real-world DevOps and Cloud projects. This section will be updated as each project is completed and deployed.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>


      </div>
    </section>
  );
}
