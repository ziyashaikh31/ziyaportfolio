import { motion } from 'framer-motion';

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 overflow-hidden antialiased">
      
      {/* Background radial glowing circles & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none z-0"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ x: [-35, 35, -35], y: [-25, 25, -25] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute top-[20%] left-[25%] w-80 h-80 rounded-full bg-blue-500/10 blur-[110px]"
        />
        <motion.div 
          animate={{ x: [35, -35, 35], y: [25, -25, 25] }}
          transition={{ repeat: Infinity, duration: 11, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[25%] w-96 h-96 rounded-full bg-purple-500/10 blur-[110px]"
        />
      </div>

      <div className="relative z-10 max-w-xl text-center space-y-8 select-none">
        
        {/* Floating Space Terminal Illustration */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="mx-auto w-40 h-40 flex items-center justify-center rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
        >
          {/* Internal glows */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/15 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
          
          <svg className="w-16 h-16 text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 17L10 11L4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </motion.div>

        <div className="space-y-4">
          {/* Big glowing error status */}
          <motion.h1 
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="text-8xl font-black font-space tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] animate-pulse"
          >
            404
          </motion.h1>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl sm:text-2xl font-black font-space text-white"
          >
            Oops! This page doesn't exist.
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed font-sans font-medium"
          >
            The page you're looking for might have been moved or deleted.
          </motion.p>
        </div>

        {/* Buttons Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xs mx-auto"
        >
          <motion.button
            onClick={handleGoHome}
            whileHover={{ scale: 1.04, boxShadow: "0 0 18px rgba(59,130,246,0.3)" }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-xs font-bold text-white shadow-lg transition-all cursor-pointer"
          >
            Go Home
          </motion.button>
          
          <motion.button
            onClick={handleBack}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-3 rounded-xl bg-slate-900/60 border border-white/10 text-xs font-bold text-slate-300 hover:text-white hover:border-white/15 transition-all cursor-pointer"
          >
            Back
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
