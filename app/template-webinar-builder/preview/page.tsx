"use client";

import { WebinarPresentation } from "@/components/webinar/WebinarPresentation";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import type { WebinarData } from "@/types/webinar";

export default function WebinarPreviewPage() {
  const [data, setData] = useState<WebinarData | null>(null);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const webinarData = searchParams.get("data");
    if (webinarData) {
      try {
        setData(JSON.parse(decodeURIComponent(webinarData)));
      } catch (error) {
        console.error("Failed to parse webinar data:", error);
      }
    }
  }, [searchParams]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white">
        Loading presentation...
      </div>
    );
  }

  return <WebinarPresentation data={data} />;
}