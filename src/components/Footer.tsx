import Link from "next/link";
import { navItems } from "@/data/site";
import { Logo } from "./Logo";

const legal = [
  { href: "/privacy", label: "Конфиденциальность" },
  { href: "/terms", label: "Условия" },
  { href: "/personal-data", label: "Персональные данные" }
];

export function Footer() {
  return (
    <footer className="border-t border-wine-100 bg-ink text-white">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_2fr]">
        <div className="space-y-4">
          <Logo inverse />
          <p className="max-w-md text-sm leading-6 text-white/70">Правум объединяет CRM для юридических дел, AI-ядро и маркетплейс юристов в одном защищённом web-интерфейсе.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold">Платформа</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              {navItems.slice(0, 6).map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Компания</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              <Link href="/about" className="hover:text-white">О нас</Link>
              <Link href="/blog" className="hover:text-white">Блог</Link>
              <Link href="/contacts" className="hover:text-white">Контакты</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Правовая информация</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/70">
              {legal.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">© 2026 Правум. Все права защищены.</div>
    </footer>
  );
}
