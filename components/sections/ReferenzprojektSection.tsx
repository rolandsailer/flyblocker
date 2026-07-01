import { getContent } from '@/content';
import CheckIcon from '@/components/ui/CheckIcon';
import type { Locale } from '@/lib/i18n';

type ReferenzprojektSectionProps = {
  locale: Locale;
};

export default function ReferenzprojektSection({ locale }: ReferenzprojektSectionProps) {
  const { referenzprojekt } = getContent(locale);

  return (
    <section id="referenz">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{referenzprojekt.eyebrow}</p>
          <h2>
            {referenzprojekt.title.before}
            <b>{referenzprojekt.title.bold}</b>
          </h2>
        </div>
        <div className="case-study-grid reveal">
          <div
            className="case-study-media"
            style={{ backgroundImage: "url('/images/bg-92a3439005.jpg')" }}
          >
            <div className="brand-badge">
              <img src="/images/inline-e4b3f9fb2f.png" alt={referenzprojekt.brandAlt} />
            </div>
          </div>
          <div className="case-study-text">
            <p className="eyebrow">{referenzprojekt.projectEyebrow}</p>
            <p className="case-quote serif serif-italic">{referenzprojekt.quote}</p>
            <p className="case-attrib">
              <b>{referenzprojekt.attribution.org1}</b> &amp; <b>{referenzprojekt.attribution.org2}</b>,{' '}
              {referenzprojekt.attribution.detail}
            </p>
            <ul className="case-study-facts">
              {referenzprojekt.facts.map((fact) => (
                <li key={fact}>
                  <CheckIcon />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
            <div className="case-source">
              {referenzprojekt.sourceLabel}{' '}
              <a href={referenzprojekt.sourceHref} target="_blank" rel="noopener">
                {referenzprojekt.sourceLinkLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
