import type { Metadata } from "next";

import { SessionView } from "@/components/session/session-view";

export const metadata: Metadata = {
  title: "Today's Session — Daily English Patterns",
  description: "Practice today's 10 AI-generated sentences in 5 minutes.",
};

export default function SessionPage() {
  return <SessionView />;
}
