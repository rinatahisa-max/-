import Link from "next/link";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-wine-100/80 bg-sand-50/85 backdrop-blur-xl">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-sm font-medium text-ink/75 transition hover:bg-white hover:text-wine-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden rounded-xl px-3 py-2 text-sm font-semibold text-wine-700 hover:bg-white sm:inline-flex">Войти</Link>
          <Link href="/register" className="btn-primary px-4 py-2.5">Запросить демо</Link>
        </div>
      </div>
    </header>
  );
}
