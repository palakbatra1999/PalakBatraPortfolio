import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const HeroBadge = () => {
    useEffect(() => {
        confetti({
          particleCount: 120,
          spread: 120,
          origin: { y: 0.65 },  // 👈 Lower down the screen
          scalar: 1.2,          // 👈 Bigger particles
          ticks: 120,           // 👈 Faster burst
          startVelocity: 60,    // 👈 Strong initial burst
          zIndex: 9999,
        });
      }, []);

  return (
    <motion.a
      href="certificate_hack.pdf" // Replace with actual cert link
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="mt-6 inline-block bg-white/30 backdrop-blur-lg border border-orange-300 text-orange-900 font-medium px-6 py-2 rounded-full shadow-lg shadow-orange-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      🏆 <span className="font-semibold">Hackathon Winner</span> – April 2025
    </motion.a>
  );
};

export default HeroBadge;
