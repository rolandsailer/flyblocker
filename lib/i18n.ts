export const locales = ['de', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

/** Production domains — one locale per domain at the root URL. */
export const PRODUCTION_SITE_URL: Record<Locale, string> = {
  de: 'https://fliegenfrei.ch',
  fr: 'https://stopmouches.ch',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

/** Absolute URL in production builds; relative path in local dev. */
export function localeSiteUrl(locale: Locale): string {
  if (process.env.NODE_ENV === 'production') {
    return PRODUCTION_SITE_URL[locale];
  }
  return localePath(locale);
}

export function htmlLang(locale: Locale): string {
  return locale === 'fr' ? 'fr-CH' : 'de-CH';
}

export function canonicalUrl(locale: Locale, baseUrl: string): string {
  return locale === defaultLocale ? baseUrl : `${baseUrl}/fr`;
}
