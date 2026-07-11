import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Target, Cpu, Cloud, Settings, GitBranch, Play, Compass, Layers } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: React.ReactNode;
  color: string;
  category: string;
  description: string;
}

const nodes: Node[] = [
  // Development & Code Integration (Left Side)
  { id: "linux", label: "Linux", x: 280, y: 160, icon: <Terminal className="h-4.5 w-4.5 text-blue-400" />, color: "#3b82f6", category: "OS Core", description: "The operating system foundation for hosting cloud workloads, containers, and pipelines." },
  { id: "git", label: "Git", x: 300, y: 300, icon: <GitBranch className="h-4.5 w-4.5 text-red-450" />, color: "#ef4444", category: "Version Control", description: "Distributed Version Control System managing code commits, branching, and merges." },
  { id: "shell", label: "Shell Scripting", x: 280, y: 440, icon: <Terminal className="h-4.5 w-4.5 text-yellow-400" />, color: "#eab308", category: "Automation", description: "Bash scripting automating daily administration tasks and local job scheduling." },
  { id: "github", label: "GitHub", x: 120, y: 160, icon: <Cloud className="h-4.5 w-4.5 text-rose-450" />, color: "#fb7185", category: "Code Collaboration", description: "Hosting repository platform enabling code reviews, issues, and Git workflows." },
  { id: "jenkins", label: "Jenkins", x: 120, y: 300, icon: <Play className="h-4.5 w-4.5 text-emerald-400" />, color: "#34d399", category: "Continuous Integration", description: "Build server automating application compilation, unit testing, and script runs." },
  { id: "cicd", label: "CI/CD", x: 120, y: 440, icon: <Cpu className="h-4.5 w-4.5 text-purple-400" />, color: "#c084fc", category: "Automation Pipeline", description: "Pipelining standards integrating builds and deployments automatically for delivery." },

  // Cloud & Deployment Operations (Right Side)
  { id: "aws", label: "AWS", x: 720, y: 160, icon: <Cloud className="h-4.5 w-4.5 text-orange-400" />, color: "#fb923c", category: "Cloud Platform", description: "Amazon Web Services infrastructure hosting servers, databases, and private networking." },
  { id: "docker", label: "Docker", x: 700, y: 300, icon: <Layers className="h-4.5 w-4.5 text-cyan-405" />, color: "#22d3ee", category: "Containerization", description: "Standard container runtime packaging apps with dependencies for portability." },
  { id: "ansible", label: "Ansible", x: 720, y: 440, icon: <Settings className="h-4.5 w-4.5 text-pink-400" />, color: "#f472b6", category: "Configuration Mgmt", description: "Agentless automation orchestrating server setups and configuration standards." },
  { id: "terraform", label: "Terraform", x: 880, y: 160, icon: <Compass className="h-4.5 w-4.5 text-violet-400" />, color: "#a78bfa", category: "Infrastructure as Code", description: "IaC platform declaring, versioning, and building immutable cloud architectures." },
  { id: "kubernetes", label: "Kubernetes", x: 880, y: 300, icon: <Settings className="h-4.5 w-4.5 text-indigo-400" />, color: "#818cf8", category: "Orchestration", description: "Container orchestration automating clusters, load balancing, and self-healing systems." },
  { id: "monitoring", label: "Monitoring", x: 880, y: 440, icon: <Target className="h-4.5 w-4.5 text-teal-400" />, color: "#2dd4bf", category: "Observability", description: "Alerting systems monitoring CPU loads, network payloads, and error outputs." }
];

interface Edge {
  from: string;
  to: string;
  dashed?: boolean;
}

const edges: Edge[] = [
  // Connections to core Devops hub
  { from: "linux", to: "core" },
  { from: "git", to: "core" },
  { from: "shell", to: "core" },
  { from: "github", to: "core" },
  { from: "jenkins", to: "core" },
  { from: "cicd", to: "core" },
  { from: "aws", to: "core" },
  { from: "docker", to: "core" },
  { from: "ansible", to: "core" },
  { from: "terraform", to: "core" },
  { from: "kubernetes", to: "core" },
  { from: "monitoring", to: "core" },

  // Connected pipelines
  { from: "github", to: "git", dashed: true },
  { from: "git", to: "jenkins", dashed: true },
  { from: "jenkins", to: "cicd" },
  { from: "shell", to: "linux" },
  { from: "docker", to: "kubernetes" },
  { from: "terraform", to: "aws" },
  { from: "ansible", to: "aws", dashed: true },
  { from: "kubernetes", to: "monitoring" }
];

