import { Settings, User } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Logo } from "@/components/landing/logo";

export function SessionHeader({
  completed,
  total,
  streakDays,
  title,
}: {
  completed: number;
  total: number;
  streakDays: number;
  title: string;
}) {
  const pct = Math.round((completed / total) * 100);
  const minutesRemaining = Math.max(1, Math.round(((total - completed) / total) * 5));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md supports-backdrop-filter:bg-white/70">
      <div className="mx-auto grid h-16 max-w-5xl grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-6">
        <Logo className="[&_span:last-child]:hidden md:[&_span:last-child]:inline" />

        <p className="justify-self-center text-sm font-semibold whitespace-nowrap text-slate-900">
          {title}
        </p>

        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Settings"
            className="flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <Settings className="size-4.5" />
          </button>
          <Avatar size="sm">
            <AvatarFallback>
              <User className="size-3.5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>
            {completed} / {total} completed
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">{minutesRemaining} min remaining</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-orange-600">
              <span aria-hidden>🔥</span>
              {streakDays} day streak
            </span>
          </div>
        </div>
        <Progress
          value={pct}
          aria-label="Session progress"
          className="mt-2 **:data-[slot=progress-track]:h-1.5"
        />
      </div>
    </header>
  );
}
