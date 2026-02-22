import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Store from '../components/Store';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Overview />
      <Store />
      <CTA />
    </motion.div>
  );
}

