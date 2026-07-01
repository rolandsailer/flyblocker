import { getContent } from '@/content';
import CheckIcon from '@/components/ui/CheckIcon';
import type { Locale } from '@/lib/i18n';

type OptionenSectionProps = {
  locale: Locale;
};

export default function OptionenSection({ locale }: OptionenSectionProps) {
  const { optionen } = getContent(locale);
  const { permanent, rental } = optionen;

  return (
    <section id="optionen">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{optionen.eyebrow}</p>
          <h2>
            {optionen.title.before}
            <b>{optionen.title.bold}</b>
          </h2>
          <p>{optionen.intro}</p>
        </div>
        <div className="options-grid reveal">
          <div className="option-card permanent">
            <span className="opt-tag">
              <span className="dotmark" />
              {permanent.tag}
            </span>
            <h3>{permanent.title}</h3>
            <p>{permanent.text}</p>
            <ul className="opt-list">
              {permanent.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href={permanent.ctaHref}
              className="btn btn-red"
              data-cta="beratung"
              data-cta-location="optionen-permanent"
            >
              {permanent.ctaLabel}
            </a>
          </div>
          <div className="option-card rental">
            <span className="opt-tag">
              <span className="dotmark" />
              {rental.tag}
            </span>
            <h3>{rental.title}</h3>
            <p>{rental.text}</p>
            <ul className="opt-list">
              {rental.bullets.map((bullet) => (
                <li key={bullet}>
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href={rental.ctaHref}
              className="btn btn-blue"
              data-cta="miete"
              data-cta-location="optionen-miete"
            >
              {rental.ctaLabel}
            </a>
            <a
              href={rental.extLinkHref}
              className="option-ext-link"
              target="_blank"
              rel="noopener"
              data-outbound="relag-miete"
              data-cta-location="optionen-miete"
            >
              {rental.extLinkLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
