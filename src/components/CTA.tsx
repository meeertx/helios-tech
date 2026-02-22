import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Bu component sayfanın sonunda kullanıcıyı aksiyona yönlendirmek için tasarlandı.
 * CTA (Call To Action), kullanıcıyı iletişim sayfasına yönlendirerek dönüşüm oranını artırmayı hedefler.
 * Yüksek kontrast, merkezlenmiş yapı ve dikkat çekici arka plan efekti ile odak oluşturuldu.
 * Motion animasyonu sayesinde bölüm sayfaya dinamik bir giriş yapar.
 */

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-black/5 bg-zinc-50">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm border border-zinc-200/50"
        >
          <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-zinc-900 mb-6">
            Ready to transform your emissions?
          </h2>
          <p className="text-xl text-zinc-500 font-light mb-10 max-w-2xl mx-auto">
            Join the industry leaders adopting next-generation MOF technology for sustainable carbon capture.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors shadow-sm hover:shadow-md"
          >
            Start the Conversation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

