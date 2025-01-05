"use client";

import { LoadingSpinner } from "./loading-spinner";

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = "Loading..." }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <LoadingSpinner size={32} className="text-primary mb-4" />
      <p className="text-muted-foreground animate-pulse">{message}</p>
    </div>
  );
} 