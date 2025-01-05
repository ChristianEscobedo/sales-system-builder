"use client";

import dynamic from 'next/dynamic';
import { LoadingState } from '@/components/ui/loading-state';

const DashboardContent = dynamic(
  () => import('./DashboardContent').then(mod => mod.DashboardContent),
  { 
    loading: () => <LoadingState message="Loading dashboard..." />
  }
);

export function DashboardWrapper() {
  return <DashboardContent />;
} 