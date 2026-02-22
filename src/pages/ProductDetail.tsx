import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';


/**
 * Bu sayfa, seçilen ürünün detay bilgilerini dinamik olarak göstermek için tasarlandı.
 * URL parametresi (id) useParams ile alınarak products dizisinde ilgili ürün bulunuyor.
 *
 * Eğer ürün bulunamazsa kullanıcıya hata mesajı gösteriliyor.
 *
 * Ürün bulunduğunda; görsel, açıklama, fiyat ve özellikler ekrana getiriliyor.
 * Özellikler (features) dizisi map() ile liste halinde render edilerek
 * tekrar eden yapıdan kaçınıldı ve ölçeklenebilir bir sistem oluşturuldu.
 */

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-zinc-50 px-6">
        <div className="max-w-md w-full bg-white p-12 rounded-[2rem] shadow-sm border border-zinc-100 text-center">
          <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-display font-bold text-zinc-400">?</span>
          </div>
          <h2 className="text-2xl font-display font-medium text-zinc-900 mb-4">Product Not Found</h2>
          <p className="text-zinc-500 mb-8">
            The MOF product you are looking for does not exist or has been removed from our catalog.
          </p>
          <Link 
            to="/store" 
            className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors w-full"
          >
            <ArrowLeft size={18} /> Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-zinc-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/store" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Store
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Product Image Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-square rounded-[3rem] bg-white border border-zinc-200/50 shadow-sm flex items-center justify-center relative overflow-hidden p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-indigo-50 opacity-50" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={product.image || `https://picsum.photos/seed/${product.id}/800/800`} 
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://picsum.photos/seed/${product.id}/800/800`;
                }}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium tracking-wide uppercase mb-6 w-fit border border-teal-100">
              {product.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 mb-6 tracking-tight">
              {product.name}
            </h1>
            <p className="text-xl text-zinc-600 font-light leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="flex items-end gap-4 mb-10 pb-10 border-b border-zinc-200">
              <span className="text-4xl font-medium text-zinc-900">{product.price}</span>
              <span className="text-zinc-500 mb-1">/ 100g</span>
            </div>

            <div className="mb-12">
              <h3 className="text-lg font-medium text-zinc-900 mb-6">Key Characteristics</h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-600">
                    <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />
                    <span className="pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
              >
                Request Quote
              </Link>
              <a
                href="#"
                className="flex items-center justify-center bg-white text-teal-700 border border-teal-200 px-8 py-4 rounded-full font-medium hover:bg-teal-50 transition-colors"
              >
                Download Datasheet
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
