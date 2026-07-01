import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type FunktionSectionProps = {
  locale: Locale;
};

export default function FunktionSection({ locale }: FunktionSectionProps) {
  const { funktion } = getContent(locale);
  const [step1, step2] = funktion.steps;

  return (
    <section id="funktion">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{funktion.eyebrow}</p>
          <h2>
            {funktion.title.before}
            <b>{funktion.title.bold}</b>
          </h2>
          <p>{funktion.intro}</p>
        </div>

        <div className="dual-benefit reveal">
          <div className="benefit-card summer">
            <div className="season">{funktion.summer.season}</div>
            <h3>{funktion.summer.title}</h3>
            <p>{funktion.summer.text}</p>
          </div>
          <div className="benefit-card winter">
            <div className="season">{funktion.winter.season}</div>
            <h3>{funktion.winter.title}</h3>
            <p>{funktion.winter.text}</p>
          </div>
        </div>

        <div className="how-steps">
          <article className="how-card reveal">
            <div className="how-card-visual">
              <img
                src="/images/how-solution-square.png"
                alt={step1.imageAlt}
                width={453}
                height={453}
                loading="lazy"
              />
            </div>
            <div className="how-card-body">
              <div className="how-step-num">{step1.stepLabel}</div>
              <h3>{step1.title}</h3>
              <p>{step1.text}</p>
            </div>
          </article>
          <article className="how-card reveal">
            <div
              className={`how-card-visual${step2.imageCrop ? ' how-card-visual--crop-br' : ''}`}
            >
              <img
                src="/images/how-consultation-square.png"
                alt={step2.imageAlt}
                width={453}
                height={453}
                loading="lazy"
              />
            </div>
            <div className="how-card-body">
              <div className="how-step-num">{step2.stepLabel}</div>
              <h3>{step2.title}</h3>
              <p>
                {step2.text}{' '}
                <a
                  href={step2.linkHref}
                  className="how-card-link"
                  data-cta="beratung"
                  data-cta-location="funktion"
                >
                  {step2.linkLabel}
                </a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
