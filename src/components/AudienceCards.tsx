import { audiences } from "@/data/site";

export function AudienceCards() {
  return (
    <section className="section bg-white/45">
      <div className="container">
        <span className="kicker">Для кого</span>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((audience) => (
            <article key={audience.title} className="card transition hover:-translate-y-1 hover:border-wine-200">
              <h3 className="text-xl font-bold text-wine-700">{audience.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink/65">{audience.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
