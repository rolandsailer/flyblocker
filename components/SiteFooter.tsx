import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type SiteFooterProps = {
  locale: Locale;
};

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

export default function SiteFooter({ locale }: SiteFooterProps) {
  const { footer } = getContent(locale);

  return (
    <footer id="kontakt">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/images/logo.png" alt="RELAG" />
            </div>
            <p className="footer-company-name">{footer.companyName}</p>
            <p style={{ color: '#8c8c8c', maxWidth: 380 }}>{footer.tagline}</p>
            <div className="footer-contact">
              <div>
                <LocationIcon />
                Länggstrasse 17, 8308 Illnau
              </div>
              <div>
                <PhoneIcon />
                <a href="tel:+41525211020" data-cta-location="footer">
                  +41 (0) 52 521 10 20
                </a>
              </div>
              <div>
                <MailIcon />
                <a href="mailto:info@relag.ch" data-cta="email" data-cta-location="footer">
                  info@relag.ch
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="footer-nav-heading">{footer.productsHeading}</p>
            <ul>
              {footer.productsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-nav-heading">{footer.companyHeading}</p>
            <ul>
              {footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('#') ? undefined : '_blank'}
                    rel={link.href.startsWith('#') ? undefined : 'noopener'}
                    data-outbound={link.outbound}
                    data-cta-location={link.outbound ? 'footer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span>{footer.domain}</span>
        </div>
      </div>
    </footer>
  );
}
