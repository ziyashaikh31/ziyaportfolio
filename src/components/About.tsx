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
        @keyframes achievements-shine {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50%, 100% { transform: translateX(150%) skewX(-12deg); }
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Achievement Card 1 */}
            <motion.div
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(139,92,246,0.15), 0 20px 40px rgba(6,182,212,0.15)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-[1.5px] rounded-[20px] overflow-hidden transition-all duration-300 group flex flex-col h-full bg-slate-950/40 border border-purple-500/10 hover:border-transparent cursor-default"
            >
              {/* Animated Gradient Border using purple -> cyan on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-shift -z-10"></div>
              
              {/* Inner Glass Container */}
              <div className="relative p-6 pr-24 rounded-[18.5px] bg-slate-950/85 backdrop-blur-xl flex flex-col justify-between h-full w-full overflow-hidden">
                
                {/* Left accent vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-400 rounded-l-[18.5px] z-20"></div>

                {/* Shiny Sweep Overlay on hover */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[achievements-shine_1.8s_ease-in-out_infinite] z-25 pointer-events-none"></div>

                {/* Subtle Animated Particles inside card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18.5px]">
                  <motion.div
                    animate={{ y: [-8, 8, -8], x: [-4, 4, -4], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-purple-500/30"
                  />
                  <motion.div
                    animate={{ y: [12, -12, 12], x: [6, -6, 6], opacity: [0.15, 0.45, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-cyan-400/30"
                  />
                </div>

                {/* Radial glow background behind each card */}
                <div className="absolute -inset-10 -z-20 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badge in top-right */}
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[9px] font-mono font-bold text-cyan-400 select-none">
                  2nd Place
                </div>

                {/* Main content elements */}
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/80 border border-purple-500/20 text-white z-10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-5 w-5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-md -z-10 group-hover:bg-purple-500/40 transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-1 select-none">
                    <h4 className="text-sm md:text-base font-bold text-white font-space">
                      University Tech Fest
                    </h4>
                    <p className="text-slate-350 text-xs md:text-sm leading-relaxed">
                      Secured <span className="text-cyan-400 font-extrabold">2nd Place</span> in a University-Level Tech Fest, representing my college.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Achievement Card 2 */}
            <motion.div
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(139,92,246,0.15), 0 20px 40px rgba(6,182,212,0.15)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative p-[1.5px] rounded-[20px] overflow-hidden transition-all duration-300 group flex flex-col h-full bg-slate-950/40 border border-purple-500/10 hover:border-transparent cursor-default"
            >
              {/* Animated Gradient Border using purple -> cyan on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-border-shift -z-10"></div>
              
              {/* Inner Glass Container */}
              <div className="relative p-6 pr-28 rounded-[18.5px] bg-slate-950/85 backdrop-blur-xl flex flex-col justify-between h-full w-full overflow-hidden">
                
                {/* Left accent vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-400 rounded-l-[18.5px] z-20"></div>

                {/* Shiny Sweep Overlay on hover */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:animate-[achievements-shine_1.8s_ease-in-out_infinite] z-25 pointer-events-none"></div>

                {/* Subtle Animated Particles inside card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18.5px]">
                  <motion.div
                    animate={{ y: [-8, 8, -8], x: [-4, 4, -4], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-purple-500/30"
                  />
                  <motion.div
                    animate={{ y: [12, -12, 12], x: [6, -6, 6], opacity: [0.15, 0.45, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full bg-cyan-400/30"
                  />
                </div>

                {/* Radial glow background behind each card */}
                <div className="absolute -inset-10 -z-20 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badge in top-right */}
                <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[9px] font-mono font-bold text-purple-400 select-none">
                  Top 50 / 564
                </div>

                {/* Main content elements */}
                <div className="flex items-start gap-4">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/80 border border-cyan-500/20 text-white z-10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-5 w-5 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md -z-10 group-hover:bg-cyan-500/40 transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-1 select-none">
                    <h4 className="text-sm md:text-base font-bold text-white font-space">
                      Smart India Hackathon
                    </h4>
                    <p className="text-slate-355 text-xs md:text-sm leading-relaxed">
                      Selected among the <span className="text-cyan-400 font-extrabold">Top 50 teams</span> out of <span className="text-cyan-400 font-extrabold">564 teams</span> in the Smart India Hackathon (SIH) Internal Hackathon.
                    </p>
                  </div>
                </div>

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
