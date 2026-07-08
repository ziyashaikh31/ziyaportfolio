import { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Terminal, Cloud, Cpu, Layers, GitBranch, Play, Settings, Compass, Download, GraduationCap } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

interface Skill {
  name: string;
  level: "Advanced" | "Hands-on" | "Practicing" | "Learning";
  techs: string[];
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  { name: "Linux", level: "Advanced", techs: ["Ubuntu", "Bash", "Shell", "SSH", "Systemd"], icon: <Terminal className="h-5 w-5 text-blue-400" /> },
  { name: "AWS", level: "Hands-on", techs: ["EC2", "IAM", "S3", "VPC", "Security Groups"], icon: <Cloud className="h-5 w-5 text-orange-400" /> },
  { name: "Docker", level: "Practicing", techs: ["Images", "Containers", "Dockerfile", "Compose"], icon: <Layers className="h-5 w-5 text-cyan-400" /> },
  { name: "Kubernetes", level: "Learning", techs: ["Pods", "Deployments", "Services"], icon: <Settings className="h-5 w-5 text-indigo-400" /> },
  { name: "Git & GitHub", level: "Hands-on", techs: ["Git", "GitHub", "Branching", "Merge"], icon: <GitBranch className="h-5 w-5 text-pink-400" /> },
  { name: "Jenkins", level: "Learning", techs: ["Pipelines", "CI/CD", "Automation"], icon: <Play className="h-5 w-5 text-red-400 fill-red-400/10" /> },
  { name: "Terraform", level: "Learning", techs: ["Infrastructure as Code", "AWS"], icon: <Compass className="h-5 w-5 text-purple-400" /> },
  { name: "Python", level: "Practicing", techs: ["Automation", "Scripting"], icon: <Cpu className="h-5 w-5 text-yellow-400" /> }
];

function getStatusBadgeStyles(level: string) {
  if (level === "Advanced") {
    return "bg-[#0B1530] border border-[#3b82f6]/35 text-blue-400";
  } else if (level === "Hands-on") {
    return "bg-[#1C1226] border border-[#f97316]/35 text-orange-400";
  } else if (level === "Practicing") {
    return "bg-[#081E26] border border-[#22d3ee]/35 text-cyan-400";
  } else {
    return "bg-[#180F2E] border border-[#8b5cf6]/35 text-purple-400";
  }
}


