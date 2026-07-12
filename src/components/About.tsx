import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Rocket } from 'lucide-react';
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="about" 
      onMouseMove={handleSectionMouseMove}
      className="relative px-6 py-24 md:px-8 bg-slate-950/20 overflow-hidden"
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
        className="mx-auto max-w-4xl relative z-10"
      >
        {/* Section Header */}
        <div className="mb-10 select-none text-left">
          <AnimatedHeading text="About Me" />
        </div>

        {/* About Me Card */}
        <motion.div
          variants={panelVariants}
          whileHover={{ y: -3 }}
          className="relative p-6 md:p-8 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group hover:border-blue-500/20"
        >
          {/* Glowing Corner Accents */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-blue-500/60"></div>
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-500/60"></div>

          <div className="space-y-4 text-slate-350 text-sm md:text-[15px] leading-relaxed font-sans font-medium text-left">
            <p>
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">Shaikh Ziya</span>, an MCA student at <span className="text-white font-semibold">JSPM University</span> and an aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">DevOps Engineer</span>. I enjoy building practical projects and continuously learning modern cloud and DevOps technologies through hands-on experience.
            </p>
            <p>
              I completed my internship at <span className="text-purple-400 font-bold">KasNet Technologies Pvt. Ltd.</span>, where I gained practical exposure to Microsoft Azure and real-world cloud environments. This experience strengthened my understanding of industry practices and modern technologies.
            </p>
            <p>
              My goal is to build reliable, scalable, and efficient cloud solutions while continuously improving my technical knowledge and contributing to real-world DevOps projects.
            </p>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="mt-14 space-y-5 text-left">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              01 // Recognition
            </span>
            <h3 className="text-sm font-black font-space text-white uppercase tracking-wider">Achievements</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech Fest Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group hover:border-blue-500/20"
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500/40"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-purple-500/40"></div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Trophy className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white font-space">University Tech Fest</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Secured 2nd Place in a University-Level Tech Fest, proudly representing my college.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SIH Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl bg-slate-950/45 border border-white/10 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group hover:border-purple-500/20"
            >
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-500/40"></div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-blue-500/40"></div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Rocket className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white font-space">Smart India Hackathon</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Selected among the Top 50 teams out of 564 teams in the Smart India Hackathon (SIH) Internal Hackathon.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={itemVariants} className="mt-14 space-y-5 text-left">
          <div className="flex items-center gap-2 select-none">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              02 // Accreditations
            </span>
            <h3 className="text-sm font-black font-space text-white uppercase tracking-wider">Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Azure Fundamentals", code: "AZ-900" },
              { title: "Azure AI Fundamentals", code: "AI-900" },
              { title: "Azure Data Fundamentals", code: "DP-900" },
              { title: "Power Platform Fundamentals", code: "PL-900" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="relative p-4 rounded-xl bg-slate-900/60 border border-white/5 shadow-sm text-left flex items-center gap-3 transition-colors hover:border-cyan-500/20"
              >
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-slate-400 font-mono tracking-wider">{cert.code}</p>
                  <p className="text-xs font-bold text-white font-sans leading-tight">{cert.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
