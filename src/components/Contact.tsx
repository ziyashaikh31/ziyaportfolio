import { useState, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

// Custom premium glass info card with hover tilt, spotlight tracking and lift
function GlassInfoCard({ 
  icon, 
  title, 
  value, 
  onClick, 
  href, 
  glowColor = "rgba(79, 140, 255, 0.15)" 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  onClick?: () => void; 
  href?: string; 
  glowColor?: string; 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    const factorX = (y / height - 0.5) * 6;
    const factorY = (x / width - 0.5) * -6;
    tiltX.set(factorX);
    tiltY.set(factorY);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
    setIsHovered(false);
  }

  const transformTemplate = useMotionTemplate`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${isHovered ? "-8px" : "0px"})`;
  const spotlightTemplate = useMotionTemplate`radial-gradient(130px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

  const CardContent = () => (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{ transform: transformTemplate, transformStyle: "preserve-3d" as const }}
      whileTap={{ scale: 0.96 }}
      className="relative p-[1.2px] rounded-2xl overflow-hidden group shadow-2xl transition-all duration-300 bg-[rgba(16,20,40,0.55)] border border-white/5 backdrop-blur-xl"
    >
      {/* Animated neon border outline */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
      <div className="absolute inset-[1.2px] bg-[#0c0f1e]/90 rounded-[15px] z-10 pointer-events-none"></div>

      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
        style={{ background: spotlightTemplate }}
      />

      <div className="relative z-30 flex items-center gap-4.5 p-5" style={{ transform: "translateZ(15px)" }}>
        {/* Glowing rounded square icon wrapper */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.25)] group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-left">
          <p className="text-[10px] text-slate-500 font-bold tracking-wider font-mono uppercase leading-none">{title}</p>
          <p className="text-sm font-extrabold text-slate-300 mt-2 font-sans leading-none">{value}</p>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        <CardContent />
      </a>
    );
  }

  return (
    <div onClick={onClick} className="w-full cursor-pointer">
      <CardContent />
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ziyashaikh3131@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMsg('Please enter a subject.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your message.');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMsg('EmailJS credentials are not configured in environment variables.');
      return;
    }

    setStatus('sending');

    // Ensure EmailJS is initialized with the Public Key
    emailjs.init(publicKey);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log('EmailJS Success:', res.status, res.text);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setStatus('idle');
        }, 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error sending message:', error);
        setStatus('error');
        const displayMsg = error?.text || error?.message || JSON.stringify(error) || 'Unknown error occurred.';
        setErrorMsg(`Failed to send message: ${displayMsg}`);
      });
  };

  // Button Animation variants (shake on error, morph green on success)
  const buttonVariants = {
    idle: { scale: 1 },
    sending: { scale: 0.98 },
    success: { scale: 1.02 },
    error: { x: [0, -10, 10, -10, 10, -5, 5, 0] }
  };

  // Stagger entry configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as any } }
  };

  return (
    <section id="contact" className="relative px-6 py-28 md:px-8 bg-slate-950/20 overflow-hidden">
      
      {/* CSS custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50%, 100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}} />

      {/* Grid overlay remains visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      {/* Layered Premium Background elements (Blurred blue/purple radial glow, cyan ambient) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [-40, 40, -40], y: [-30, 30, -30] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-blue-600/10 blur-[130px]"
        />
        <motion.div 
          animate={{ x: [40, -40, 40], y: [30, -30, 30] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-cyan-500/5 blur-[140px]"
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Title (Glow, Underline & Fade-up) */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center mb-20 select-none"
        >
          <h2 className="text-4xl md:text-5xl font-black font-space tracking-tight text-white drop-shadow-[0_2px_15px_rgba(59,130,246,0.25)]">
            GET IN TOUCH
          </h2>
          <div className="h-[3px] w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-4 shadow-[0_0_12px_rgba(139,92,246,0.5)] animate-[pulse_2s_infinite]"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch max-w-6xl mx-auto w-full"
        >
          
          {/* LEFT (lg:col-span-5): Premium Hero Layout */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 text-left"
          >
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-5xl font-black font-space text-white tracking-tight leading-[1.1] md:leading-[1.05]">
                Let's Build Something <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-pulse">Amazing</span> Together.
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed font-medium font-sans">
                Interested in DevOps, Cloud, Automation, or collaboration? 
                Feel free to reach out. I'm always open to internships, freelance work, exciting projects, and networking.
              </p>
 
              {/* 3 Premium Glass Cards */}
              <div className="mt-8 space-y-4">
                
                {/* Email Card (Clicks to copy) */}
                <div className="relative">
                  <GlassInfoCard 
                    icon={<Mail className="h-5 w-5" />}
                    title="Email (Click to copy)"
                    value="ziyashaikh3131@gmail.com"
                    onClick={handleCopyEmail}
                    glowColor="rgba(59, 130, 246, 0.18)"
                  />
                  {/* Copy Alert Tooltip */}
                  <AnimatePresence>
                    {copied && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded bg-blue-500 text-[10px] font-mono font-bold text-white shadow-md z-45"
                      >
                        Copied!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Location Card (Opens Maps) */}
                <GlassInfoCard 
                  icon={<MapPin className="h-5 w-5" />}
                  title="Location"
                  value="Pune, Maharashtra"
                  href="https://maps.google.com/?q=Pune,Maharashtra,India"
                  glowColor="rgba(16, 185, 129, 0.18)"
                />

                {/* Instagram Card (Opens Instagram Profile) */}
                <GlassInfoCard 
                  icon={<InstagramIcon className="h-5 w-5" />}
                  title="Instagram"
                  value="@mr_ziyxx_18"
                  href="https://instagram.com/mr_ziyxx_18"
                  glowColor="rgba(244, 63, 94, 0.18)"
                />
              </div>

              {/* Rounded social buttons with animated gradient borders */}
              <div className="flex items-center gap-4 pt-6">
                {[
                  { href: "https://github.com", icon: <GithubIcon className="h-5 w-5" />, label: "GitHub" },
                  { href: "https://linkedin.com", icon: <LinkedinIcon className="h-5 w-5" />, label: "LinkedIn" },
                  { href: "https://instagram.com/mr_ziyxx_18", icon: <InstagramIcon className="h-5 w-5" />, label: "Instagram" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="relative flex h-11 w-11 items-center justify-center rounded-full overflow-hidden p-[1.5px] group shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 group-hover:animate-[spin_4s_linear_infinite] transition-opacity duration-300 pointer-events-none"></div>
                    <div className="w-full h-full rounded-full bg-[#070b15] flex items-center justify-center text-slate-400 group-hover:text-white transition-colors z-10">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>

            </div>
          </motion.div>

          {/* RIGHT (lg:col-span-7): Floating Glass Panel Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Form wrapper (Floating glass panel, rounded 32px, glass blur, soft shadow, animated gradient border) */}
            <div className="relative rounded-[32px] overflow-hidden p-[1.5px] shadow-2xl h-full flex flex-col justify-between bg-slate-950/60 backdrop-blur-2xl border border-white/5 group">
              
              {/* Subtle shifting radial background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_70%_75%,rgba(139,92,246,0.06),transparent_50%)] pointer-events-none z-0"></div>

              {/* Shifting background gradient line border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 pointer-events-none z-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "center" }}></div>
              <div className="absolute inset-[1.2px] bg-[#070b15]/95 rounded-[31px] z-10 pointer-events-none"></div>

              {/* Top Right Glowing Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/15 rounded-full blur-3xl pointer-events-none z-20 animate-pulse"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-7 p-8 md:p-10 flex flex-col justify-between h-full flex-grow">
                
                {/* Input Fields with Floating Labels */}
                <div className="space-y-6 flex-grow">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="relative flex flex-col pt-3.5 z-20">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        disabled={status === 'sending' || status === 'success'}
                        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder-transparent transition-all focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 disabled:opacity-50"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute left-4 top-1 text-[10px] font-bold text-slate-500 select-none transition-all peer-placeholder-shown:top-7.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative flex flex-col pt-3.5 z-20">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        disabled={status === 'sending' || status === 'success'}
                        className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder-transparent transition-all focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 disabled:opacity-50"
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute left-4 top-1 text-[10px] font-bold text-slate-500 select-none transition-all peer-placeholder-shown:top-7.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                      >
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="relative flex flex-col pt-3.5 z-20">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=" "
                      disabled={status === 'sending' || status === 'success'}
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder-transparent transition-all focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 disabled:opacity-50"
                    />
                    <label 
                      htmlFor="subject" 
                      className="absolute left-4 top-1 text-[10px] font-bold text-slate-500 select-none transition-all peer-placeholder-shown:top-7.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                    >
                      Subject
                    </label>
                  </div>

                  <div className="relative flex flex-col pt-3.5 z-20">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      disabled={status === 'sending' || status === 'success'}
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white placeholder-transparent transition-all focus:border-blue-500 focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-blue-500/50 disabled:opacity-50 resize-none"
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute left-4 top-1 text-[10px] font-bold text-slate-500 select-none transition-all peer-placeholder-shown:top-7.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-400 peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                    >
                      Message
                    </label>
                  </div>
                </div>

                {/* Feedback notifications */}
                <AnimatePresence mode="wait">
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-1 text-rose-400 text-xs font-semibold pt-2"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 animate-bounce" />
                        Failed to send message. Please try again.
                      </div>
                      <span className="text-[10px] text-rose-500/85 font-mono ml-6">{errorMsg}</span>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 text-emerald-400 text-xs font-semibold pt-2"
                    >
                      <CheckCircle2 className="h-4 w-4 animate-[pulse_1.5s_infinite]" />
                      Message sent successfully!
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button with morph & sweep shine animations */}
                <div className="pt-4 mt-auto relative">
                  <motion.button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    variants={buttonVariants}
                    animate={status}
                    transition={status === 'error' ? { duration: 0.4 } : { type: "spring", stiffness: 200, damping: 20 }}
                    className={`relative flex w-full items-center justify-center gap-2 rounded-xl py-4 text-sm font-black text-white shadow-xl transition-all cursor-pointer overflow-hidden ${
                      status === 'success' 
                        ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                        : status === 'error' 
                        ? 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)]' 
                        : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]'
                    }`}
                  >
                    {/* Glass reflection sweep */}
                    <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full animate-[shine_4s_ease-in-out_infinite] z-20 pointer-events-none"></div>

                    {status === 'sending' ? (
                      <div className="flex items-center gap-2 z-10">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending...
                      </div>
                    ) : status === 'success' ? (
                      <div className="flex items-center gap-2 z-10">
                        <CheckCircle2 className="h-4 w-4" />
                        Message Sent!
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 z-10">
                        <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </div>

              </form>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
