/**
 * Bu component sitenin en alt bölümünü (footer) oluşturur.
 * Marka bilgisi, telif hakkı ve temel yasal linkleri minimal bir yapıda sunar.
 * Responsive tasarım sayesinde mobilde alt alta, büyük ekranlarda yatay hizalanır.
 * Amaç, sayfayı sade ve kurumsal bir kapanış ile tamamlamaktır.
 */
  export default function Footer() {
    return (
      <footer className="py-12 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold tracking-tighter text-zinc-900">
              HELIOS
            </span>
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Helios Science & Technology.
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
