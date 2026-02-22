# 🌌 HELIOS – Metal-Organic Frameworks Catalog

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)

**HELIOS**, yeni nesil gözenekli malzemeleri — özellikle **Metal-Organic Frameworks (MOFs)** — sergilemek için tasarlanmış modern, responsive ve bilimsel bir web uygulamasıdır. 

Platform; etkileşimli 3D molekül görselleştirmeleri, yapılandırılmış ürün kataloğu ve glassmorphism tasarım dili ile fütüristik bir kullanıcı deneyimi sunar.

---

## 📋 İçindekiler
- [🚀 Özellikler (Features)](#-özellikler-features)
- [🛠 Teknoloji Yığını (Tech Stack)](#-teknoloji-yığını-tech-stack)
- [📂 Proje Yapısı (Project Structure)](#-proje-yapısı-project-structure)
- [⚙️ Başlangıç (Getting Started)](#️-başlangıç-getting-started)
- [🏗 Üretim (Production Build)](#-üretim-production-build)
- [🌍 Yayınlama (Deployment)](#-yayınlama-deployment)

---

## 🚀 Özellikler (Features)

* 🧪 **Ürün Kataloğu:** Araştırma ve endüstriyel uygulamalar için yüksek saflıkta MOF ürünlerini listeleme ve detaylı inceleme.
* 🧬 **İnteraktif 3D Molekül Görselleştirme:** Tarayıcı tabanlı, etkileşimli soyut MOF yapıları (Hero ve About bölümlerinde).
* 🏢 **Kurumsal Vizyon:** HELIOS’un teknolojik yaklaşımı ve ölçekleme stratejisini açıklayan kapsamlı içerik.
* 🛍 **Dinamik Mağaza:** React Router tabanlı dinamik ürün detay sayfaları ve modern mağaza arayüzü.
* 🎨 **Modern UI/UX:**
    * Glassmorphism efektleri.
    * **Framer Motion** ile akıcı ve profesyonel animasyonlar.
    * Minimalist ve bilimsel estetik.
* 📱 **Tam Responsive:** Masaüstü, tablet ve mobil cihazlar için %100 uyumluluk.

---

## 🛠 Teknoloji Yığını (Tech Stack)

| Kategori | Teknoloji |
| :--- | :--- |
| **Framework** | React 18 (TypeScript) |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Routing** | React Router DOM |
| **Icons** | Lucide React |

---

## 📂 Proje Yapısı (Project Structure)

```text
HELIOS/
├── src/
│   ├── components/       # Tekrar kullanılabilir UI bileşenleri (Navbar, Footer, Hero, vb.)
│   ├── pages/            # Route tabanlı ana sayfalar (Home, About, Store, vb.)
│   ├── data/             # Merkezi veri yönetimi (products.ts)
│   ├── assets/           # Statik dosyalar, görseller ve ikonlar
│   ├── App.tsx           # Ana uygulama bileşeni ve routing
│   └── main.tsx          # Giriş noktası
├── public/               # Genel erişime açık dosyalar
├── tsconfig.json         # TypeScript yapılandırması
└── vite.config.ts        # Vite yapılandırması
----------------------------------------------------

⚙️ Başlangıç (Getting Started)
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

🔹 Ön Koşullar
Node.js (v18 veya üzeri önerilir)

npm veya yarn

🔹 Kurulum
Depoyu klonlayın:

Bash

git clone [https://github.com/kullaniciadi/helios-mof-catalog.git](https://github.com/kullaniciadi/helios-mof-catalog.git)
cd helios-mof-catalog
Bağımlılıkları yükleyin:

Bash

npm install
Geliştirme sunucusunu başlatın:

Bash

npm run dev
Tarayıcıdan erişin: http://localhost:5173 (veya terminalde belirtilen port).

🏗 Üretim (Production Build)
Optimize edilmiş bir çıktı almak için:

Bash

npm run build
Bu komut, projenizi en küçük boyuta indirgeyerek dist/ klasörüne çıktı verir. Sonucu test etmek için:

Bash

npm run preview
🌍 Yayınlama (Deployment)
HELIOS, statik site barındırma hizmetleriyle tam uyumludur:

Vercel / Netlify: GitHub deponuzu bağlayarak otomatik deploy alabilirsiniz.

GitHub Pages: gh-pages paketini kullanarak veya GitHub Actions ile yayınlayabilirsiniz.

📌 Notlar
Proje tamamen TypeScript ile geliştirilmiştir, tip güvenliği ön plandadır.

Ürün eklemek veya düzenlemek için src/data/products.ts dosyasını kullanabilirsiniz.

Modüler yapısı sayesinde yeni özellikler eklemek oldukça kolaydır.
