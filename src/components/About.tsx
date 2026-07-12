import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0 });

  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCardMousePos({
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleSectionMouseMove}
      className="relative px-6 py-24 md:px-8 bg-slate-950/20 overflow-hidden"
    >
      {/* Premium Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none z-0"></div>

      {/* Shifting Grid Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes border-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-border-shift {
          background-size: 200% 200%;
          animation: border-gradient-shift 8s ease infinite;
        }
      `}} />

      {/* Mouse Track Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-25 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.03), rgba(6, 182, 212, 0.02), transparent 70%)`
        }}
      />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="mx-auto max-w-4xl relative z-10 space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="select-none text-left">
          <AnimatedHeading text="About Me" />
        </motion.div>

        {/* 1. About Me Premium Glass Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            y: -4,
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.2)"
          }}
          onMouseMove={handleCardMouseMove}
          className="relative p-[1.5px] rounded-3xl overflow-hidden transition-all duration-300 group/about"
        >
          {/* Animated Gradient Border Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-40 group-hover/about:opacity-100 transition-opacity duration-300 animate-border-shift -z-10"></div>
          
          {/* Main Content Pane */}
          <div className="relative p-6 md:p-9 rounded-[22.5px] bg-slate-950/85 backdrop-blur-xl text-slate-300 text-base md:text-[17px] leading-loose font-sans font-medium text-left overflow-hidden">
            
            {/* Radial Mouse Tracker light */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover/about:opacity-100 transition-opacity duration-300 -z-10"
              style={{
                background: `radial-gradient(450px circle at ${cardMousePos.x}px ${cardMousePos.y}px, rgba(59, 130, 246, 0.06), rgba(139, 92, 246, 0.04), transparent 80%)`
              }}
            />

            <div className="space-y-6">
              <p>
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold">Shaikh Ziya</span>, an MCA student at JSPM University and an aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold">DevOps Engineer</span>. I enjoy building practical projects and continuously learning modern cloud and DevOps technologies through hands-on experience.
              </p>
              <p>
                I completed my internship at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-450 to-blue-400 font-extrabold">KasNet Technologies Pvt. Ltd.</span>, where I gained practical exposure to Microsoft Azure and real-world cloud environments. During my internship, I earned Microsoft certifications including Azure Fundamentals (AZ-900), Azure AI Fundamentals (AI-900), Azure Data Fundamentals (DP-900), and Power Platform Fundamentals (PL-900), strengthening my foundation in cloud, AI, and data technologies.
              </p>
              <p>
                My goal is to build reliable, scalable, and efficient cloud solutions while continuously improving my technical knowledge and contributing to real-world DevOps projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 2. Achievements Grid (Side-by-Side Compact Glass Cards) */}
        <motion.div 
          variants={itemVariants} 
          className="space-y-6 text-left"
        >
          <h3 className="text-lg font-bold font-space text-white tracking-wide border-b border-white/5 pb-2">Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Achievement Card 1 */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(59, 130, 246, 0.25)", boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.15)" }}
              className="relative p-5 rounded-[16px] bg-slate-950/40 border border-blue-500/10 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/40 rounded-tl-[16px]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500/40 rounded-br-[16px]"></div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.15)] shrink-0">
                <Trophy className="h-4.5 w-4.5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-space">
                  University Tech Fest
                </h4>
                <p className="text-slate-350 text-xs leading-relaxed">
                  Secured 2nd Place in a University-Level Tech Fest, representing my college.
                </p>
              </div>
            </motion.div>

            {/* Achievement Card 2 */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(139, 92, 246, 0.25)", boxShadow: "0 15px 30px -10px rgba(139, 92, 246, 0.15)" }}
              className="relative p-5 rounded-[16px] bg-slate-950/40 border border-purple-500/10 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-500/40 rounded-tl-[16px]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-500/40 rounded-br-[16px]"></div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_12px_rgba(139,92,246,0.15)] shrink-0">
                <Rocket className="h-4.5 w-4.5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white font-space">
                  Smart India Hackathon
                </h4>
                <p className="text-slate-355 text-xs leading-relaxed">
                  Selected among the Top 50 teams out of 564 teams in the Smart India Hackathon (SIH) Internal Hackathon.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </motion.div>

      {/* Bottom section divider line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.1)]"></div>
    </section>
  );
}
