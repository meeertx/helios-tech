import { motion } from 'motion/react';
import Contact from '../components/Contact';

//motion.div normal div gibi sadece içerisine animasyon yazmaya yetkinlik sağlıyor
export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Contact />
    </motion.div>
  );
}
