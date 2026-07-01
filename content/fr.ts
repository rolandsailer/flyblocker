import type { SiteContent } from './types';

const fr: SiteContent = {
  meta: {
    canonicalBase: 'https://stopmouches.ch',
    title: 'Stopmouches – Rideaux d’air pour gastronomie & industrie alimentaire | RELAG AG',
    description:
      'Pas de mouches. Pas de chaleur. Les portes d’air RELAG protègent les entrées en gastronomie, boulangerie et industrie alimentaire — contre mouches, moustiques et autres insectes, sans moustiquaire ni insecticide.',
    ogTitle: 'Stopmouches – Pas de mouches. Pas de chaleur.',
    ogDescription:
      'Un voile d’air invisible maintient mouches, moustiques et autres insectes à l’extérieur — pour la gastronomie & l’industrie alimentaire, intégré discrètement, Swiss Made depuis 1971.',
    ogImageAlt: 'Installation de porte d’air RELAG',
    siteName: 'Stopmouches – RELAG AG',
  },
  brand: {
    logoAria: 'RELAG rideaux d’air · Swiss Made',
    logoTag: 'Rideaux d\u2019air\u00a0·\u00a0Swiss\u00a0Made',
  },
  nav: {
    aboutLabel: 'À propos',
    aboutHref: 'https://www.relag.ch/fr/',
    ctaLabel: 'Conseil',
    ctaHref: 'mailto:info@relag.ch?subject=Demande%20de%20conseil%20anti-mouches',
    ctaLocation: 'header',
    navAria: 'Navigation principale',
    langAria: 'Langue',
  },
  hero: {
    carouselAria: 'Galerie de références',
    dotsAria: 'Sélection d’images',
    carouselDotLabel: 'Image',
    eyebrow: 'Pour la gastronomie & l’industrie alimentaire',
    title: { before: 'Pas de mouches.', bold: 'Pas de chaleur.' },
    subtitle:
      'Un voile d’air invisible maintient mouches, moustiques et autres insectes à l’extérieur — intégré discrètement à l’architecture, sans moustiquaire ni insecticide. Commandé par contact de porte, économe en énergie, Swiss Made depuis 1971.',
    ctaLabel: 'Contactez-nous pour un conseil',
    ctaHref: 'mailto:info@relag.ch?subject=Demande%20de%20conseil%20anti-mouches',
  },
  funktion: {
    eyebrow: 'Fonctionnement',
    title: { before: 'Un système', bold: 'qui travaille toute l’année' },
    intro:
      'Installé de façon permanente, la porte d’air offre deux avantages : en été, elle maintient mouches et insectes à l’extérieur ; en hiver, elle sépare les climats intérieur et extérieur — pour la thermorégulation et l’efficacité énergétique.',
    summer: {
      season: '☀ En été',
      title: 'Insectes dehors',
      text: 'Le flux d’air forme une barrière invisible contre mouches, moustiques et autres insectes — sans moustiquaire, rideau ou insecticide. De plus, le flux d’air retient également la chaleur à l’extérieur.',
    },
    winter: {
      season: '❄ En hiver',
      title: 'Chaleur dedans',
      text: 'Empêche l’intrusion d’air froid extérieur — réduit les pertes de chaleur et retient aussi la chaleur — et améliore le bilan énergétique.',
    },
    steps: [
      {
        stepLabel: 'Étape 1',
        title: 'Le problème — et la solution',
        text: 'Mouches, moustiques et autres insectes ne sont pas seulement gênants — en gastronomie, boulangerie et industrie alimentaire, ils deviennent rapidement un risque d’hygiène. Les portes d’air sont une méthode éprouvée pour les repousser efficacement — sans grille, rideau ni produits chimiques.',
        imageAlt: 'Les mouches sont repoussées efficacement par un flux d’air',
        imageCrop: false,
      },
      {
        stepLabel: 'Étape 2',
        title: 'Faire appel à un conseil sans engagement',
        text: 'Nous examinons votre entrée et recommandons la solution adaptée.',
        linkLabel: 'Demander un conseil →',
        linkHref: 'mailto:info@relag.ch?subject=Demande%20de%20conseil%20anti-mouches',
        imageAlt:
          'Porte d’air sur pied à l’entrée — intégrée discrètement dans une architecture gastronomique moderne',
        imageCrop: true,
      },
    ],
  },
  einsatz: {
    eyebrow: 'Applications',
    title: { before: 'Partout où', bold: 'les portes restent ouvertes' },
    tabs: [
      {
        label: 'Hôtellerie/Gastronomie',
        subtitle: 'Lobbys, restaurants, restaurants de montagne & auberges',
        imageSrc: 'gastronomie',
        imageAlt: 'Hôtellerie et gastronomie – restaurant avec cuisine raffinée',
        captionTitle: 'Hôtellerie/Gastronomie',
        caption:
          'Lobbys, restaurants de montagne, entrées de magasins, restaurants et auberges — confort pour les clients, toute l’année et intégré discrètement. Clients à l’intérieur, insectes dehors.',
      },
      {
        label: 'Boulangeries/Pâtisseries',
        subtitle: 'Vitrines ouvertes, produits frais',
        imageSrc: 'baeckerei',
        imageAlt: 'Boulangeries et pâtisseries – produits frais et vitrine ouverte',
        captionTitle: 'Boulangeries/Pâtisseries',
        caption: 'Protection des vitrines ouvertes et produits frais — essentiel pour l’hygiène alimentaire.',
      },
      {
        label: 'Industrie alimentaire',
        subtitle: 'Production, transformation, stockage',
        imageSrc: 'industrie',
        imageAlt: 'Industrie alimentaire – production et transformation',
        captionTitle: 'Industrie alimentaire',
        caption: 'Production, transformation et stockage — hygiène et séparation climatique aux accès très utilisés.',
      },
    ],
  },
  optionen: {
    eyebrow: 'Options',
    title: { before: 'Installation permanente', bold: 'ou location rapide et mobile' },
    intro:
      'Installé ou mobile — achat ou location — nous offrons un service complet adapté à vos besoins.',
    permanent: {
      tag: 'Installation fixe',
      title: 'Installation permanente',
      text: 'La solution sur mesure, planifiée et réalisée pour votre entrée — en service toute l’année.',
      bullets: [
        'Premier conseil sans engagement avec notre équipe',
        'Planification & montage adaptés à l’architecture',
        'Sur demande : maintenance et service sur toute la durée de vie',
      ],
      ctaLabel: 'Demander un conseil',
      ctaHref: 'mailto:info@relag.ch?subject=Demande%20de%20conseil%20anti-mouches',
    },
    rental: {
      tag: 'Plug-and-Play · Location',
      title: 'Installations locatives comme mesure immédiate',
      text: 'Solution rapide et fiable pour la saison chaude — livrée, installée et accompagnée pendant toute la durée de location.',
      bullets: [
        'Poser / brancher — prêt à l’emploi',
        'Aucun coût d’investissement ou d’installation',
        'Disponibilité rapide',
        'Transport, dépannage et maintenance inclus',
        'Récupération de l’installation en fin de saison',
      ],
      ctaLabel: 'Demander installations locatives & disponibilité',
      ctaHref: 'mailto:info@relag.ch?subject=Demande%20de%20location%20anti-mouches',
      extLinkLabel: 'En savoir plus sur les installations de test ↗',
      extLinkHref: 'https://www.relag.ch/de/produkte-und-leistungen/miet-testanlagen',
    },
  },
  swissmade: {
    bold: 'Solution sur mesure',
    text: 'du seul fabricant suisse de portes d’air.',
  },
  referenzen: {
    eyebrow: 'Autres références',
    title: { before: 'La confiance de', bold: 'entreprises leaders' },
    logos: [
      { src: '/images/refs/steiner.png', alt: 'Steiner-Beck', caption: 'Steiner-Beck' },
      { src: '/images/refs/spruengli.png', alt: 'Confiserie Sprüngli', caption: 'Confiserie Sprüngli' },
      { src: '/images/refs/dieci.png', alt: 'Dieci Baden', caption: 'Dieci Baden' },
      { src: '/images/refs/volg.png', alt: 'Volg Beinwil am See', caption: 'Volg Beinwil am See' },
      { src: '/images/refs/wyberg.png', alt: 'Wirtshus zum Wyberg', caption: 'Wirtshus zum Wyberg' },
    ],
  },
  referenzprojekt: {
    eyebrow: 'Projet de référence',
    title: { before: 'Insectes dehors.', bold: 'Chaleur aussi.' },
    brandAlt: 'Stoos',
    projectEyebrow: 'Stoos Lodge × RELAG',
    quote:
      '« Les expériences positives parlent d’elles-mêmes — l’auberge voisine a ensuite mis en service deux installations supplémentaires. »',
    attribution: {
      org1: 'Stoosbahnen AG',
      org2: 'Stoos Lodge',
      detail: 'Stoos Hotels — installation à l’entrée du magasin, 1300 m d’altitude.',
    },
    facts: [
      'Flux d’air sur toute la hauteur de l’entrée, activé par contact de porte',
      'Barrière invisible contre les insectes — sans moustiquaire ni rideau',
      'Réduction de l’intrusion d’air chaud — avantage pour la climatisation et le bilan énergétique',
      'Suite aux expériences positives : deux installations supplémentaires dans l’auberge voisine',
    ],
    sourceLabel: 'Source : RELAG AG sur LinkedIn ·',
    sourceLinkLabel: 'Voir la publication ↗',
    sourceHref: 'https://www.linkedin.com/feed/update/urn:li:activity:7450798401505529856/',
  },
  produkteblatt: {
    eyebrow: 'Fiche produit',
    title: { before: 'Toutes les infos', bold: 'en un coup d’œil' },
    intro:
      'Téléchargez notre fiche produit — avec détails techniques, exemples d’application et aperçu du système.',
    pdfLabel: 'Fiche produit anti-mouches',
    pdfNote: 'PDF en préparation — disponible prochainement',
    pdfButton: 'Télécharger le PDF',
    pdfMailto: 'mailto:info@relag.ch?subject=Fiche%20produit%20anti-mouches',
    highlights: [
      { bold: 'Gamme C – le multitâche', text: '' },
      { text: 'Installations disponibles en forme de colonne ronde et en forme d’ailets' },
      { text: 'Couleur au choix — disponible en acier inoxydable brossé' },
    ],
  },
  erstberatung: {
    eyebrow: 'Premier conseil',
    title: { before: 'Parlons de', bold: 'votre entrée' },
    text: 'Sans engagement, personnel et adapté à votre bâtiment — de la première idée à la mise en service. Nous vous recontactons.',
    note: '⬤ Conseil dans toute la Suisse — Suisse alémanique & Romandie',
    bookLabel: 'Prendre rendez-vous',
    bookHref: 'mailto:info@relag.ch?subject=Demande%20de%20rendez-vous%20anti-mouches',
    phoneLabel: 'Afficher le numéro de téléphone',
    photoAria: 'Entrée avec porte d’air installée',
  },
  team: {
    eyebrow: 'Vos interlocuteurs',
    title: { before: 'Conseil personnel', bold: 'dans votre région' },
    reps: [
      {
        id: 'sven',
        region: 'Suisse alémanique',
        name: 'Sven Berther',
        role: 'Conseil portes d’air',
        phone: '+41 (0) 52 521 10 22',
        phoneHref: 'tel:+41525211022',
        ctaLocation: 'rep-sven',
      },
      {
        id: 'laurent',
        region: 'Romandie',
        name: 'Laurent Sauvanet',
        role: "Conseil de vente · Rideaux d'air",
        phone: '+41 (0) 52 521 10 24',
        phoneHref: 'tel:+41525211024',
        ctaLocation: 'rep-laurent',
      },
    ],
  },
  footer: {
    companyName: 'RELAG AG pour portes d’air',
    tagline:
      'Leader suisse des portes d’air depuis 1971. Qualité Swiss Made, innovation et conseil personnalisé.',
    productsHeading: 'Produits & services',
    productsLinks: [
      { label: 'Confort', href: 'https://www.relag.ch/fr/produkte-und-leistungen/warmluftschleier' },
      { label: 'Industrie', href: 'https://www.relag.ch/fr/produkte-und-leistungen/warmluftschleier' },
      { label: 'Exploitation et maintenance', href: 'https://www.relag.ch/fr/produkte-und-leistungen/wartung' },
      { label: 'Location', href: 'https://www.relag.ch/de/produkte-und-leistungen/miet-testanlagen' },
    ],
    companyHeading: 'Entreprise',
    companyLinks: [
      { label: 'Conseil', href: '#erstberatung' },
      { label: 'Références', href: 'https://www.relag.ch/fr/referenzen/projekte' },
      { label: 'À propos', href: 'https://www.relag.ch/fr/' },
      {
        label: 'LinkedIn ↗',
        href: 'https://www.linkedin.com/company/relag-ag-f%C3%BCr-luftschleieranlagen',
        outbound: 'linkedin',
      },
    ],
    copyright: '© 2026 RELAG AG pour portes d’air',
    domain: 'stopmouches.ch',
  },
  phoneOverlay: {
    closeLabel: 'Fermer',
    label: 'RELAG AG pour portes d’air',
    title: 'Téléphone',
    hint: 'Lu–Ve · 08:00–17:00',
  },
};

export default fr;
