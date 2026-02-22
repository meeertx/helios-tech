import { motion } from 'motion/react';
import { Zap, Maximize, Shield, Target, Sliders } from 'lucide-react';

/**
 * Bu component, MOF teknolojisinin temel özelliklerini listelemek için oluşturuldu.
 * Özellikler bir dizi içinde tanımlanarak kod tekrarının önüne geçildi ve yapı ölçeklenebilir hale getirildi.
 * Responsive grid ve animasyon kullanılarak modern ve dinamik bir kullanıcı deneyimi hedeflendi.
 */

const features = [
  {
    icon: <Zap className="w-6 h-6 text-teal-600" />,
    title: 'Low Regeneration Energy',
    description: 'Release captured CO₂ at low temperatures or with minimal energy input compared to conventional solvents like amines, making the cycle highly energy-efficient.'
  },
  {
    icon: <Maximize className="w-6 h-6 text-teal-600" />,
    title: 'Exceptionally High Surface Area',
    description: 'Up to 7,000 m²/g. Adsorb massive amounts of CO₂ relative to their weight, outperforming traditional materials.'
  },
  {
    icon: <Shield className="w-6 h-6 text-teal-600" />,
    title: 'Chemical & Thermal Stability',
    description: 'Stable under high temperatures and in humid or chemically harsh environments—critical for real-world industrial use.'
  },
  {
    icon: <Target className="w-6 h-6 text-teal-600" />,
    title: 'High CO₂ Selectivity',
    description: 'Engineered for a strong affinity for CO₂ molecules, improving purity and reducing post-separation steps.'
  },
  {
    icon: <Sliders className="w-6 h-6 text-teal-600" />,
    title: 'Tunable Pore Structure',
    description: 'Precise engineering of size, shape, and chemical functionality enables selective adsorption over other gases like N₂ or H₂O.'
  }
];


export default function Capabilities() {
  return (
    <section id="capabilities" className="py-32 bg-white relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-zinc-900 mb-6">
            Breakthrough Characteristics.
          </h2>
          <p className="text-lg text-zinc-600 font-light">
            Engineered at the molecular level to outperform conventional materials across every critical metric.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
