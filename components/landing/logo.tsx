import { BookOpenText } from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-600/20">
        <BookOpenText className="size-4.5" strokeWidth={2.25} />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-slate-900">
        Daily English Patterns
      </span>
    </span>
  );
}
