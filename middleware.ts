import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // List of query params to remove
  const paramsToRemove = ['utm_source', 'utm_medium', 'utm_campaign'];

  paramsToRemove.forEach((p) => url.searchParams.delete(p));

  if (url.toString() !== req.url) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
