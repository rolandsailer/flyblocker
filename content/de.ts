import type { SiteContent } from './types';

const de: SiteContent = {
  meta: {
    canonicalBase: 'https://fliegenfrei.ch',
    title: 'Fliegenblocker – Luftschleier für Gastronomie & Lebensmittelverarbeitung | RELAG AG',
    description:
      'Keine Fliegen. Keine Hitze. Umluftschleieranlagen von RELAG schützen Eingänge in Gastronomie, Bäckerei und Lebensmittelverarbeitung — gegen Fliegen, Mücken und andere lästige Insekten, ganz ohne Vorhänge oder Insektizide.',
    ogTitle: 'Fliegenblocker – Keine Fliegen. Keine Hitze.',
    ogDescription:
      'Ein unsichtbarer Luftvorhang hält Fliegen, Mücken und andere lästige Insekten draussen — für Gastronomie & Lebensmittelverarbeitung, diskret integriert, Swiss Made seit 1971.',
    ogImageAlt: 'RELAG Luftschleier Installation',
    siteName: 'Fliegenblocker – RELAG AG',
  },
  brand: {
    logoAria: 'RELAG Luftschleier · Swiss Made',
    logoTag: 'Luftschleier\u00a0·\u00a0Swiss\u00a0Made',
  },
  nav: {
    aboutLabel: 'Über uns',
    aboutHref: 'https://www.relag.ch/de/unternehmen/ueber-uns',
    ctaLabel: 'Beratung',
    ctaHref: 'mailto:info@relag.ch?subject=Beratungsanfrage%20Fliegenblocker',
    ctaLocation: 'header',
    navAria: 'Hauptnavigation',
    langAria: 'Sprache',
  },
  hero: {
    carouselAria: 'Bildergalerie Referenzinstallationen',
    dotsAria: 'Bildauswahl',
    carouselDotLabel: 'Bild',
    eyebrow: 'Für Gastronomie & Lebensmittelverarbeitung',
    title: { before: 'Keine Fliegen.', bold: 'Keine Hitze.' },
    subtitle:
      'Ein unsichtbarer Luftvorhang hält Fliegen, Mücken und andere lästige Insekten draussen — diskret in die Architektur integriert, ganz ohne Fliegengitter oder Insektizide. Türkontakt-gesteuert, energieeffizient, Swiss Made seit 1971.',
    ctaLabel: 'Kontaktieren Sie uns für eine Beratung',
    ctaHref: 'mailto:info@relag.ch?subject=Beratungsanfrage%20Fliegenblocker',
  },
  funktion: {
    eyebrow: 'Funktionsweise',
    title: { before: 'Ein System,', bold: 'das ganzjährig arbeitet' },
    intro:
      'Fest installiert bietet die Luftschleieranlage gleich zwei Vorteile: im Sommer hält sie Fliegen und Insekten draussen, im Winter trennt sie Innen- und Aussenklima — für Thermoregulation und Energieeffizienz.',
    summer: {
      season: '☀ Im Sommer',
      title: 'Insekten draussen',
      text: 'Der Luftstrom bildet eine unsichtbare Barriere gegen Fliegen, Mücken und andere lästige Insekten — ohne Fliegengitter, Vorhänge oder Insektizide. Ausserdem hält der Luftstrom ebenso die Hitze draussen.',
    },
    winter: {
      season: '❄ Im Winter',
      title: 'Wärme drinnen',
      text: 'Verhindert das Eindringen kalter Aussenluft — reduziert Warmluftverlust und so auch die Hitze — und verbessert die Energiebilanz.',
    },
    steps: [
      {
        stepLabel: 'Schritt 1',
        title: 'Das Problem — und die Lösung',
        text: 'Fliegen, Mücken und andere Insekten sind nicht nur lästig — in Gastronomie, Bäckerei und Lebensmittelbetrieben werden sie schnell zum Hygienerisiko. Luftschleieranlagen sind eine kraftvolle, bewährte Methode, um sie zuverlässig abzuwehren — ohne Gitter, Vorhänge oder Chemie.',
        imageAlt: 'Fliegen werden durch einen Luftstrom zuverlässig abgewehrt',
        imageCrop: false,
      },
      {
        stepLabel: 'Schritt 2',
        title: 'Unverbindlich beraten lassen',
        text: 'Wir prüfen Ihren Eingang und empfehlen die passende Lösung.',
        linkLabel: 'Jetzt Beratung anfragen →',
        linkHref: 'mailto:info@relag.ch?subject=Beratungsanfrage%20Fliegenblocker',
        imageAlt:
          'Stehende Luftschleieranlage am Eingang — diskret integriert in moderne Gastronomie-Architektur',
        imageCrop: true,
      },
    ],
  },
  einsatz: {
    eyebrow: 'Anwendungen',
    title: { before: 'Überall dort,', bold: 'wo Türen offen bleiben' },
    tabs: [
      {
        label: 'Hotellerie & Lodges',
        subtitle: 'Lobbys, Bergrestaurants, Shop-Eingänge',
        imageSrc: 'lodge',
        imageAlt: 'Hotellerie und Lodges – Eingangsbereich mit integrierter Luftschleieranlage',
        captionTitle: 'Hotellerie & Lodges',
        caption:
          'Lobbys, Bergrestaurants und Shop-Eingänge — Komfort für Gäste, ganzjährig und diskret in die Architektur integriert.',
      },
      {
        label: 'Gastronomie',
        subtitle: 'Restaurants & Gasthäuser',
        imageSrc: 'gastronomie',
        imageAlt: 'Gastronomie – Restaurant mit gehobener Küche',
        captionTitle: 'Gastronomie',
        caption:
          'Restaurants und Gasthäuser mit hochfrequentierten Eingängen — Gäste herein, Insekten draussen.',
      },
      {
        label: 'Bäckerei & Conditorei',
        subtitle: 'Offene Auslagen, Frischeprodukte',
        imageSrc: 'baeckerei',
        imageAlt: 'Bäckerei und Conditorei – frische Backwaren und offene Verkaufsfläche',
        captionTitle: 'Bäckerei & Conditorei',
        caption: 'Schutz für offene Auslagen und Frischeprodukte — entscheidend für die Lebensmittelhygiene.',
      },
      {
        label: 'Lebensmittelverarbeitende Industrie',
        subtitle: 'Produktion, Verarbeitung, Lager',
        imageSrc: 'industrie',
        imageAlt: 'Lebensmittelverarbeitende Industrie – Produktion und Verarbeitung',
        captionTitle: 'Lebensmittelverarbeitende Industrie',
        caption: 'Produktion, Verarbeitung und Lager — Hygiene und Klimatrennung an stark genutzten Zugängen.',
      },
    ],
  },
  optionen: {
    eyebrow: 'Optionen',
    title: { before: 'Dauerhaft installiert', bold: 'oder schnell und mobil zur Miete' },
    intro: 'Ob installiert oder mobil – Ob Kauf oder zur Miete – Wir bieten den vollen Service für Ihre Bedürfnisse.',
    permanent: {
      tag: 'Feste Installation',
      title: 'Permanent installiert',
      text: 'Die massgeschneiderte Lösung, geplant und gebaut für Ihren Eingang — ganzjährig im Einsatz.',
      bullets: [
        'Unverbindliche Erstberatung mit unserem Team',
        'Architektonisch passgenaue Planung & Montage',
        'Auf Wunsch: Wartung und Service über die gesamte Lebensdauer',
      ],
      ctaLabel: 'Beratung anfragen',
      ctaHref: 'mailto:info@relag.ch?subject=Beratungsanfrage%20Fliegenblocker',
    },
    rental: {
      tag: 'Plug-and-Play · Miete',
      title: 'Mietanlagen als Sofortmassnahme',
      text: 'Schnelle, zuverlässige Lösung für die warme Saison — geliefert, installiert und betreut über die gesamte Mietdauer.',
      bullets: [
        'Hinstellen/einstecken — betriebsbereit',
        'Keine Investitions- oder Installationskosten',
        'Rasche Verfügbarkeit',
        'Transport, Störungsbehebung und Wartung inbegriffen',
        'Anlage wird Ende Saison abgeholt',
      ],
      ctaLabel: 'Mietanlagen & Verfügbarkeit anfragen',
      ctaHref: 'mailto:info@relag.ch?subject=Mietanfrage%20Fliegenblocker',
      extLinkLabel: 'Mehr zu Miet-Testanlagen ↗',
      extLinkHref: 'https://www.relag.ch/de/produkte-und-leistungen/miet-testanlagen',
    },
  },
  swissmade: {
    bold: 'Massgeschneiderte Lösung',
    text: 'vom einzigen Schweizer Hersteller von Luftschleieranlagen.',
  },
  referenzen: {
    eyebrow: 'Weitere Referenzen',
    title: { before: 'Vertrauen von', bold: 'führenden Betrieben' },
    logos: [
      { src: '/images/refs/steiner.png', alt: 'Steiner-Beck', caption: 'Steiner-Beck' },
      { src: '/images/refs/spruengli.png', alt: 'Confiserie Sprüngli', caption: 'Confiserie Sprüngli' },
      { src: '/images/refs/dieci.png', alt: 'Dieci Baden', caption: 'Dieci Baden' },
      { src: '/images/refs/volg.png', alt: 'Volg Beinwil am See', caption: 'Volg Beinwil am See' },
      { src: '/images/refs/wyberg.png', alt: 'Wirtshus zum Wyberg', caption: 'Wirtshus zum Wyberg' },
    ],
  },
  referenzprojekt: {
    eyebrow: 'Referenzprojekt',
    title: { before: 'Insekten draussen.', bold: 'Hitze auch.' },
    brandAlt: 'Stoos',
    projectEyebrow: 'Stoos Lodge × RELAG',
    quote:
      '„Die positiven Erfahrungen sprechen für sich — das benachbarte Gasthaus hat in der Folge gleich zwei weitere Anlagen in Betrieb genommen.“',
    attribution: {
      org1: 'Stoosbahnen AG',
      org2: 'Stoos Lodge',
      detail: 'Stoos Hotels — Installation am Shop-Eingang, 1300 m ü. M.',
    },
    facts: [
      'Luftstrom über die gesamte Eingangshöhe, aktiviert per Türkontakt',
      'Unsichtbare Barriere für Insekten — ganz ohne Fliegengitter oder Vorhänge',
      'Reduzierter Warmlufteinfall — Vorteil für Gebäudeklimatisierung und Energiebilanz',
      'Nach den positiven Erfahrungen: zwei weitere Anlagen im benachbarten Gasthaus in Betrieb',
    ],
    sourceLabel: 'Quelle: RELAG AG auf LinkedIn ·',
    sourceLinkLabel: 'Beitrag ansehen ↗',
    sourceHref: 'https://www.linkedin.com/feed/update/urn:li:activity:7450798401505529856/',
  },
  produkteblatt: {
    eyebrow: 'Produkteblatt',
    title: { before: 'Alle Infos', bold: 'auf einen Blick' },
    intro:
      'Laden Sie unser Produkteblatt herunter — mit technischen Details, Anwendungsbeispielen und Systemübersicht.',
    pdfLabel: 'Produkteblatt Fliegenblocker',
    pdfNote: 'PDF in Vorbereitung — wird in Kürze verfügbar sein',
    pdfButton: 'PDF herunterladen',
    pdfMailto: 'mailto:info@relag.ch?subject=Produkteblatt%20Fliegenblocker',
    highlights: [
      { bold: 'Modellreihe C – das Multitalent', text: '' },
      { text: 'Anlagen in runder Säulenform und in Flügelform verfügbar' },
      { text: 'Farbe nach Wahl — verfügbar in Edelstahl geschliffen' },
    ],
  },
  erstberatung: {
    eyebrow: 'Erstberatung',
    title: { before: 'Sprechen wir', bold: 'über Ihren Eingang' },
    text: 'Unverbindlich, persönlich und objektbezogen — von der ersten Idee bis zur Inbetriebnahme. Wir melden uns bei Ihnen.',
    note: '⬤ Beratung in der ganzen Schweiz — Deutschschweiz & Romandie',
    bookLabel: 'Termin buchen',
    bookHref: 'mailto:info@relag.ch?subject=Terminanfrage%20Fliegenblocker',
    phoneLabel: 'Telefonnummer anzeigen',
    photoAria: 'Eingangsbereich mit installierter Luftschleieranlage',
  },
  team: {
    eyebrow: 'Ihre Ansprechpartner',
    title: { before: 'Persönliche Beratung', bold: 'in Ihrer Region' },
    reps: [
      {
        id: 'sven',
        region: 'Deutschschweiz',
        name: 'Sven Berther',
        role: 'Beratung Luftschleieranlagen',
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
    companyName: 'RELAG AG für Luftschleieranlagen',
    tagline:
      'Schweizer Marktführer für Luftschleieranlagen seit 1971. Swiss Made Qualität, Innovation und persönliche Beratung.',
    productsHeading: 'Produkte & Leistungen',
    productsLinks: [
      { label: 'Komfort', href: 'https://www.relag.ch/de/produkte-und-leistungen/warmluftschleier' },
      { label: 'Industrie', href: 'https://www.relag.ch/de/produkte-und-leistungen/warmluftschleier' },
      { label: 'Betrieb und Wartung', href: 'https://www.relag.ch/de/produkte-und-leistungen/wartung' },
      { label: 'Miete', href: 'https://www.relag.ch/de/produkte-und-leistungen/miet-testanlagen' },
    ],
    companyHeading: 'Unternehmen',
    companyLinks: [
      { label: 'Beratung', href: '#erstberatung' },
      { label: 'Referenzen', href: 'https://www.relag.ch/de/referenzen/projekte' },
      { label: 'Über uns', href: 'https://www.relag.ch/de/unternehmen/ueber-uns' },
      {
        label: 'LinkedIn ↗',
        href: 'https://www.linkedin.com/company/relag-ag-f%C3%BCr-luftschleieranlagen',
        outbound: 'linkedin',
      },
    ],
    copyright: '© 2026 RELAG AG für Luftschleieranlagen',
    domain: 'fliegenfrei.ch',
  },
  phoneOverlay: {
    closeLabel: 'Schliessen',
    label: 'RELAG AG für Luftschleieranlagen',
    title: 'Telefon',
    hint: 'Mo–Fr · 08:00–17:00 Uhr',
  },
};

export default de;
