import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Molecule3D from './Molecule3D';

// Extracted styles for better JSX readability
const styles = {
  section: "relative min-h-screen flex items-center overflow-hidden pt-24 bg-gradient-to-b from-zinc-50 via-white to-zinc-50",
  bgContainer: "absolute inset-0 z-0 overflow-hidden pointer-events-none",
  bgBlobTeal: "absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-100/50 blur-[120px]",
  bgBlobIndigo: "absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-100/50 blur-[120px]",
  contentWrapper: "relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
  textColumn: "flex flex-col items-start text-left",
  badge: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-200/50 bg-teal-50/50 backdrop-blur-sm mb-8 shadow-sm",
  badgeDot: "w-2 h-2 rounded-full bg-teal-500 animate-pulse",
  badgeText: "text-xs font-bold tracking-wider text-teal-800 uppercase",
  heading: "text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter text-zinc-900 leading-[1.1]",
  headingHighlight: "text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600",
  paragraph: "mt-8 text-lg md:text-xl text-zinc-600 max-w-xl font-light leading-relaxed",
  buttonGroup: "mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto",
  primaryButton: "group flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto",
  secondaryButton: "flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm w-full sm:w-auto",
  visualColumn: "relative hidden lg:block h-[600px] w-full",
  visualGlow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-teal-200 to-indigo-200 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
};

/**
 * Bu component sayfanın ilk görünen (Hero) alanıdır ve ana değer önerisini sunar , ana sayfadaki ilk gördüğümüz yer.
 * Marka mesajı, başlık, açıklama ve aksiyon butonları ile kullanıcıyı yönlendirir.
 * Responsive split layout ve 3D görsel ile güçlü bir ilk izlenim oluşturulmuştur.
 * Motion animasyonları sayesinde dinamik ve modern bir giriş deneyimi sağlanır.
 */
export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Abstract Background Elements */}
      <div className={styles.bgContainer}>
        <div className={styles.bgBlobTeal} />
        <div className={styles.bgBlobIndigo} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.grid}>
          
          {/* Text Content */}
          <div className={styles.textColumn}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={styles.badge}
            >
              <span className={styles.badgeDot} />
              <span className={styles.badgeText}>
                Next-Generation Materials
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Shaping the future with <span className={styles.headingHighlight}>innovative MOFs.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={styles.paragraph}
            >
              Capturing CO₂ at scale. We engineer Metal-Organic Frameworks to unlock breakthrough solutions in carbon capture, gas separation, and energy storage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={styles.buttonGroup}
            >
              <Link to="/technology" className={styles.primaryButton}>
                See How It Works
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className={styles.secondaryButton}>
                Contact Sales
              </Link>
            </motion.div>
          </div>

          {/* Visual Content - 3D Molecule Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.visualColumn}
          >
            <Molecule3D variant="hero" />
            
            {/* Decorative elements behind 3D canvas */}
            <div className={styles.visualGlow} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}



