import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Правум — на главную">
      <span className="grid size-10 place-items-center rounded-2xl bg-wine-600 text-lg font-black text-white shadow-soft">П</span>
      <span className="flex flex-col leading-none">
        <span className={cn("text-xl font-black tracking-tight", inverse ? "text-white" : "text-ink")}>Правум</span>
        <span className={cn("text-xs font-medium", inverse ? "text-white/60" : "text-wine-600")}>LegalTech platform</span>
      </span>
    </Link>
  );
}
