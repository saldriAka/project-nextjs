// middleware.ts
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname

    // Jika sudah login dan mencoba akses /login atau /register, redirect ke /dashboard
    if (
      token &&
      (pathname === '/login' || pathname === '/register')
    ) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Batasi akses ke /dashboard hanya untuk role 'admin'
    if (pathname.startsWith('/dashboard')) {
      if (!token || token.role !== 'admin') {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: () => true, // Biarkan semua request lolos, kita handle logika sendiri di atas
    },
  }
)

export const config = {
  matcher: ['/login', '/register', '/dashboard/:path*'],
}
