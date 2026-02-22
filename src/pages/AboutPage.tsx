import { motion } from 'motion/react';
import { Target, Lightbulb, Globe, Shield } from 'lucide-react';
import Molecule3D from '../components/Molecule3D';

/**

 * İçerik bölümler halinde tasarlandı (Hero alanı, genel tanıtım, değerler bölümü)
 * Değerler kısmı bir dizi (array) içinde tutulup map() ile dinamik olarak render edildi.
 * Bu sayede içerik yönetimi kolaylaştı ve ölçeklenebilir bir yapı oluşturuldu.
 * Framer Motion ile sayfa geçişleri ve scroll animasyonları eklenerek
 * daha modern ve akıcı bir kullanıcı deneyimi sağlandı.
 */

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-teal-600" />,
      title: "Precision Engineering",
      description: "We design Metal-Organic Frameworks at the atomic level, ensuring unparalleled purity, stability, and performance for targeted applications."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-teal-600" />,
      title: "Continuous Innovation",
      description: "Our dedicated R&D team constantly pushes the boundaries of materials science to discover new structures and optimize existing ones."
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "Global Sustainability",
      description: "We are committed to developing solutions that address critical global challenges, from carbon capture to clean water generation."
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: "Uncompromising Quality",
      description: "Every batch of our MOFs undergoes rigorous quality control to guarantee consistency and reliability for our industrial partners."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium tracking-wide uppercase mb-6 border border-teal-100"
          >
            About Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-medium text-zinc-900 mb-8 tracking-tight"
          >
            Pioneering the Future of <span className="text-teal-600">Porous Materials</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 font-light leading-relaxed"
          >
            At HELIOS Science & Technology, we specialize in the design, synthesis, and scaling of Metal-Organic Frameworks (MOFs). Our mission is to bridge the gap between academic discovery and industrial application.
          </motion.p>
        </div>

        {/* Image / Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
        >
          <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-sm h-[400px] relative bg-zinc-50 flex items-center justify-center">
            <Molecule3D variant="overview" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/50 to-transparent pointer-events-none" />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-display font-medium text-zinc-900">
              From the Lab to Global Scale
            </h2>
            <p className="text-lg text-zinc-600 font-light leading-relaxed">
              Founded by a team of passionate materials scientists, HELIOS was born out of the realization that while MOFs possess incredible potential, their widespread adoption has been hindered by scalability and cost challenges.
            </p>
            <p className="text-lg text-zinc-600 font-light leading-relaxed">
              We have developed proprietary synthesis methods that allow us to produce high-quality, ultra-pure Metal-Organic Frameworks at a fraction of the traditional cost, making them accessible for large-scale industrial applications such as gas separation, energy storage, and environmental remediation.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-medium text-zinc-900 mb-4">Our Core Values</h2>
            <p className="text-zinc-600 font-light max-w-2xl mx-auto">
              The principles that guide our research, our production, and our partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-3">{value.title}</h3>
                <p className="text-zinc-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
