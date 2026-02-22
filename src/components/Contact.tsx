import { motion } from 'motion/react';

/**
 * İletişim bilgileri ve formu responsive ve animasyonlu bir yapıda sunar.
 * Temiz tasarım ve erişilebilir form yapısı hedeflenmiştir.
 */

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-50 relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-zinc-900 mb-8">
              Partner with Helios.
            </h2>
            <p className="text-lg text-zinc-600 font-light mb-12 max-w-md">
              Whether you're looking for custom MOF synthesis or large-scale deployment, our engineering team is ready to collaborate.
            </p>
            
            <div className="space-y-6 text-zinc-700">
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:info@heliosscitech.com" className="text-lg hover:text-teal-600 transition-colors">
                  info@heliosscitech.com
                </a>
              </div>
              <div>
                <p className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+908503041229" className="text-lg hover:text-teal-600 transition-colors">
                  +90 850 304 12 29
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-sm text-zinc-600">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-sm text-zinc-600">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-zinc-600">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-zinc-600">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit"
                className="mt-4 bg-teal-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-teal-700 transition-colors w-full sm:w-auto self-start shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