const backgroundParticles = [
  { cx: 80, cy: 100, r: 1.5, color: "#3b82f6" },
  { cx: 220, cy: 120, r: 2, color: "#8b5cf6" },
  { cx: 420, cy: 90, r: 1, color: "#06b6d4" },
  { cx: 780, cy: 110, r: 2.5, color: "#10b981" },
  { cx: 920, cy: 200, r: 1, color: "#f97316" },
  { cx: 160, cy: 490, r: 2, color: "#ec4899" },
  { cx: 340, cy: 510, r: 1.5, color: "#3b82f6" },
  { cx: 740, cy: 490, r: 2, color: "#8b5cf6" },
  { cx: 900, cy: 510, r: 1, color: "#06b6d4" },
  { cx: 580, cy: 70, r: 2, color: "#10b981" }
];

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const getNodeCoordinates = (nodeId: string) => {
    if (nodeId === "core") return { x: 500, y: 300 };
    const found = nodes.find(n => n.id === nodeId);
    return found ? { x: found.x, y: found.y } : { x: 0, y: 0 };
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 4rem 4rem; }
        }
        .animate-grid-shift {
          animation: grid-move 30s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .animate-dash-flow {
          animation: dash 3s linear infinite;
        }
      `}} />

      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.04), rgba(139, 92, 246, 0.03), transparent 70%)`
        }}
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-7xl relative z-10"
      >
        {/* Title & Introduction */}
        <div className="max-w-3xl mb-12 select-none">
          <AnimatedHeading text="DevOps Journey & Architecture" />
          <div className="mt-6 space-y-4 text-slate-300 text-base leading-relaxed font-sans">
            <p className="font-semibold text-white text-lg">
              Hi, I'm Shaikh Ziya, an MCA student specializing in Cloud Computing at JSPM University, Pune.
            </p>
            <p>
              I am passionate about DevOps, Cloud Computing, Automation, and modern cloud technologies.
              Below is the interactive mapping of my skillset, demonstrating how code hosting, packaging, pipelines, infrastructure, configuration, and observability stacks integrate to form scalable architectures.
            </p>
          </div>
        </div>

        {/* DevOps Architecture Interactive Panel */}
        <div className="w-full rounded-[24px] border border-white/10 bg-slate-950/40 p-4 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden min-h-[500px] flex items-center justify-center">
          
          <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent pb-4">
            <div className="relative min-w-[960px] max-w-[1000px] mx-auto aspect-[10/6] w-full">
              
              <svg 
                viewBox="0 0 1000 600" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full select-none"
              >
                <defs>
                  {/* Central Node Gradient */}
                  <radialGradient id="coreGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Connection Line Gradient */}
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Background Telemetry Particles */}
                {backgroundParticles.map((pt, i) => (
                  <motion.circle
                    key={i}
                    cx={pt.cx}
                    cy={pt.cy}
                    r={pt.r}
                    fill={pt.color}
                    animate={{
                      opacity: [0.15, 0.7, 0.15],
                      y: [0, -12, 0]
                    }}
                    transition={{
                      duration: 3 + (i % 3) * 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.25
                    }}
                  />
                ))}

                {/* Animated Connection Edges */}
                {edges.map((edge, idx) => {
                  const fromCoord = getNodeCoordinates(edge.from);
                  const toCoord = getNodeCoordinates(edge.to);
                  const isHighlighted = hoveredNode && (hoveredNode.id === edge.from || hoveredNode.id === edge.to);

                  return (
                    <g key={idx}>
                      {/* Underlying Glow Path */}
                      <path
                        d={`M ${fromCoord.x} ${fromCoord.y} L ${toCoord.x} ${toCoord.y}`}
                        stroke={isHighlighted ? hoveredNode.color : "url(#lineGrad)"}
                        strokeWidth={isHighlighted ? 2.5 : 1.5}
                        strokeOpacity={isHighlighted ? 0.9 : 0.25}
                        className={edge.dashed ? "stroke-dasharray-5" : ""}
                        style={{ transition: "stroke 0.4s, stroke-width 0.4s, stroke-opacity 0.4s" }}
                      />
                      {/* Flowing Pulse Packet */}
                      <path
                        d={`M ${fromCoord.x} ${fromCoord.y} L ${toCoord.x} ${toCoord.y}`}
                        stroke={isHighlighted ? hoveredNode.color : "#60a5fa"}
                        strokeWidth={isHighlighted ? 3 : 2}
                        strokeOpacity={isHighlighted ? 0.95 : 0.4}
                        strokeDasharray="10 60"
                        className="animate-dash-flow"
                      />
                    </g>
                  );
                })}

                {/* Core DEVOPS Central Pulse Rings */}
                <motion.circle
                  cx="500"
                  cy="300"
                  r="70"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  filter="url(#nodeGlow)"
                  initial={{ opacity: 0.7, scale: 0.8 }}
                  animate={{ opacity: 0, scale: 1.35 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  cx="500"
                  cy="300"
                  r="70"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="1.5"
                  filter="url(#nodeGlow)"
                  initial={{ opacity: 0.7, scale: 0.8 }}
                  animate={{ opacity: 0, scale: 1.35 }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut", delay: 1.2 }}
                />

                {/* Central Hub Core */}
                <g className="cursor-default select-none">
                  <circle
                    cx="500"
                    cy="300"
                    r="48"
                    fill="#030712"
                    stroke="url(#coreGrad)"
                    strokeWidth="3"
                    filter="url(#nodeGlow)"
                  />
                  <text
                    x="500"
                    y="304"
                    textAnchor="middle"
                    fill="#ffffff"
                    className="font-space font-black text-xs tracking-[0.25em] fill-white"
                  >
                    DEVOPS
                  </text>
                </g>

                {/* Embedded HTML ForeignObject Capsules for Interactive Hovering Nodes */}
                {nodes.map((node) => {
                  const isCurrentHovered = hoveredNode && hoveredNode.id === node.id;
                  
                  return (
                    <foreignObject
                      key={node.id}
                      x={node.x - 70}
                      y={node.y - 22}
                      width="140"
                      height="44"
                      className="overflow-visible"
                    >
                      <motion.div
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-950/90 border transition-all duration-300 shadow-xl cursor-pointer select-none ${
                          isCurrentHovered 
                            ? "border-opacity-100 shadow-[0_0_15px_rgba(59,130,246,0.3)] text-white" 
                            : "border-white/10 text-slate-350 hover:text-white"
                        }`}
                        style={{
                          borderColor: isCurrentHovered ? node.color : "rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        <div className="flex h-5 w-5 items-center justify-center shrink-0">
                          {node.icon}
                        </div>
                        <span className="text-[11px] font-bold font-space tracking-wide truncate">
                          {node.label}
                        </span>
                      </motion.div>
                    </foreignObject>
                  );
                })}
              </svg>

              {/* Glowing Interactive Tooltip Card Overlay (Responsive Coordinate Mapping) */}
              <AnimatePresence>
                {hoveredNode && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 p-4 w-72 rounded-xl bg-slate-950/95 border shadow-[0_0_20px_rgba(59,130,246,0.15)] text-slate-200 pointer-events-none backdrop-blur-md"
                    style={{
                      left: `${hoveredNode.x / 10}%`,
                      top: `${hoveredNode.y / 6}%`,
                      transform: 'translate(-50%, -125%)',
                      borderColor: `${hoveredNode.color}44`
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span 
                        className="text-[9px] uppercase font-bold px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: `${hoveredNode.color}15`,
                          color: hoveredNode.color,
                          borderColor: `${hoveredNode.color}25`
                        }}
                      >
                        {hoveredNode.category}
                      </span>
                      <h5 className="text-xs font-bold text-white font-mono">{hoveredNode.label}</h5>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-400 font-sans font-medium">
                      {hoveredNode.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
