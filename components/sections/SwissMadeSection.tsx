import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type SwissMadeSectionProps = {
  locale: Locale;
};

export default function SwissMadeSection({ locale }: SwissMadeSectionProps) {
  const { swissmade } = getContent(locale);

  return (
    <section id="swissmade">
      <div className="container reveal">
        <span className="flag" aria-hidden="true" />
        <p>
          <b>{swissmade.bold}</b> {swissmade.text}
        </p>
      </div>
    </section>
  );
}