function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
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
  }

  const transformTemplate = useMotionTemplate`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  const spotlightTemplate = useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(79, 140, 255, 0.1), transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformTemplate, transformStyle: "preserve-3d" as const }}
      className="relative p-[1.5px] rounded-[24px] overflow-hidden group shadow-2xl select-none w-full h-full min-h-[400px] flex flex-col justify-between transition-all duration-300 border border-white/5"
    >
      <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#4f8cff,#8b5cf6,#4f8cff)] animate-[spin_10s_linear_infinite] opacity-15 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none z-0"></div>

      <div className="relative z-10 p-6 rounded-[22.5px] bg-slate-950/80 backdrop-blur-xl flex flex-col items-center justify-between w-full h-full overflow-hidden flex-grow">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}developer_workspace.jpg`} 
            alt="Workstation Backdrop" 
            className="w-full h-full object-cover opacity-15 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px]"></div>
        </div>

        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
          style={{ background: spotlightTemplate }}
        />

        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-blue-500/5 rounded-full blur-[45px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-28 h-28 bg-purple-500/5 rounded-full blur-[45px] pointer-events-none z-0"></div>

        <div 
          className="relative mt-4 z-20 w-28 h-28 rounded-full p-[2.5px] bg-gradient-to-tr from-blue-500/80 via-purple-500/80 to-cyan-400/80 shadow-[0_0_12px_rgba(79,140,255,0.24)] group-hover:scale-105 transition-transform duration-500"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border border-slate-950/50 bg-slate-900">
            <img 
              src={`${import.meta.env.BASE_URL}profile.jpg`} 
              alt="Shaikh Ziya" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        <div 
          className="space-y-4.5 mt-8 text-center z-20"
          style={{ transform: "translateZ(20px)" }}
        >
          <div className="space-y-1.5">
            <h4 className="text-xl font-black font-space text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Shaikh Ziya
            </h4>
            <p className="text-blue-400 font-bold font-space text-[11px] tracking-wider uppercase drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]">
              Aspiring DevOps Engineer
            </p>
          </div>
          
          <div className="w-10 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full opacity-50"></div>
          
          <p className="text-slate-350 text-[10px] font-semibold font-mono tracking-tight bg-slate-900/60 border border-white/5 px-2.5 py-1 rounded-full backdrop-blur-sm inline-flex items-center gap-1.5 select-none">
            <GraduationCap className="h-3.5 w-3.5 text-purple-450" />
            MCA | JSPM University
          </p>
        </div>

        <div 
          className="w-full mt-auto mb-1 z-20"
          style={{ transform: "translateZ(10px)" }}
        >
          <motion.a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-2.5 text-xs font-bold text-white shadow-[0_0_15px_rgba(79,140,255,0.2)] hover:shadow-[0_0_25px_rgba(79,140,255,0.35)] transition-all cursor-pointer font-sans"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  const cardRef = useRef<HTMLDivElement>(null);
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
  }

  const transformTemplate = useMotionTemplate`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  const spotlightTemplate = useMotionTemplate`radial-gradient(120px circle at ${mouseX}px ${mouseY}px, rgba(79, 140, 255, 0.08), transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformTemplate, transformStyle: "preserve-3d" as const }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 15px 30px -10px rgba(79, 140, 255, 0.15)'
      }}
      className="relative p-[1.2px] rounded-xl border border-[rgba(110,130,255,0.18)] bg-[rgba(16,20,40,0.75)] overflow-hidden transition-all duration-300 group select-none h-full"
    >
      {/* Animated neon border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4f8cff] via-[#8b5cf6] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
      
      <div className="absolute inset-[1px] bg-[#101428] rounded-[11px] z-10 pointer-events-none"></div>

      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
        style={{ background: spotlightTemplate }}
      />

      <div className="relative z-30 space-y-4 p-5 flex flex-col justify-between h-full" style={{ transform: "translateZ(10px)" }}>
        
        {/* Header content: Icon & Name & Status badge */}
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex items-center gap-3">
            {/* Infinite float animation on hover */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/90 border border-white/5 shadow-inner group-hover:animate-[float_3s_ease-in-out_infinite]">
              {skill.icon}
            </div>
            <span className="text-sm sm:text-base font-black text-white font-space tracking-tight leading-none">{skill.name}</span>
          </div>
          
          <span className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full select-none shrink-0 ${getStatusBadgeStyles(skill.level)}`}>
            {skill.level}
          </span>
        </div>

        {/* Technology Chips */}
        <div className="flex flex-wrap gap-1.5 pt-1.5">
          {skill.techs.map((tech, i) => (
            <span key={i} className="text-[10px] font-mono text-slate-450 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md hover:text-white hover:bg-white/10 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <section id="skills" className="relative px-6 py-24 md:px-8 bg-slate-950/20 overflow-hidden">
      
      {/* CSS floating keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Core Header */}
        <div className="relative flex flex-col items-center mb-16 select-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/5 blur-[50px] pointer-events-none z-0"></div>
          <AnimatedHeading text="Skills & Showcase" />
          <p className="mt-6 text-slate-400 font-medium text-sm md:text-base max-w-2xl text-center leading-relaxed font-sans">
            Technologies I use to build, automate, deploy, and manage modern cloud infrastructure.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto w-full"
        >
          
          {/* LEFT (25% / lg:col-span-3): Profile Card */}
          <div className="lg:col-span-3 w-full flex flex-col">
            <ProfileCard />
          </div>

          {/* CENTER/RIGHT (75% / lg:col-span-9): 2-Column Skills Grid */}
          <div className="lg:col-span-9 w-full flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
              {skillsData.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
