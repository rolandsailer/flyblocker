import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type ReferenzenSectionProps = {
  locale: Locale;
};

export default function ReferenzenSection({ locale }: ReferenzenSectionProps) {
  const { referenzen } = getContent(locale);

  return (
    <section id="weitere-referenzen" className="section-grey">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{referenzen.eyebrow}</p>
          <h2>
            {referenzen.title.before}
            <b>{referenzen.title.bold}</b>
          </h2>
        </div>
        <div className="ref-logos reveal">
          {referenzen.logos.map((logo) => (
            <div key={logo.caption} className="ref-logo-item">
              <img
                className="ref-logo-img"
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={56}
                loading="lazy"
              />
              <span className="ref-logo-caption">{logo.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
