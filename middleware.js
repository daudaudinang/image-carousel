import { NextResponse } from "next/server";

export function middleware(request) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
`;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set(
    'Content-Security-Policy',
    // Replace newline characters and spaces
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  );
  
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const searchValue = request.nextUrl.searchParams.get('value');
  if(typeof searchValue === "string") {
    requestHeaders.set("x-search", encodeURIComponent(searchValue));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}