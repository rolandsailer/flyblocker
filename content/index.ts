import de from './de';
import fr from './fr';
import type { SiteContent } from './types';
import type { Locale } from '@/lib/i18n';

const content: Record<Locale, SiteContent> = { de, fr };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
