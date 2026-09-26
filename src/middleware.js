import { NextResponse } from 'next/server';

/** Keep HTML fresh — Hostinger/Next were caching the homepage for a year. */
export function middleware() {
  const res = NextResponse.next();
  res.headers.set('Cache-Control', 'public, max-age=0, s-maxage=0, must-revalidate');
  res.headers.set('CDN-Cache-Control', 'no-store');
  res.headers.set('Vercel-CDN-Cache-Control', 'no-store');
  return res;
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|wp-content|website-images|wp-includes|favicon.ico).*)'],
};
