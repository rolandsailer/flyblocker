import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type TeamSectionProps = {
  locale: Locale;
};

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

export default function TeamSection({ locale }: TeamSectionProps) {
  const { team } = getContent(locale);

  return (
    <section id="team">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{team.eyebrow}</p>
          <h2>
            {team.title.before}
            <b>{team.title.bold}</b>
          </h2>
        </div>
        <div className="team-grid">
          {team.reps.map((rep) => (
            <div key={rep.id} className="rep-card reveal">
              <div className="rep-photo" data-rep={rep.id}>
                <img src={`/images/${rep.id}.jpg`} alt={rep.name} />
              </div>
              <div className="rep-info">
                <div className="rep-region">{rep.region}</div>
                <p className="rep-name">{rep.name}</p>
                <p className="rep-role">{rep.role}</p>
                <div className="rep-contact">
                  <a href={rep.phoneHref} data-cta-location={rep.ctaLocation}>
                    <PhoneIcon />
                    {rep.phone}
                  </a>
                  <a href="mailto:info@relag.ch" data-cta="email" data-cta-location={rep.ctaLocation}>
                    <MailIcon />
                    info@relag.ch
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
