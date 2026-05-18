import { pageCopy } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { PricingCards } from "@/components/PricingCards";

export default function GenericPage({ slug }: { slug: string }) {
  const copy = pageCopy[slug];
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="kicker">Правум</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">{copy.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/65">{copy.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {copy.bullets.map((bullet) => <span key={bullet} className="rounded-full bg-wine-100 px-4 py-2 text-sm font-semibold text-wine-700">{bullet}</span>)}
          </div>
        </div>
        <div className="card">
          <div className="overflow-hidden rounded-3xl border border-wine-100">
            <div className="grid grid-cols-3 bg-wine-50 text-xs font-semibold text-wine-700">
              <div className="p-3">Дело</div><div className="p-3">Статус</div><div className="p-3">Ответственный</div>
            </div>
            {[['PR-102', 'Изучение документов', 'Юрист'], ['PR-204', 'Подготовка документа', 'AI + юрист'], ['PR-331', 'Назначено заседание', 'Команда']].map((row) => (
              <div key={row[0]} className="grid grid-cols-3 border-t border-wine-100 text-sm">
                {row.map((cell) => <div key={cell} className="p-3">{cell}</div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
      {slug === "contacts" && <div className="container mt-10 max-w-2xl"><ContactForm /></div>}
      {slug === "pricing" && <PricingCards />}
    </section>
  );
}
