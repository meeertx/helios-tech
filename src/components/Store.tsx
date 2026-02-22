import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

// Extracted styles for better JSX readability
const styles = {
  section: "py-32 bg-zinc-50 relative border-t border-zinc-200/50",
  container: "max-w-7xl mx-auto px-6 md:px-12",
  headerWrapper: "flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8",
  headerTextWrapper: "max-w-2xl",
  heading: "text-4xl md:text-5xl font-display font-medium tracking-tight text-zinc-900 mb-6",
  subheading: "text-lg text-zinc-600 font-light",
  viewAllLink: "inline-flex items-center gap-2 text-zinc-900 hover:text-teal-600 transition-colors font-semibold",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  card: "group relative bg-white rounded-[2rem] border border-zinc-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden",
  imageWrapper: "h-56 w-full relative overflow-hidden bg-zinc-100 flex items-center justify-center p-4",
  image: "w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out",
  imageOverlay: "absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  contentWrapper: "p-8 flex flex-col flex-grow relative z-10 bg-white",
  productType: "text-xs font-bold text-teal-600 tracking-wider uppercase mb-3 block",
  productName: "text-2xl font-display font-bold text-zinc-900 group-hover:text-teal-700 transition-colors",
  footerWrapper: "mt-auto flex items-center justify-between pt-6 border-t border-zinc-100",
  priceLabel: "text-xs text-zinc-500 font-medium uppercase tracking-wider",
  priceValue: "text-xl font-bold text-zinc-900",
  actionButton: "w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm"
};

/**
 * Bu component MOF ürünlerini kart yapısında listelemek için tasarlandı.
 * Ürünler veri dosyasından dinamik olarak çekilerek ölçeklenebilir bir yapı oluşturuldu.
 * Responsive grid ve animasyonlar ile modern ve akıcı bir katalog deneyimi sağlandı.
 * Amaç, ürünleri hem görsel hem de ticari açıdan net ve anlaşılır sunmaktır.
 * Styles yapısını ayrı tuttuk çünkü JSX içini temiz tutmak, okunabilirliği artırmak ve stil yönetimini merkezi hale getirmek istedik.
 */
export default function Store() {
  return (
    <section id="store" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.headerTextWrapper}>
            <h2 className={styles.heading}>
              MOF Catalog.
            </h2>
            <p className={styles.subheading}>
              High-purity Metal-Organic Frameworks available for research and industrial applications.
            </p>
          </div>
          <Link to="/store" className={styles.viewAllLink}>
            View full catalog <ArrowRight size={18} />
          </Link>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={`/store/${product.id}`}
                className={styles.card}
              >
                {/* Product Image Area */}
                <div className={styles.imageWrapper}>
                  <img 
                    src={product.image || `https://picsum.photos/seed/${product.id}/400/300`} 
                    alt={product.name}
                    className={styles.image}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/${product.id}/400/300`;
                    }}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                
                <div className={styles.contentWrapper}>
                  <div className="mb-8">
                    <span className={styles.productType}>
                      {product.type}
                    </span>
                    <h3 className={styles.productName}>{product.name}</h3>
                  </div>
                  
                  <div className={styles.footerWrapper}>
                    <div className="flex flex-col">
                      <span className={styles.priceLabel}>Starting from</span>
                      <span className={styles.priceValue}>{product.price}</span>
                    </div>
                    <button className={styles.actionButton}>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



