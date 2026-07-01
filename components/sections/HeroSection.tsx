import { getContent } from '@/content';
import { HERO_CAROUSEL_SLIDES } from '@/lib/siteImages';
import type { Locale } from '@/lib/i18n';

type HeroSectionProps = {
  locale: Locale;
};

export default function HeroSection({ locale }: HeroSectionProps) {
  const { hero } = getContent(locale);

  return (
    <section id="hero" data-carousel-dot-label={hero.carouselDotLabel}>
      <div className="carousel" id="carousel" role="region" aria-label={hero.carouselAria}>
        {HERO_CAROUSEL_SLIDES.map((src, index) => (
          <div
            key={src}
            className={`carousel-slide${index === 0 ? ' active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero-scrim" />
      <div className="carousel-dots" id="carouselDots" aria-label={hero.dotsAria} />
      <div className="container hero-inner">
        <p className="eyebrow">
          <span className="rule" />
          {hero.eyebrow}
        </p>
        <h1>
          {hero.title.before}
          <b>{hero.title.bold}</b>
        </h1>
        <p className="hero-sub">{hero.subtitle}</p>
        <div className="hero-actions">
          <a
            href={hero.ctaHref}
            className="btn btn-invert"
            data-cta="beratung"
            data-cta-location="hero"
          >
            {hero.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
