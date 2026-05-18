export function MarketplaceBlock() {
  return (
    <section className="section">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="card">
          <div className="grid gap-3 sm:grid-cols-3">
            {['Специализация', 'Регион', 'Опыт'].map((filter) => <div key={filter} className="rounded-2xl border border-wine-100 p-3 text-sm font-semibold">{filter}</div>)}
          </div>
          <div className="mt-5 rounded-3xl bg-wine-50 p-5">
            <p className="text-sm text-ink/50">Найден специалист</p>
            <h3 className="mt-2 text-2xl font-black">Анна Петрова</h3>
            <p className="mt-1 text-sm text-ink/65">Корпоративные споры · 9 лет · ★ 4.9</p>
            <button className="btn-primary mt-5 w-full">Создать обращение</button>
          </div>
        </div>
        <div>
          <span className="kicker">Маркетплейс</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">Подбор юриста за 2 минуты</h2>
          <p className="mt-5 text-ink/65">Клиент выбирает специалиста по специализации, региону, опыту, рейтингу, отзывам и портфолио, а затем запускает обращение и чат в Правум.</p>
        </div>
      </div>
    </section>
  );
}
