import Link from "next/link";

export function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Link
        href="/prompts"
        className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-foreground/50 transition-colors"
      >
        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold tracking-tight">
              Generate New Prompt
            </h3>
            <p className="text-sm text-muted-foreground">
              Create a new sales system prompt with our guided form.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Get started →
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Add more cards here if needed */}
    </div>
  );
} 