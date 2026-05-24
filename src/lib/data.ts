// Dauphin Royal — Editorial v2 · static site data.
// Ported from the Claude Design handoff bundle ("Dauphin Royal - Editorial v2").
// Single source of truth for the home page sections and the /produit/[slug] routes.

// ── Images (Unsplash, same as the design prototype) ──────────────
const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMAGE = '/immeuble-dauphin-royal.jpeg';
export const WHY_IMAGE  = u('photo-1573164574511-73c773193279', 1200);

const IMG = {
  svcMobilier:     u('photo-1497366754035-f200968a6e72', 800),
  svcInformatique: u('photo-1517336714731-489689fd1ca8', 800),
  svcImprimerie:   u('photo-1611532736597-de2d4265fba3', 800),
  svcPapeterie:    u('photo-1455390582262-044cdead277a', 800),
  p1: u('photo-1631679706909-1844bbd07221', 900),
  p2: u('photo-1580480055273-228ff5388ef8', 900),
  p3: u('photo-1496181133206-80ce9b88a853', 900),
  p4: u('photo-1591405351990-4726e331f141', 900),
  p5: u('photo-1612815154858-60aa4c59eaa6', 900),
  p6: u('photo-1586953208448-b95a79798f07', 900),
  p7: u('photo-1568667256549-094345857637', 900),
  p8: u('photo-1456735190827-d1262f71b8a3', 900),
};

// ── Company ──────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Dauphin Royal',
  phones: ['+236 75 83 13 13', '+236 72 30 80 80'],
  emailPapeterie: 'info.papeterie@dauphinroyal.com',
  emailImprimerie: 'info.imprimerie@dauphinroyal.com',
  address: 'Centre-ville (PK0), derrière le marché central, Bangui, RCA',
  whatsapp: 'https://wa.me/23675831313',
};

