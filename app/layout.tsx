import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://fliegenblocker.relag.ch';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Fliegenblocker – Luftschleier gegen Fliegen & Insekten | RELAG AG',
  description:
    'Effiziente Abschirmung gegen Fliegen, Mücken & Co. Umluftschleieranlagen von RELAG schützen Eingänge von Hotellerie, Gastronomie, Bäckerei und Grossküchen – ganz ohne Vorhänge oder Insektizide.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: siteUrl,
    siteName: 'Fliegenblocker – RELAG AG',
    title: 'Fliegenblocker – Luftschleier gegen Fliegen & Insekten',
    description:
      'Ein unsichtbarer Luftvorhang hält Fliegen, Mücken & Wespen draussen — diskret in die Architektur integriert, Swiss Made seit 1971.',
    images: [{ url: '/images/lodge.jpg', width: 1920, height: 1080, alt: 'RELAG Luftschleier Installation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fliegenblocker – Luftschleier gegen Fliegen & Insekten',
    description:
      'Umluftschleieranlagen von RELAG schützen Eingänge in Hotellerie, Gastronomie und Grossküchen.',
    images: ['/images/lodge.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ed1c24',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
