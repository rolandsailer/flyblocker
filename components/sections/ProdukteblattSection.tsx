import { getContent } from '@/content';
import CheckIcon from '@/components/ui/CheckIcon';
import type { Locale } from '@/lib/i18n';

type ProdukteblattSectionProps = {
  locale: Locale;
};

export default function ProdukteblattSection({ locale }: ProdukteblattSectionProps) {
  const { produkteblatt } = getContent(locale);

  return (
    <section id="produkteblatt">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{produkteblatt.eyebrow}</p>
          <h2>
            {produkteblatt.title.before}
            <b>{produkteblatt.title.bold}</b>
          </h2>
          <p>{produkteblatt.intro}</p>
        </div>
        <div className="produkteblatt-grid reveal">
          <div className="pdf-preview">
            <div className="pdf-preview-placeholder">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: 'var(--red)' }}
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <p className="pdf-placeholder-label">{produkteblatt.pdfLabel}</p>
              <p className="pdf-placeholder-note">{produkteblatt.pdfNote}</p>
              <a
                href={produkteblatt.pdfMailto}
                className="btn btn-red"
                style={{ opacity: 0.5, pointerEvents: 'none' }}
              >
                {produkteblatt.pdfButton}
              </a>
            </div>
          </div>
          <div className="produkteblatt-highlights">
            <ul className="produkteblatt-list">
              {produkteblatt.highlights.map((item) => (
                <li key={item.bold || item.text}>
                  <CheckIcon />
                  <span>
                    {item.bold ? <b>{item.bold}</b> : null}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
