export type TitleWithBold = {
  before: string;
  bold: string;
};

export type RefLogo = {
  src: string;
  alt: string;
  caption: string;
};

export type FooterLink = {
  label: string;
  href: string;
  outbound?: string;
};

export type SiteContent = {
  meta: {
    canonicalBase: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    siteName: string;
  };
  brand: {
    logoAria: string;
    logoTag: string;
  };
  nav: {
    aboutLabel: string;
    aboutHref: string;
    ctaLabel: string;
    ctaHref: string;
    ctaLocation: string;
    navAria: string;
    langAria: string;
  };
  hero: {
    carouselAria: string;
    dotsAria: string;
    carouselDotLabel: string;
    eyebrow: string;
    title: TitleWithBold;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
  };
  funktion: {
    eyebrow: string;
    title: TitleWithBold;
    intro: string;
    summer: { season: string; title: string; text: string };
    winter: { season: string; title: string; text: string };
    steps: [
      {
        stepLabel: string;
        title: string;
        text: string;
        imageAlt: string;
        imageCrop: boolean;
      },
      {
        stepLabel: string;
        title: string;
        text: string;
        linkLabel: string;
        linkHref: string;
        imageAlt: string;
        imageCrop: boolean;
      },
    ];
  };
  einsatz: {
    eyebrow: string;
    title: TitleWithBold;
    tabs: Array<{
      label: string;
      subtitle: string;
      imageSrc: 'lodge' | 'gastronomie' | 'baeckerei' | 'industrie';
      imageAlt: string;
      captionTitle: string;
      caption: string;
    }>;
  };
  optionen: {
    eyebrow: string;
    title: TitleWithBold;
    intro: string;
    permanent: {
      tag: string;
      title: string;
      text: string;
      bullets: string[];
      ctaLabel: string;
      ctaHref: string;
    };
    rental: {
      tag: string;
      title: string;
      text: string;
      bullets: string[];
      ctaLabel: string;
      ctaHref: string;
      extLinkLabel: string;
      extLinkHref: string;
    };
  };
  swissmade: {
    bold: string;
    text: string;
  };
  referenzen: {
    eyebrow: string;
    title: TitleWithBold;
    logos: RefLogo[];
  };
  referenzprojekt: {
    eyebrow: string;
    title: TitleWithBold;
    brandAlt: string;
    projectEyebrow: string;
    quote: string;
    attribution: {
      org1: string;
      org2: string;
      detail: string;
    };
    facts: string[];
    sourceLabel: string;
    sourceLinkLabel: string;
    sourceHref: string;
  };
  produkteblatt: {
    eyebrow: string;
    title: TitleWithBold;
    intro: string;
    pdfLabel: string;
    pdfNote: string;
    pdfButton: string;
    pdfMailto: string;
    highlights: Array<{ bold?: string; text: string }>;
  };
  erstberatung: {
    eyebrow: string;
    title: TitleWithBold;
    text: string;
    note: string;
    bookLabel: string;
    bookHref: string;
    phoneLabel: string;
    photoAria: string;
  };
  team: {
    eyebrow: string;
    title: TitleWithBold;
    reps: Array<{
      id: string;
      region: string;
      name: string;
      role: string;
      phone: string;
      phoneHref: string;
      ctaLocation: string;
    }>;
  };
  footer: {
    companyName: string;
    tagline: string;
    productsHeading: string;
    productsLinks: FooterLink[];
    companyHeading: string;
    companyLinks: FooterLink[];
    copyright: string;
    domain: string;
  };
  phoneOverlay: {
    closeLabel: string;
    label: string;
    title: string;
    hint: string;
  };
};
