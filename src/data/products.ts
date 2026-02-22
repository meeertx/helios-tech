import calf20Img from '../images/calf-20.png';
import uio66nh2Img from '../images/uio-66-nh2.png';
import uio66Img from '../images/uio-66.png';
import mof74niImg from '../images/mof-74-ni.png';
import hkust1Img from '../images/hkust-1.png';
import mil53Img from '../images/mil-53.png';

/**
 * Bu dosya, mağazada gösterilecek MOF ürünlerinin veri kaynağını içerir.
 * Ürün bilgileri (id, fiyat, açıklama, özellikler, görsel) merkezi bir yapıda tutulmuştur.
 * Amaç, UI ile veriyi ayırarak daha düzenli, ölçeklenebilir ve sürdürülebilir bir mimari oluşturmaktır.
 */

export const products = [
  { 
    id: 'calf-20', 
    name: 'CALF-20', 
    type: 'Zn-Based MOF', 
    price: '$55', 
    image: calf20Img,
    description: 'A highly robust Zinc-based Metal-Organic Framework specifically engineered for capturing carbon dioxide from industrial flue gases. It exhibits exceptional stability in the presence of water vapor, making it ideal for real-world applications.', 
    features: ['Exceptional water stability', 'High CO₂ capacity at low pressures', 'Low energy penalty for regeneration', 'Scalable and cost-effective synthesis'] 
  },
  { 
    id: 'uio-66-nh2', 
    name: 'UiO-66-NH2', 
    type: 'Zr-Based MOF', 
    price: '$150', 
    image: uio66nh2Img,
    description: 'An amine-functionalized Zirconium-based MOF known for its outstanding chemical and thermal stability. The NH₂ group enhances its affinity for acidic gases like CO₂ and H₂S.', 
    features: ['Outstanding thermal stability up to 400°C', 'High chemical resistance', 'Enhanced selectivity for acidic gases', 'Ideal for catalytic support'] 
  },
  { 
    id: 'uio-66', 
    name: 'UiO-66', 
    type: 'Zr-Based MOF', 
    price: '$130', 
    image: uio66Img,
    description: 'The standard Zirconium-based MOF, featuring a highly connected framework that provides unprecedented stability among porous materials. Perfect for harsh industrial environments.', 
    features: ['Unprecedented mechanical stability', 'High surface area', 'Thermally stable up to 500°C', 'Versatile platform for functionalization'] 
  },
  { 
    id: 'mof-74-ni', 
    name: 'MOF-74(Ni)', 
    type: 'Ni-Based MOF', 
    price: '$65', 
    image: mof74niImg,
    description: 'Featuring one-dimensional hexagonal channels with high densities of open metal sites, MOF-74(Ni) offers incredible performance for gas separation and storage.', 
    features: ['High density of open metal sites', 'Excellent for olefin/paraffin separation', 'High volumetric capacity', 'Tunable pore environment'] 
  },
  { 
    id: 'hkust-1', 
    name: 'HKUST-1', 
    type: 'Cu-Based MOF', 
    price: '$55', 
    image: hkust1Img,
    description: 'A classic Copper-based MOF with a 3D intersecting channel system. It is widely used for gas storage, separation, and catalysis due to its high surface area and open metal sites.', 
    features: ['High BET surface area (~1900 m²/g)', 'Abundant open copper sites', 'Excellent for gas storage (H₂, CH₄)', 'Well-established synthesis protocols'] 
  },
  { 
    id: 'mil-53', 
    name: 'MIL-53', 
    type: 'Al-Based MOF', 
    price: '$190', 
    image: mil53Img,
    description: 'Known as the "breathing MOF", MIL-53(Al) can reversibly change its pore size in response to external stimuli like temperature, pressure, or guest molecules.', 
    features: ['Unique "breathing" effect', 'High hydrothermal stability', 'Excellent for selective adsorption', 'Flexible framework dynamics'] 
  },
];

