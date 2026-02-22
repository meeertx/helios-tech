import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Extracted styles for better JSX readability
const styles = {
  headerBase: "fixed top-0 w-full z-50 transition-all duration-300",
  headerScrolled: "bg-white/90 backdrop-blur-md border-b border-black/5 py-4 shadow-sm",
  headerTop: "bg-transparent py-6",
  container: "max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between",
  logo: "text-2xl font-display font-bold tracking-tighter text-zinc-900",
  desktopNav: "hidden md:flex items-center gap-10",
  navLinkBase: "text-base font-semibold tracking-wide transition-colors",
  navLinkActive: "text-teal-600",
  navLinkInactive: "text-zinc-600 hover:text-teal-600",
  mobileToggle: "md:hidden text-zinc-600 hover:text-teal-600 transition-colors",
  mobileMenu: "absolute top-full left-0 w-full bg-white border-b border-black/5 py-6 px-6 flex flex-col gap-6 md:hidden shadow-xl",
  mobileLinkBase: "text-xl font-semibold",
  mobileLinkActive: "text-teal-600",
  mobileLinkInactive: "text-zinc-700 hover:text-teal-600"
};

/**
 * Bu component sitenin üst navigasyon (navbar) alanını oluşturur.
 * Scroll durumuna göre stil değiştirerek dinamik bir header deneyimi sağlar.
 * Responsive yapı sayesinde masaüstünde yatay menü, mobilde hamburger menü kullanılır.
 * Aktif sayfa kontrolü ile kullanıcıya bulunduğu konum görsel olarak belirtilir.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Technology', href: '/technology' },
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`${styles.headerBase} ${isScrolled ? styles.headerScrolled : styles.headerTop}`}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          HELIOS
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`${styles.navLinkBase} ${isActive ? styles.navLinkActive : styles.navLinkInactive}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.mobileMenu}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`${styles.mobileLinkBase} ${isActive ? styles.mobileLinkActive : styles.mobileLinkInactive}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </header>
  );
}
