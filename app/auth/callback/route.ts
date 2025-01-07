export const dynamic = 'force-dynamic'
export const runtime = 'edge'

import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    const origin = requestUrl.origin

    if (!code) {
      return NextResponse.redirect(`${origin}/`)
    }

    const supabase = createRouteHandlerClient({ cookies })
    await supabase.auth.exchangeCodeForSession(code)
    return NextResponse.redirect(`${origin}/dashboard`)
  } catch (error) {
    console.error('Auth callback error:', error)
    return NextResponse.redirect(`${origin}/`)
  }
} 