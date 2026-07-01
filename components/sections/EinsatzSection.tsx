import { getContent } from '@/content';
import { tabImageSrc } from '@/lib/siteImages';
import type { Locale } from '@/lib/i18n';

type EinsatzSectionProps = {
  locale: Locale;
};

export default function EinsatzSection({ locale }: EinsatzSectionProps) {
  const { einsatz } = getContent(locale);
  const [firstTab] = einsatz.tabs;
  const tabCaptions = einsatz.tabs.map((tab) => [tab.captionTitle, tab.caption]);

  return (
    <section
      id="einsatz"
      className="section-grey"
      data-tab-captions={JSON.stringify(tabCaptions)}
    >
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">{einsatz.eyebrow}</p>
          <h2>
            {einsatz.title.before}
            <b>{einsatz.title.bold}</b>
          </h2>
        </div>
        <div className="reveal">
          <div className="tabs" role="tablist">
            {einsatz.tabs.map((tab, index) => (
              <button
                key={tab.imageSrc}
                className={`tab${index === 0 ? ' active' : ''}`}
                role="tab"
                data-tab={index}
                type="button"
              >
                {tab.label.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {lineIndex > 0 && <br />}
                    {line}
                  </span>
                ))}
                <small>{tab.subtitle}</small>
              </button>
            ))}
          </div>
          <div className="tab-panel">
            {einsatz.tabs.map((tab, index) => (
              <img
                key={tab.imageSrc}
                className={`tab-img${index === 0 ? ' active' : ''}`}
                data-img={index}
                src={tabImageSrc(tab.imageSrc)}
                alt={tab.imageAlt}
              />
            ))}
            <div className="tab-caption" id="tabCaption">
              <b>{firstTab.captionTitle}</b>
              {firstTab.caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
