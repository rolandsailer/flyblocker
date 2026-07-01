import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const FR_HOSTS = new Set(['stopmouches.ch', 'www.stopmouches.ch']);
const DE_HOSTS = new Set(['fliegenfrei.ch', 'www.fliegenfrei.ch']);

function normalizeHost(host: string | null): string {
  return (host ?? '').toLowerCase().replace(/:\d+$/, '');
}

export function middleware(request: NextRequest) {
  const host = normalizeHost(request.headers.get('host'));
  const { pathname } = request.nextUrl;

  if (FR_HOSTS.has(host)) {
    if (pathname === '/fr' || pathname.startsWith('/fr/')) {
      const url = request.nextUrl.clone();
      url.pathname = pathname === '/fr' ? '/' : pathname.slice(3) || '/';
      return NextResponse.redirect(url, 301);
    }

    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/fr', request.url));
    }

    return NextResponse.next();
  }

  if (DE_HOSTS.has(host) && (pathname === '/fr' || pathname.startsWith('/fr/'))) {
    const suffix = pathname === '/fr' ? '' : pathname.slice(3);
    return NextResponse.redirect(`https://stopmouches.ch${suffix}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.png|images/|js/).*)'],
};
