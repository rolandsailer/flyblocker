import fs from 'fs';
import path from 'path';
import Script from 'next/script';

function getBodyHtml(): string {
  return fs.readFileSync(path.join(process.cwd(), 'components', 'body.html'), 'utf-8');
}

export default function HomePage() {
  const bodyHtml = getBodyHtml();

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script src="/js/analytics.js" strategy="afterInteractive" />
    </>
  );
}
