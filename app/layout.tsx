import type { Metadata, Viewport } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ed1c24',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-CH">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
