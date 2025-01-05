"use client";

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import { LoadingState } from '@/components/ui/loading-state';

// Define public routes that don't require authentication
const PUBLIC_ROUTES = [
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/callback',
  '/sales-system-prompts' // Add the public sales system page
];

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      const isPublicRoute = PUBLIC_ROUTES.some(route => pathname?.startsWith(route));
      const isDashboardRoute = pathname?.startsWith('/dashboard');

      if (!user && isDashboardRoute) {
        router.push('/auth/sign-in');
      } else if (user && pathname?.startsWith('/auth') && !pathname?.startsWith('/auth/callback')) {
        router.push('/dashboard');
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <LoadingState message="Checking authentication..." />
      </div>
    );
  }

  return <>{children}</>;
} 