export const NAV_LINKS = [
  { href: '#accueil',  label: 'Accueil' },
  { href: '#apropos',  label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#produits', label: 'Produits' },
  { href: '#contact',  label: 'Contact' },
];

// ── Stats ────────────────────────────────────────────────────────
export interface Stat { value: string; raw: number; label: string; suffix: string; sub: string; }

export const STATS: Stat[] = [
  { value: '2006',  raw: 2006, label: 'Fondée en',      suffix: '',  sub: 'Bangui · RCA' },
  { value: '98',    raw: 98,   label: 'Satisfaction',   suffix: '%', sub: 'Mesurée en 2025' },
  { value: '1 200', raw: 1200, label: 'Projets',        suffix: '+', sub: 'Achevés à ce jour' },
  { value: '80',    raw: 80,   label: 'Collaborateurs', suffix: '',  sub: 'Bangui · PK0' },
];

export const HERO_STATS = [
  { value: '1 200+', label: 'projets' },
  { value: '98%',    label: 'satisfaction' },
  { value: '80',     label: 'collaborateurs' },
];

// Sectors / clients served — used in the marquee.
export const MARQUEE_ITEMS = [
  'Banques',
  'Ministères',
  'ONG internationales',
  'Hôpitaux',
  'Télécoms',
  'Universités',
  'Industries',
  'Hôtellerie',
  'Logistique',
  'Cabinets d’avocats',
  'Assurances',
  'Compagnies aériennes',
];

// ── Services ─────────────────────────────────────────────────────
export interface Service { id: string; title: string; description: string; tags: string[]; image: string; }

export const SERVICES: Service[] = [
  {
    id: 'mobilier', title: 'Mobilier de Bureau',
    description: "Aménagement complet de vos espaces de travail avec un mobilier ergonomique sélectionné auprès de fabricants certifiés.",
    tags: ['Bureaux exécutifs', 'Sièges ergonomiques', 'Rangements', 'Tables de réunion'],
    image: IMG.svcMobilier,
  },
  {
    id: 'informatique', title: 'Équipements Informatiques',
    description: "Matériel professionnel des plus grandes marques, installation, formation et maintenance par nos techniciens certifiés.",
    tags: ['Postes & serveurs', 'Réseau & onduleurs', 'Périphériques', 'Maintenance'],
    image: IMG.svcInformatique,
  },
  {
    id: 'imprimerie', title: 'Imprimerie Professionnelle',
    description: "Atelier offset et numérique haute qualité pour vos supports de communication et travaux d'édition en grand format.",
    tags: ['Offset', 'Numérique', 'Grand format', 'Façonnage'],
    image: IMG.svcImprimerie,
  },
  {
    id: 'papeterie', title: 'Papeterie & Fournitures',
    description: "Toutes les fournitures essentielles en stock permanent, livrées rapidement partout dans le pays.",
    tags: ['Papier', 'Écriture', 'Classement', 'Consommables'],
    image: IMG.svcPapeterie,
  },
];

// ── Products ─────────────────────────────────────────────────────
export interface Product {
  id: string;
  slug: string;
  category: string;
  categoryLabel: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const PRODUCT_CATEGORIES = [
  { id: 'tous',         label: 'Tous' },
  { id: 'mobilier',     label: 'Mobilier' },
  { id: 'informatique', label: 'Informatique' },
  { id: 'imprimerie',   label: 'Imprimerie' },
  { id: 'papeterie',    label: 'Papeterie' },
];

export const PRODUCTS: Product[] = [
  { id: 'p1', slug: 'bureau-executif-premium', category: 'mobilier', categoryLabel: 'Mobilier',
    name: 'Bureau Exécutif Premium', description: 'Direction, bois massif, finition acajou.',
    price: '850 000 FCFA', image: IMG.p1 },
  { id: 'p2', slug: 'fauteuil-ergonomique', category: 'mobilier', categoryLabel: 'Mobilier',
    name: 'Fauteuil Ergonomique', description: 'Support lombaire, accoudoirs réglables.',
    price: '195 000 FCFA', image: IMG.p2 },
  { id: 'p3', slug: 'hp-probook-450-g10', category: 'informatique', categoryLabel: 'Informatique',
    name: 'HP ProBook 450 G10', description: 'Core i7, 16 Go, SSD 512 Go, 15.6" FHD.',
    price: '725 000 FCFA', image: IMG.p3 },
  { id: 'p4', slug: 'onduleur-apc-1500va', category: 'informatique', categoryLabel: 'Informatique',
    name: 'Onduleur APC 1500VA', description: 'Protection complète, autonomie étendue.',
    price: '215 000 FCFA', image: IMG.p4 },
  { id: 'p5', slug: 'imprimante-laser-hp-m404', category: 'imprimerie', categoryLabel: 'Imprimerie',
    name: 'Imprimante Laser HP M404', description: 'Monochrome 38 ppm, recto-verso, réseau.',
    price: '345 000 FCFA', image: IMG.p5 },
  { id: 'p6', slug: 'photocopieur-multifonction', category: 'imprimerie', categoryLabel: 'Imprimerie',
    name: 'Photocopieur Multifonction', description: 'A3 couleur, scan, fax, 35 ppm.',
    price: '2 850 000 FCFA', image: IMG.p6 },
  { id: 'p7', slug: 'papier-a4-80g-carton', category: 'papeterie', categoryLabel: 'Papeterie',
    name: 'Papier A4 80g — Carton', description: 'Ramette premium 500 feuilles, carton de 5.',
    price: '32 500 FCFA', image: IMG.p7 },
  { id: 'p8', slug: 'kit-bureau-complet', category: 'papeterie', categoryLabel: 'Papeterie',
    name: 'Kit Bureau Complet', description: 'Stylos, surligneurs, classeurs et organiseurs.',
    price: '28 900 FCFA', image: IMG.p8 },
];

// ── Rich detail data per product — keyed by id ───────────────────
export interface ProductDetail {
  ref: string;
  headline: string;
  tagline: string;
  longDescription: string[];
  specs: [string, string][];
  includes: string[];
}

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  p1: {
    ref: 'P-001',
    headline: 'Bureau direction en bois massif',
    tagline: "Pour les dirigeants qui n'ont rien à prouver.",
    longDescription: [
      "Pièce centrale de votre cabinet de direction, ce bureau exécutif s'inscrit dans la tradition du mobilier de prestige : structure en bois massif d'acajou, plateau finition vernis satiné, et un retour latéral inclus pour étendre votre plan de travail. Chaque pièce est sélectionnée auprès d'ateliers européens reconnus pour la qualité de leur ébénisterie.",
      "Pensé pour durer une vingtaine d'années avec un entretien minimal, ce modèle est livré, monté et installé par nos équipes sur site à Bangui, en 48 heures.",
    ],
    specs: [
      ['Matière',    'Bois massif acajou'],
      ['Dimensions', '180 × 90 × 76 cm'],
      ['Retour',     'Inclus · 120 × 60 cm'],
      ['Finition',   'Vernis satiné'],
      ['Garantie',   '5 ans'],
      ['Origine',    'Importé · Italie'],
    ],
    includes: ['Plateau principal', 'Retour latéral', 'Caisson 3 tiroirs', 'Passe-câbles intégrés', 'Montage sur site'],
  },
  p2: {
    ref: 'P-002',
    headline: 'Siège ergonomique opérationnel',
    tagline: 'La performance au quotidien — pensée pour huit heures de travail.',
    longDescription: [
      "Conçu pour soulager les longues journées au bureau, ce fauteuil ergonomique combine un support lombaire dynamique, des accoudoirs 3D entièrement ajustables et une assise en mousse haute densité. La mécanique synchrone accompagne naturellement votre posture quand vous changez de position.",
      "Idéal pour les open-spaces, postes de comptabilité, salles de marché ou tout poste exigeant une présence prolongée. Livré assemblé, prêt à l'usage.",
    ],
    specs: [
      ['Type',       'Siège opérationnel'],
      ['Hauteur',    'Réglable 45–55 cm'],
      ['Accoudoirs', '3D ajustables'],
      ['Support',    'Lombaire dynamique'],
      ['Capacité',   '120 kg'],
      ['Garantie',   '3 ans'],
    ],
    includes: ['Roulettes pour sols durs', 'Vérin gaz certifié', 'Mécanisme synchrone', 'Têtière ajustable', 'Notice & service après-vente'],
  },
  p3: {
    ref: 'P-003',
    headline: 'Ordinateur portable professionnel HP',
    tagline: 'La machine de travail des entreprises sérieuses.',
    longDescription: [
      "Le HP ProBook 450 G10 s'impose comme la référence des parcs informatiques d'entreprise : processeur Intel Core i7 de dernière génération, 16 Go de mémoire vive, SSD NVMe de 512 Go et écran 15,6 pouces Full HD anti-reflets. Livré sous Windows 11 Pro avec garantie constructeur étendue.",
      "Notre équipe se charge de la configuration initiale, du déploiement de votre environnement de travail, et reste disponible pour la maintenance via notre service technique à Bangui.",
    ],
    specs: [
      ['Processeur', 'Intel Core i7-1355U'],
      ['Mémoire',    '16 Go DDR4'],
      ['Stockage',   'SSD NVMe 512 Go'],
      ['Écran',      '15.6" Full HD anti-reflets'],
      ['Système',    'Windows 11 Pro'],
      ['Garantie',   '3 ans pièces et main-d’œuvre'],
    ],
    includes: ['Chargeur 65 W', 'Sacoche transport', 'Configuration initiale', 'Déploiement parc (sur devis)', 'Support technique Bangui'],
  },
  p4: {
    ref: 'P-004',
    headline: 'Onduleur intelligent APC 1500VA',
    tagline: 'Votre filet de sécurité contre les coupures.',
    longDescription: [
      "Indispensable à Bangui pour protéger vos serveurs, postes critiques et équipements réseau : l'onduleur APC Smart-UPS 1500VA assure 8 minutes d'autonomie à pleine charge, régule la tension, et envoie une alerte en cas d'anomalie via son écran LCD ou son interface logicielle.",
      "Installation incluse et bilan de charge réalisé par nos techniciens pour dimensionner correctement votre solution.",
    ],
    specs: [
      ['Puissance',     '1500 VA / 900 W'],
      ['Autonomie',     '8 min à pleine charge'],
      ['Prises',        '8 IEC + 1 USB de charge'],
      ['Écran',         'LCD multifonction'],
      ['Communication', 'USB + RJ45'],
      ['Garantie',      '3 ans (batterie incluse)'],
    ],
    includes: ['Cordon d’alimentation', 'Câble USB de supervision', 'Logiciel PowerChute', 'Bilan de charge inclus', 'Installation sur site'],
  },
  p5: {
    ref: 'P-005',
    headline: 'Imprimante laser monochrome',
    tagline: "L'outil silencieux qui ne lâche jamais.",
    longDescription: [
      "Conçue pour les volumes administratifs soutenus, la HP LaserJet Pro M404 imprime jusqu'à 38 pages par minute en monochrome, avec une qualité 1200 × 1200 dpi, recto-verso automatique et connexion réseau Ethernet. Compatible avec l'impression mobile.",
      "Nous fournissons les toners d'origine en stock permanent et un contrat de maintenance optionnel garantissant l'intervention sous 24 heures à Bangui.",
    ],
    specs: [
      ['Type',        'Laser monochrome'],
      ['Vitesse',     '38 ppm A4'],
      ['Résolution',  '1200 × 1200 dpi'],
      ['Recto-verso', 'Automatique'],
      ['Connexion',   'USB + Ethernet + Wi-Fi'],
      ['Garantie',    '2 ans + maintenance optionnelle'],
    ],
    includes: ['Toner initial 3 000 pages', 'Câble USB & Ethernet', 'Installation & paramétrage réseau', 'Stock toner à Bangui', 'SAV sous 24 h'],
  },
  p6: {
    ref: 'P-006',
    headline: 'Photocopieur multifonction A3 couleur',
    tagline: 'Le moteur de votre service reprographie interne.',
    longDescription: [
      "Photocopieur multifonction professionnel A3 couleur, 35 pages par minute, capacité 2 000 feuilles, écran tactile 7 pouces : imprimer, scanner, photocopier et faxer depuis un seul équipement. Pensé pour les services centraux des administrations et grandes entreprises.",
      "Livré avec contrat de maintenance et de consommables au choix : prise en charge complète des toners, pièces et interventions techniques.",
    ],
    specs: [
      ['Format',    'A3 / A4 couleur'],
      ['Vitesse',   '35 ppm couleur et N&B'],
      ['Capacité',  '2 000 feuilles · 4 bacs'],
      ['Fonctions', 'Imprimer · Scanner · Fax · Copier'],
      ['Écran',     'Tactile 7" couleur'],
      ['Garantie',  '2 ans + contrat maintenance'],
    ],
    includes: ['Mise en service', 'Formation utilisateurs', 'Contrat coût-page (optionnel)', 'Pièces & toners en stock', 'SAV prioritaire'],
  },
  p7: {
    ref: 'P-007',
    headline: 'Papier A4 80g · Carton de 5 ramettes',
    tagline: 'Le consommable qui ne tombe jamais en rupture.',
    longDescription: [
      "Papier premium pour usage bureautique intensif : 80 g/m², blancheur 161 CIE, certifié FSC Mix Credit. Compatible avec toutes les imprimantes laser, jet d'encre et photocopieurs du marché. Conditionné en cartons de 5 ramettes, soit 2 500 feuilles.",
      "Stock permanent sur notre site PK0, livraison comprise sur Bangui dès 5 cartons. Tarifs dégressifs pour les commandes récurrentes.",
    ],
    specs: [
      ['Grammage',        '80 g/m²'],
      ['Format',          'A4 (210 × 297 mm)'],
      ['Conditionnement', 'Carton de 5 ramettes'],
      ['Quantité',        '2 500 feuilles / carton'],
      ['Blancheur',       '161 CIE'],
      ['Certification',   'FSC Mix Credit'],
    ],
    includes: ['Tarifs dégressifs dès 10 cartons', 'Livraison Bangui incluse', 'Stock permanent PK0', 'Contrat de consommables', 'Facturation mensuelle disponible'],
  },
  p8: {
    ref: 'P-008',
    headline: 'Kit bureau prêt-à-l’emploi',
    tagline: "L'équipement complet d'un nouveau poste, en un seul carton.",
    longDescription: [
      "Pensé pour équiper rapidement un nouveau collaborateur, ce kit complet réunit tout le nécessaire bureautique : stylos, surligneurs, classeurs, chemises, organiseurs et accessoires essentiels. Idéal pour les phases de recrutement, les déménagements ou les ouvertures de site.",
      "Conditionné dans un carton unique, livré sous 24 heures à Bangui. Possibilité de personnaliser la composition selon les besoins de votre service.",
    ],
    specs: [
      ['Stylos bille',    '12 unités · bleu / noir / rouge'],
      ['Surligneurs',     '4 couleurs fluo'],
      ['Classeurs',       '5 leviers A4'],
      ['Chemises',        '50 cartonnées assorties'],
      ['Organiseurs',     '2 supports métal'],
      ['Conditionnement', 'Carton unique prêt-à-l’emploi'],
    ],
    includes: ['Personnalisation possible', 'Logo entreprise (sur devis)', 'Livraison Bangui 24 h', 'Réassort programmé', 'Tarif dégressif au-delà de 20 kits'],
  },
};

// ── Why us ───────────────────────────────────────────────────────
export const WHY_US = [
  { num: '01', title: 'Leader du marché depuis 2006',
    description: "Près de deux décennies au service des entreprises et institutions de la République centrafricaine." },
  { num: '02', title: 'Qualité garantie',
    description: 'Produits sélectionnés auprès de marques certifiées, garantie et SAV intégrés.' },
  { num: '03', title: 'Livraison rapide à Bangui',
    description: 'Stock permanent et logistique propre, livraison sous 24 à 48 heures.' },
  { num: '04', title: 'Accompagnement dédié',
    description: '80 collaborateurs, chargés de compte affectés à chaque dossier.' },
];

// ── Testimonials ─────────────────────────────────────────────────
export const TESTIMONIALS = [
  { quote: "Dauphin Royal a entièrement aménagé nos nouveaux bureaux. Mobilier, informatique, signalétique : un partenaire unique, rigoureux sur les délais.",
    author: 'Aïcha N’Garagba', role: 'Directrice générale', company: 'Sangha Logistics' },
  { quote: "Nous travaillons avec eux depuis plus de dix ans. Toujours du stock, des prix justes et une équipe à l'écoute.",
    author: 'Jean-Pierre Kossi', role: 'Responsable achats', company: 'Banque de l’Oubangui' },
  { quote: "Service après-vente exemplaire sur nos parcs informatiques. Les techniciens sont rapides et compétents.",
    author: 'Marie-Claire Doumta', role: 'DSI', company: 'Ministère du Plan' },
];

// ── Helpers ──────────────────────────────────────────────────────
export const getProductBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);

export function buildRelated(slug: string, category: string): Product[] {
  const same = PRODUCTS.filter((p) => p.category === category && p.slug !== slug);
  if (same.length >= 4) return same.slice(0, 4);
  const others = PRODUCTS.filter((p) => p.category !== category && p.slug !== slug);
  return [...same, ...others].slice(0, 4);
}

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
