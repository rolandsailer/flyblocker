import Script from 'next/script';
import PhoneOverlay from '@/components/PhoneOverlay';
import SiteEffects from '@/components/SiteEffects';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import EinsatzSection from '@/components/sections/EinsatzSection';
import ErstberatungSection from '@/components/sections/ErstberatungSection';
import FunktionSection from '@/components/sections/FunktionSection';
import HeroSection from '@/components/sections/HeroSection';
import OptionenSection from '@/components/sections/OptionenSection';
import ProdukteblattSection from '@/components/sections/ProdukteblattSection';
import ReferenzenSection from '@/components/sections/ReferenzenSection';
import ReferenzprojektSection from '@/components/sections/ReferenzprojektSection';
import SwissMadeSection from '@/components/sections/SwissMadeSection';
import TeamSection from '@/components/sections/TeamSection';
import type { Locale } from '@/lib/i18n';

type SitePageProps = {
  locale: Locale;
};

export default function SitePage({ locale }: SitePageProps) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <FunktionSection locale={locale} />
        <EinsatzSection locale={locale} />
        <OptionenSection locale={locale} />
        <SwissMadeSection locale={locale} />
        <ReferenzenSection locale={locale} />
        <ReferenzprojektSection locale={locale} />
        <ProdukteblattSection locale={locale} />
        <ErstberatungSection locale={locale} />
        <TeamSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <PhoneOverlay locale={locale} />
      <SiteEffects />
      <Script src="/js/analytics.js" strategy="afterInteractive" />
    </>
  );
}
