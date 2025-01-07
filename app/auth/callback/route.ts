export const dynamic = 'force-dynamic'
export const runtime = 'edge'

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const searchParams = new URLSearchParams(new URL(request.url).search)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect('/');
  }

  try {
    await supabase.auth.exchangeCodeForSession(code)
    return NextResponse.redirect('/dashboard')
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.redirect('/')
  }
} 