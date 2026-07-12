import { useState } from 'react';
import { motion } from 'framer-motion';
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

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-4xl relative z-10 space-y-14"
      >
        {/* Section Header */}
        <div className="select-none text-left">
          <AnimatedHeading text="About Me" />
        </div>

        {/* About Me content */}
        <motion.div
          variants={panelVariants}
          className="space-y-5 text-slate-350 text-base md:text-[17px] leading-relaxed font-sans font-medium text-left"
        >
          <p>
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">Shaikh Ziya</span>, an MCA student at <span className="text-white font-semibold">JSPM University</span> and an aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-bold">DevOps Engineer</span>. I enjoy building practical projects and continuously learning modern cloud and DevOps technologies through hands-on experience.
          </p>
          <p>
            I completed my internship at <span className="text-purple-400 font-bold">KasNet Technologies Pvt. Ltd.</span>, where I gained practical exposure to Microsoft Azure and real-world cloud environments. This experience strengthened my understanding of industry practices and modern technologies.
          </p>
          <p>
            My goal is to build reliable, scalable, and efficient cloud solutions while continuously improving my technical knowledge and contributing to real-world DevOps projects.
          </p>
        </motion.div>

        {/* Achievements Subsection */}
        <motion.div variants={itemVariants} className="space-y-4 text-left pt-2">
          <h3 className="text-base font-black font-space text-white uppercase tracking-wider">Achievements</h3>
          <ul className="space-y-4 pl-1">
            <li className="flex items-start gap-3.5 text-slate-350 text-[14px] leading-relaxed">
              <span className="text-lg shrink-0 select-none">🥈</span>
              <span>Secured <strong className="text-white font-semibold">2nd Place</strong> in a University-Level Tech Fest, representing my college.</span>
            </li>
            <li className="flex items-start gap-3.5 text-slate-350 text-[14px] leading-relaxed">
              <span className="text-lg shrink-0 select-none">🚀</span>
              <span>Selected among the <strong className="text-white font-semibold">Top 50 teams</strong> out of 564 teams in the Smart India Hackathon (SIH) Internal Hackathon.</span>
            </li>
          </ul>
        </motion.div>

        {/* Microsoft Certifications Subsection */}
        <motion.div variants={itemVariants} className="space-y-4 text-left pt-2">
          <h3 className="text-base font-black font-space text-white uppercase tracking-wider">Microsoft Certifications</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 pl-1">
            {[
              "Microsoft Certified: Azure Fundamentals (AZ-900)",
              "Microsoft Certified: Azure AI Fundamentals (AI-900)",
              "Microsoft Certified: Azure Data Fundamentals (DP-900)",
              "Microsoft Certified: Power Platform Fundamentals (PL-900)"
            ].map((cert, index) => (
              <li key={index} className="flex items-start gap-3 text-slate-355 text-[14px] leading-relaxed">
                <span className="text-cyan-400 font-bold shrink-0 select-none">✓</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>
    </section>
  );
}
