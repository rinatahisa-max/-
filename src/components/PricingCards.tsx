import Link from "next/link";
import { pricing } from "@/data/site";
import { cn } from "@/lib/utils";

export function PricingCards() {
  return (
    <section className="section bg-white/45">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="kicker">Тарифы</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">Пакеты для практики, команды и корпорации</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article key={plan.name} className={cn("card flex flex-col", plan.featured && "border-wine-500 bg-wine-900 text-white")}>
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className={cn("mt-2 text-sm", plan.featured ? "text-white/70" : "text-ink/60")}>{plan.description}</p>
              <p className="mt-6 text-3xl font-black">{plan.price}</p>
              <ul className={cn("mt-6 flex-1 space-y-3 text-sm", plan.featured ? "text-white/80" : "text-ink/70")}>
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              <Link href="/contacts" className={cn("mt-7", plan.featured ? "btn-secondary" : "btn-primary")}>Запросить демо</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
