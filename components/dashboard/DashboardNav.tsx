import Link from "next/link";
import { FileText } from "lucide-react";

export function DashboardNav() {
  return (
    <nav>
      <Link
        href="/prompts"
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
      >
        <FileText className="h-4 w-4" />
        <span>Sales Pages</span>
      </Link>
      <Link 
        href="/sales-system-prompts" 
        className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg"
      >
        <FileText className="h-4 w-4" />
        <span>Public Sales System</span>
      </Link>
    </nav>
  );
} 