import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Check if the request is for the login page
  if (pathname === '/login') {
    return NextResponse.next();
  }
  
  // Check if the session cookie exists
  const session = req.cookies.get('session');
  
  // If the session cookie is not found, redirect to the login page
  if (!session) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // If the session cookie exists, allow the request to proceed
  return NextResponse.next();
}

// Specify the paths where the middleware should be applied
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
