export function TrustBlock() {
  return (
    <section className="section">
      <div className="container">
        <div className="card grid gap-8 bg-ink text-white lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">Доверие и контроль</span>
            <h2 className="mt-5 text-3xl font-black">Сдержанный премиальный интерфейс без визуального шума</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Роли и доступы', 'Защищённый чат', 'Отчёты и выгрузки'].map((item) => <div key={item} className="rounded-2xl bg-white/10 p-5 font-semibold">{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
