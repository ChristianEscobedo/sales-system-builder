"use client";

import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-blue-500/3" />
      
      {/* Content */}
      <div className="container relative flex h-screen flex-col items-center justify-center">
        <Card className="w-full max-w-[400px] bg-white/5 border-white/10 p-8">
          <div className="grid gap-6">
            {children}
          </div>
        </Card>
      </div>
    </div>
  );
}