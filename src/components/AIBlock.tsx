export function AIBlock() {
  return (
    <section className="section bg-white/50">
      <div className="container grid gap-10 lg:grid-cols-2">
        <div>
          <span className="kicker">AI-ядро</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">AI-поиск практики и генерация проектов документов</h2>
          <p className="mt-5 text-ink/65">Правум помогает быстро находить юридическую информацию, анализировать судебные акты и готовить черновики, оставляя финальное решение за специалистом.</p>
        </div>
        <div className="card bg-ink text-white">
          <div className="rounded-2xl bg-white/10 p-4 text-sm text-white/70">Запрос: практика по снижению неустойки в B2B-договоре</div>
          <div className="mt-4 grid gap-3">
            {["23 релевантных акта", "5 устойчивых правовых позиций", "Проект претензии готов к проверке"].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-4 font-semibold text-ink">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
