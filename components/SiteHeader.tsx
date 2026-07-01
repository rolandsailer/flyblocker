import Link from 'next/link';
import { getContent } from '@/content';
import { localeSiteUrl, type Locale } from '@/lib/i18n';

type SiteHeaderProps = {
  locale: Locale;
};

export default function SiteHeader({ locale }: SiteHeaderProps) {
  const { brand, nav } = getContent(locale);

  return (
    <header id="site-header" className="on-dark">
      <div className="header-inner">
        <a href={localeSiteUrl(locale)} className="logo" aria-label={brand.logoAria}>
          <img src="/images/logo.png" alt="RELAG" />
          <span className="logo-tag">{brand.logoTag}</span>
        </a>
        <nav className="header-nav" aria-label={nav.navAria}>
          <div className="lang-switch" role="group" aria-label={nav.langAria}>
            <Link
              href={localeSiteUrl('de')}
              className={`lang-switch-btn${locale === 'de' ? ' active' : ''}`}
              aria-current={locale === 'de' ? 'page' : undefined}
              hrefLang="de-CH"
            >
              DE
            </Link>
            <Link
              href={localeSiteUrl('fr')}
              className={`lang-switch-btn${locale === 'fr' ? ' active' : ''}`}
              aria-current={locale === 'fr' ? 'page' : undefined}
              hrefLang="fr-CH"
            >
              FR
            </Link>
          </div>
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
