import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function StatusBadge({ children, tone = "wine" }: { children: ReactNode; tone?: "wine" | "sand" | "green" }) {
  return (
    <span className={cn(
      "inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold",
      tone === "wine" && "bg-wine-100 text-wine-700",
      tone === "sand" && "bg-sand-100 text-ink",
      tone === "green" && "bg-emerald-50 text-emerald-700"
    )}>{children}</span>
  );
}
