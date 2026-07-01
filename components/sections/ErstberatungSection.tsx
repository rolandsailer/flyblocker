import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type ErstberatungSectionProps = {
  locale: Locale;
};

export default function ErstberatungSection({ locale }: ErstberatungSectionProps) {
  const { erstberatung } = getContent(locale);

  return (
    <section id="erstberatung">
      <div className="container">
        <div className="consult-grid">
          <div className="reveal">
            <p className="eyebrow">{erstberatung.eyebrow}</p>
            <h2>
              {erstberatung.title.before}
              <b>{erstberatung.title.bold}</b>
            </h2>
            <p>{erstberatung.text}</p>
            <p className="consult-note">{erstberatung.note}</p>
            <div className="consult-actions">
              <a
                href={erstberatung.bookHref}
                className="btn btn-solid"
                data-cta="termin"
                data-cta-location="erstberatung"
              >
                {erstberatung.bookLabel}
              </a>
              <button
                type="button"
                className="btn"
                data-action="show-phone"
                data-cta-location="erstberatung"
              >
                {erstberatung.phoneLabel}
              </button>
            </div>
          </div>
          <div
            className="consult-photo reveal"
            style={{ backgroundImage: "url('/images/bg-073dd534f9.jpg')" }}
            role="img"
            aria-label={erstberatung.photoAria}
          />
        </div>
      </div>
    </section>
  );
}
