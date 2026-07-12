import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Rocket, Award } from 'lucide-react';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
    }
  };

  const certs = [
    { code: "AZ-900", title: "Azure Fundamentals" },
    { code: "AI-900", title: "Azure AI Fundamentals" },
    { code: "DP-900", title: "Azure Data Fundamentals" },
    { code: "PL-900", title: "Power Platform Fundamentals" }
  ];

  return (
    <section 
      id="about" 
      onMouseMove={handleSectionMouseMove}
      className="relative px-6 py-24 md:px-8 bg-slate-950/20 overflow-hidden"
    >
      {/* Background Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1.2px,transparent_1.2px),linear-gradient(to_bottom,#0f172a_1.2px,transparent_1.2px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none z-0"></div>

      {/* Mouse Track Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.03), rgba(6, 182, 212, 0.02), transparent 70%)`
        }}
      />

      {/* Custom Keyframe Animations for Laser pulse and Gradient Shift */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes border-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-border-gradient {
          background-size: 200% 200%;
          animation: border-shift 5s ease infinite;
        }
        @keyframes laser-sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-laser {
          animation: laser-sweep 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}} />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-4xl relative z-10"
      >
        {/* Section Header */}
        <div className="select-none text-left mb-10">
          <AnimatedHeading text="About Me" />
        </div>

        {/* About Card Wrapper (for background blurred aurora glow) */}
        <div className="relative group/about z-10">
          
          {/* Blurred Aurora Glow behind Card */}
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-[30px] blur-3xl opacity-60 group-hover/about:opacity-100 transition-opacity duration-500 pointer-events-none -z-20"></div>

          {/* Animated Blue/Purple Gradient Border Container */}
          <motion.div
            variants={panelVariants}
            whileHover={{ 
              y: -4,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.22)"
            }}
            transition={{ duration: 0.3 }}
            className="relative p-[1.5px] rounded-[20px] overflow-hidden transition-all duration-300"
          >
            {/* Animated Border Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-40 group-hover/about:opacity-100 transition-opacity duration-300 animate-border-gradient -z-10"></div>
            
            {/* Inner Glass Container */}
            <div className="relative p-6 md:p-9 rounded-[18.5px] bg-slate-950/85 backdrop-blur-xl text-slate-300 text-base md:text-[17px] leading-loose font-sans font-medium text-left">
              <div className="space-y-6">
                <p>
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold">Shaikh Ziya</span>, an MCA student at JSPM University and an aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-extrabold">DevOps Engineer</span>. I enjoy building practical projects and continuously learning modern cloud and DevOps technologies through hands-on experience.
                </p>
                <p>
                  I completed my internship at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-450 to-blue-400 font-extrabold">KasNet Technologies Pvt. Ltd.</span>, where I gained practical exposure to Microsoft Azure and real-world cloud environments. This experience strengthened my understanding of industry practices and modern technologies.
                </p>
                <p>
                  My goal is to build reliable, scalable, and efficient cloud solutions while continuously improving my technical knowledge and contributing to real-world DevOps projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thin Animated Gradient Laser Divider */}
        <div className="relative w-full h-[1px] my-12 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent overflow-hidden">
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-85 animate-laser"></div>
        </div>

        {/* Responsive Two-Column Layout */}
        <motion.div 
          variants={itemVariants} 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 text-left"
        >
          {/* Left Column: Achievements */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-space text-white tracking-wide border-b border-white/5 pb-2">Achievements</h3>
            
            <div className="grid grid-cols-1 gap-4">
              
              {/* Achievement Card 1 */}
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.25)", boxShadow: "0 10px 20px -10px rgba(59, 130, 246, 0.15)" }}
                className="relative p-5 rounded-[16px] bg-slate-950/40 border border-blue-500/10 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
              >
                {/* Glowing Corner Accents */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-blue-500/40 rounded-tl-[16px]"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-blue-500/40 rounded-br-[16px]"></div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.1)] shrink-0">
                  <Trophy className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-blue-400 uppercase">Recognition</span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Secured <strong className="text-white font-semibold">2nd Place</strong> in a University-Level Tech Fest, representing my college.
                  </p>
                </div>
              </motion.div>

              {/* Achievement Card 2 */}
              <motion.div
                whileHover={{ y: -3, borderColor: "rgba(139, 92, 246, 0.25)", boxShadow: "0 10px 20px -10px rgba(139, 92, 246, 0.15)" }}
                className="relative p-5 rounded-[16px] bg-slate-950/40 border border-purple-500/10 backdrop-blur-md transition-all duration-300 group flex items-start gap-4"
              >
                {/* Glowing Corner Accents */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-purple-500/40 rounded-tl-[16px]"></div>
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-purple-500/40 rounded-br-[16px]"></div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-[0_0_12px_rgba(139,92,246,0.1)] shrink-0">
                  <Rocket className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-purple-400 uppercase">Innovation</span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Selected among the <strong className="text-white font-semibold">Top 50 teams</strong> out of 564 teams in the Smart India Hackathon (SIH) Internal Hackathon.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Microsoft Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-space text-white tracking-wide border-b border-white/5 pb-2">Microsoft Certifications</h3>
            
            <div className="flex flex-wrap gap-3.5 pt-2">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(6, 182, 212, 0.2)" }}
                  className="relative p-[1px] rounded-full overflow-hidden bg-gradient-to-r from-blue-500/25 via-indigo-500/20 to-purple-500/25 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 group/pill"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-xs font-mono font-bold text-slate-300 hover:text-white transition-colors duration-300 cursor-default">
                    <Award className="h-3.5 w-3.5 text-cyan-400 group-hover/pill:text-cyan-300 transition-colors" />
                    <span>{cert.code}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom section glowing divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.1)]"></div>
    </section>
  );
}
