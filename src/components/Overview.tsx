import { motion } from 'motion/react';
import Molecule3D from './Molecule3D';

// Extracted styles for better JSX readability
const styles = {
  section: "py-32 md:py-48 bg-white relative border-t border-zinc-100",
  container: "max-w-7xl mx-auto px-6 md:px-12",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
  textColumn: "flex flex-col gap-8",
  heading: "text-4xl md:text-5xl font-display font-medium tracking-tight text-zinc-900 leading-tight",
  paragraphWrapper: "flex flex-col gap-6 text-lg text-zinc-600 font-light leading-relaxed",
  visualColumn: "relative h-[500px] w-full",
  statCard: "absolute bottom-0 left-0 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-4 hidden sm:flex z-30",
  statIconWrapper: "w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl",
  statLabel: "text-sm text-zinc-500 font-medium uppercase tracking-wider",
  statValue: "text-xl font-bold text-zinc-900"
};

/**
 * Bu component MOF teknolojisini sade ve anlaşılır bir şekilde açıklamak için tasarlandı, ana sayfada ikinci kısımda bunu kullanıyoruz.
 * Split layout ile metin ve 3D görsel birlikte kullanılarak hem teknik hem görsel anlatım sağlandı.
 * Responsive yapı sayesinde mobilde alt alta, büyük ekranlarda yan yana konumlanır.
 * Animasyon ve istatistik kartı ile içeriğin dikkat çekiciliği artırıldı.
 */
export default function Overview() {
  return (
    <section id="technology" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.textColumn}
          >
            <h2 className={styles.heading}>
              The power of Metal-Organic Frameworks.
            </h2>
            
            <div className={styles.paragraphWrapper}>
              <p>
                Metal-Organic Frameworks (MOFs) are next-generation porous materials that combine ultra-high surface area, tunable pore structures, and unmatched selectivity. Built from metal ions and organic linkers, MOFs unlock breakthrough solutions in CO₂ capture, gas separation, energy storage, and environmental technologies.
              </p>
              <p>
                Think of them as molecular sponges. A single gram of a MOF can have a surface area larger than a football field, allowing it to trap and store massive amounts of specific gases with incredible precision.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.visualColumn}
          >
            <Molecule3D variant="overview" />
            
            {/* Floating stat card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={styles.statCard}
            >
              <div className={styles.statIconWrapper}>
                1g
              </div>
              <div>
                <p className={styles.statLabel}>Surface Area</p>
                <p className={styles.statValue}>&gt; 7,000 m²</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


