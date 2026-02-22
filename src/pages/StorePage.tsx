import { motion } from 'motion/react';
import Store from '../components/Store';

export default function StorePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Store />
    </motion.div>
  );
}
