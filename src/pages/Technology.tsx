import { motion } from 'motion/react';
import Capabilities from '../components/Capabilities';
import CTA from '../components/CTA';

export default function Technology() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display font-medium tracking-tight text-zinc-900 mb-6"
        >
          Our Technology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-500 max-w-2xl mx-auto font-light"
        >
          Deep dive into the science behind our Metal-Organic Frameworks and how they outperform traditional materials.
        </motion.p>
      </div>
      <Capabilities />
      <CTA />
    </motion.div>
  );
}
