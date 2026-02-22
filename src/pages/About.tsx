import { motion } from 'motion/react';
import { ArrowRight, Target, FlaskConical, RefreshCw, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';


/*
  - Sayfa bölümleri (Hero, Mission, Values, CTA) modüler şekilde ayrılmıştır.
  - "values" verisi ayrı bir dizi olarak tanımlanmış ve map() ile dinamik olarak render edilmiştir.
  - Bu yapı kod tekrarını önler ve yeni içerik eklemeyi kolaylaştırır.
  - motion kütüphanesi ile animasyonlar declarative şekilde kontrol edilmiştir.
  - Tailwind CSS kullanılarak component bazlı, temiz ve ölçeklenebilir bir stil yapısı kurulmuştur.
*/
export default function About() {
  const values = [
    {
      title: "Science-Driven Innovation",
      description: "Every solution we build is rooted in solid research and translated into real-world impact.",
      icon: <FlaskConical className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Embrace Change",
      description: "We stay flexible and adapt quickly, turning every change into an opportunity for growth.",
      icon: <RefreshCw className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Sustainability at Scale",
      description: "Our materials go beyond the lab, built to perform reliably in demanding industrial settings.",
      icon: <Globe className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Partnerships",
      description: "Driving sustainable change through strong partnerships.",
      icon: <Users className="w-6 h-6 text-teal-600" />
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
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium tracking-wide uppercase mb-6 border border-teal-100"
          >
            About HELIOS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-display font-medium text-zinc-900 mb-8 tracking-tight leading-tight"
          >
            Merging innovation with sustainability for a cleaner future.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 font-light leading-relaxed"
          >
            At Helios, we lead in creating advanced materials that empower industries to reduce carbon emissions.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24 border-y border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-zinc-600 font-light leading-relaxed">
                We are on a mission to develop advanced MOF materials for scalable carbon capture, gas separation, and industrial innovation - accelerating the transition to a sustainable future.
              </p>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden bg-zinc-100">
              <img 
                src="https://picsum.photos/seed/mission/800/600" 
                alt="Our Mission" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 mb-6">
            Our Values
          </h2>
          <p className="text-lg text-zinc-600 font-light">
            Our values drive everything we do, from big decisions to day-to-day actions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-zinc-200/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">{value.title}</h3>
              <p className="text-zinc-600 font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mt-12">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-900/40 blur-[100px]" />
            <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-900/40 blur-[100px]" />
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              Work with Us
            </h2>
            <p className="text-lg text-zinc-300 font-light mb-10 leading-relaxed">
              If you believe climate action is the defining challenge of our time and want to join a team developing next-generation materials to fight it, we'd love to meet you.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
