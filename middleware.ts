import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export default function middleware(req: NextRequest) {
  const { nextUrl } = req;
  // @ts-ignore - geo is available on Vercel Edge but missing in standard NextRequest type
  const geo = req.geo;
  const country = geo?.country || 'IT'; // Fallback to IT if undetected

  // Check if user has manually selected a country before (via cookie)
  // We will need to set this cookie in CountrySelector
  const manualCountry = req.cookies.get('manual_country')?.value;

  if (manualCountry) {
    // If cookie exists and we are at root, redirect if needed
    // But since we are only matching '/', we just check if manualCountry is NOT 'it'
    if (manualCountry === 'de') return NextResponse.redirect(new URL('/de', nextUrl));
    if (manualCountry === 'ch') return NextResponse.redirect(new URL('/ch', nextUrl));
    if (manualCountry === 'se') return NextResponse.redirect(new URL('/se', nextUrl));
    if (manualCountry === 'no') return NextResponse.redirect(new URL('/no', nextUrl));
    return NextResponse.next();
  }

  // Geo-based Redirection
  switch (country) {
    case 'CH': // Switzerland
      return NextResponse.redirect(new URL('/ch', nextUrl));

    case 'DE': // Germany
    case 'AT': // Austria
      return NextResponse.redirect(new URL('/de', nextUrl));

    case 'SE': // Sweden
      return NextResponse.redirect(new URL('/se', nextUrl));

    case 'NO': // Norway
      return NextResponse.redirect(new URL('/no', nextUrl));

    default:
      // IT and others stay at root
      return NextResponse.next();
  }
}
