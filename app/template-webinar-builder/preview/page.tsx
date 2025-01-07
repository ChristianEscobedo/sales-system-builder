"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { WebinarPreview } from "@/components/webinar/WebinarPreview";
import { defaultWebinarData } from "@/lib/defaults/webinar";
import type { WebinarData } from '@/types/webinar';

export default function PreviewPage() {
  return (
    <Suspense fallback={<PreviewLoading />}>
      <PreviewContent />
    </Suspense>
  );
}

function PreviewContent() {
  const searchParams = useSearchParams();
  const dataParam = searchParams?.get("data");
  
  const webinarData: WebinarData = dataParam
    ? JSON.parse(decodeURIComponent(dataParam))
    : defaultWebinarData;

  return (
    <main className="min-h-screen bg-[#050505]">
      <WebinarPreview data={webinarData} />
    </main>
  );
}

function PreviewLoading() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="text-white">Loading preview...</div>
    </main>
  );
}