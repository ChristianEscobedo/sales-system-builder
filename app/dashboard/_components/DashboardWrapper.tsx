"use client";

import dynamic from 'next/dynamic';

const DashboardContent = dynamic(
  () => import('./DashboardContent'),
  { 
    loading: () => <div>Loading dashboard...</div>
  }
);

export function DashboardWrapper() {
  return <DashboardContent />;
} 