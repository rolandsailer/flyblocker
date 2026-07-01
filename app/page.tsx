import SitePage from '@/components/SitePage';
import { buildMetadata } from '@/lib/buildMetadata';

export const metadata = buildMetadata('de');

export default function HomePage() {
  return <SitePage locale="de" />;
}
