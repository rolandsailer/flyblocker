import SitePage from '@/components/SitePage';
import { buildMetadata } from '@/lib/buildMetadata';

export const metadata = buildMetadata('fr');

export default function FrenchHomePage() {
  return <SitePage locale="fr" />;
}
