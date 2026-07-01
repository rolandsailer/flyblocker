import type { Metadata } from 'next';
import { getContent } from '@/content';
import { htmlLang, PRODUCTION_SITE_URL, type Locale } from '@/lib/i18n';

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getContent(locale);
  const url = PRODUCTION_SITE_URL[locale];

  return {
    metadataBase: new URL(url),
    title: meta.title,
    description: meta.description,
    openGraph: {
      type: 'website',
      locale: htmlLang(locale).replace('-', '_'),
      url,
      siteName: meta.siteName,
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [{ url: '/images/lodge.jpg', width: 1920, height: 1080, alt: meta.ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ['/images/lodge.jpg'],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: {
        'de-CH': PRODUCTION_SITE_URL.de,
        'fr-CH': PRODUCTION_SITE_URL.fr,
      },
    },
  };
}
