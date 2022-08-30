import { NextResponse } from 'next/server'

const Middleware = req => {
  const includesDot = req.nextUrl.pathname.includes('.')
  if (
    req.nextUrl.pathname === req.nextUrl.pathname.toLowerCase() ||
    includesDot
  )
    return NextResponse.next()

  return NextResponse.redirect(
    `${req.nextUrl.origin}${req.nextUrl.pathname.toLowerCase()}`,
    301
  )
}

export default Middleware
