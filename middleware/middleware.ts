import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // You can replace this with your own authentication check
  const isAuthenticated = request.cookies.has('auth_token') // Example check

  // Skip authentication check for login and auth routes
  if (
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/auth')
  ) {
    return NextResponse.next()
  }

  // Only apply middleware to studio subdomain
  if (request.nextUrl.host.startsWith('studio')) {
    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      return NextResponse.redirect(url)
    }
  }

  // Continue with the request if authenticated or not on studio subdomain
  return NextResponse.next()
}

// Optional: Define paths where middleware should run
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * - API routes
     * - Static files
     * - Image optimization files
     * - Other public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
