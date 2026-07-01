import Link from 'next/link';
import { getContent } from '@/content';
import { localeSiteUrl, type Locale } from '@/lib/i18n';

type SiteHeaderProps = {
  locale: Locale;
};

export default function SiteHeader({ locale }: SiteHeaderProps) {
  const { brand, nav } = getContent(locale);
  const altLocale = locale === 'de' ? 'fr' : 'de';
  const altLabel = altLocale.toUpperCase();

  return (
    <header id="site-header" className="on-dark">
      <div className="header-inner">
        <a href={localeSiteUrl(locale)} className="logo" aria-label={brand.logoAria}>
          <img src="/images/logo.png" alt="RELAG" />
          <span className="logo-tag">{brand.logoTag}</span>
        </a>
        <nav className="header-nav" aria-label={nav.navAria}>
          <Link
            href={localeSiteUrl(altLocale)}
            className="navlink"
            hrefLang={altLocale === 'fr' ? 'fr-CH' : 'de-CH'}
            aria-label={altLocale === 'fr' ? 'Français' : 'Deutsch'}
          >
            {altLabel}
          </Link>
          <a className="navlink" href={nav.aboutHref} target="_blank" rel="noopener">
            {nav.aboutLabel}
          </a>
          <a className="btn" href={nav.ctaHref} data-cta="beratung" data-cta-location={nav.ctaLocation}>
            {nav.ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}
