import { getContent } from '@/content';
import type { Locale } from '@/lib/i18n';

type PhoneOverlayProps = {
  locale: Locale;
};

export default function PhoneOverlay({ locale }: PhoneOverlayProps) {
  const { phoneOverlay } = getContent(locale);

  return (
    <div
      id="phone-overlay"
      className="phone-overlay"
      hidden
      role="dialog"
      aria-labelledby="phone-overlay-title"
      aria-modal="true"
    >
      <div className="phone-overlay-backdrop" />
      <div className="phone-overlay-panel">
        <button type="button" className="phone-overlay-close" aria-label={phoneOverlay.closeLabel}>
          ×
        </button>
        <p className="phone-overlay-label">{phoneOverlay.label}</p>
        <h3 id="phone-overlay-title">{phoneOverlay.title}</h3>
        <a href="tel:+41525211020" className="phone-overlay-number">
          +41 (0) 52 521 10 20
        </a>
        <p className="phone-overlay-hint">{phoneOverlay.hint}</p>
      </div>
    </div>
  );
}
