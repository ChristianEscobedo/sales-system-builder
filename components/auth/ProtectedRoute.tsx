"use client";

import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname, useRouter } from 'next/navigation';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user && pathname?.startsWith('/dashboard')) {
        router.push('/auth/sign-in');
      } else if (user && pathname?.startsWith('/auth')) {
        router.push('/dashboard');
      }
    }
  }, [user, loading, pathname, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
} 