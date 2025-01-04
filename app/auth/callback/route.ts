import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
      const cookieStore = cookies();
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
      
      const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code);
      
      if (error) {
        console.error('Auth callback error:', error);
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
      }

      if (session) {
        console.log('Session established in callback:', {
          user: session.user.email,
          expires: session.expires_at
        });
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }

    // If no code or session, redirect to sign in
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  } catch (e) {
    console.error('Callback error:', e);
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }
} 