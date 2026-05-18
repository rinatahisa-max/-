import { faq } from "@/data/site";

export function FAQ() {
  return (
    <section className="section bg-white/45">
      <div className="container max-w-4xl">
        <span className="kicker">FAQ</span>
        <h2 className="mt-5 text-3xl font-black sm:text-5xl">Частые вопросы</h2>
        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <details key={item.question} className="card group">
              <summary className="cursor-pointer list-none text-lg font-bold">{item.question}</summary>
              <p className="mt-4 text-ink/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
