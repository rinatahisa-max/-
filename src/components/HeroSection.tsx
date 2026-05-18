import Link from "next/link";
import { brand } from "@/data/site";
import { StatusBadge } from "./StatusBadge";

export function HeroSection() {
  return (
    <section className="section overflow-hidden pt-12">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <span className="kicker">Единая платформа для юридической работы</span>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">{brand.name} — {brand.tagline}</h1>
            <p className="max-w-2xl text-lg leading-8 text-ink/70">{brand.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/marketplace" className="btn-primary">Найти юриста</Link>
            <Link href="/register" className="btn-secondary">Подключиться как юрист</Link>
            <Link href="/contacts" className="btn-secondary">Запросить демо</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["CRM дел", "AI-практика", "Маркетплейс"].map((item) => <StatusBadge key={item} tone="sand">{item}</StatusBadge>)}
          </div>
        </div>
        <div className="card relative p-4 sm:p-6">
          <div className="rounded-3xl bg-ink p-4 text-white shadow-soft">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/50">Рабочее место юриста</p>
                <h2 className="text-xl font-bold">Дело № PR-2048</h2>
              </div>
              <StatusBadge>Подготовка документа</StatusBadge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-xs text-white/45">Клиент</p>
                <p className="mt-1 font-semibold">ООО «Север»</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-xs text-white/45">Дедлайн</p>
                <p className="mt-1 font-semibold">24 мая</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-white p-4 text-ink">
              <p className="text-sm font-semibold text-wine-700">AI-поиск</p>
              <p className="mt-2 text-sm text-ink/65">Найдено 18 релевантных судебных актов по спору о взыскании неустойки.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
