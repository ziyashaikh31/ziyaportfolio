import { motion } from 'framer-motion';

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

const WhatsappIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.004 2C6.48 2 2.002 6.477 2.002 12c0 1.891.526 3.66 1.439 5.176L2 22l5.003-1.314c1.467.828 3.153 1.314 4.996 1.314 5.527 0 10.005-4.477 10.005-10S17.531 2 12.004 2zm0 1.636c4.622 0 8.368 3.746 8.368 8.364 0 4.618-3.746 8.364-8.368 8.364-1.637 0-3.168-.475-4.476-1.298l-.321-.202-2.969.78 3.031-.806-.192-.307a8.318 8.318 0 01-1.073-4.131c0-4.618 3.746-8.364 8.368-8.364zm-3.535 3.328a.547.547 0 00-.399.191c-.139.155-.53.518-.53 1.264 0 .746.542 1.467.621 1.572.079.105 1.054 1.609 2.554 2.259.356.155.634.248.85.318.358.113.684.097.942.059.288-.042.887-.363 1.013-.713.126-.35.126-.649.088-.712-.038-.063-.142-.1-.3-.178-.158-.078-.94-.464-1.085-.516-.145-.052-.251-.078-.356.079-.105.157-.408.516-.5.62-.092.105-.184.118-.342.039-.158-.078-.667-.246-1.27-.785-.469-.418-.786-.935-.878-1.092-.092-.157-.01-.242.069-.32.071-.071.158-.183.237-.275.079-.092.105-.157.158-.262.053-.105.026-.196-.013-.275-.039-.078-.356-.857-.488-1.176-.128-.31-.258-.268-.356-.273a2.91 2.91 0 00-.258-.005z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 px-6 md:px-8 select-none">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        
        {/* Copyright notice */}
        <p className="text-sm text-slate-500 font-medium">
          © {currentYear} Shaikh Ziya. All rights reserved.
        </p>

        {/* Brand note */}
        <p className="text-xs text-slate-600 font-mono select-none">
          Built with React & Tailwind CSS
        </p>

        {/* Small social list */}
        <div className="flex gap-4.5 items-center">
          {[
            { name: 'GitHub', url: 'https://github.com', icon: <GithubIcon className="h-5 w-5" />, hoverClass: 'hover:text-[#ffffff] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' },
            { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedinIcon className="h-5 w-5" />, hoverClass: 'hover:text-[#0077b5] hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.6)]' },
            { name: 'WhatsApp', url: 'https://whatsapp.com', icon: <WhatsappIcon className="h-5 w-5" />, hoverClass: 'hover:text-[#25d366] hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.6)]' }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.15, rotate: 6 }}
              className={`text-slate-500 transition-all duration-300 ${social.hoverClass}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
}
