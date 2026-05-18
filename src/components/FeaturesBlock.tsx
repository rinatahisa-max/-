import { features } from "@/data/site";
import { FeatureCard } from "./FeatureCard";

export function FeaturesBlock() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="kicker">Возможности</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">Чистый интерфейс для сложной юридической работы</h2>
          <p className="mt-5 text-ink/65">Карточки, таблицы, статусы, шаблоны и коммуникации собраны так, чтобы юрист видел главное и не терял контекст.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => <FeatureCard key={feature} title={feature} />)}
        </div>
      </div>
    </section>
  );
}
