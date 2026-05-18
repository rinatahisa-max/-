import { modules } from "@/data/site";

export function ProductModules() {
  return (
    <section className="section" id="modules">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="kicker">Три модуля</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">CRM, AI и маркетплейс в одной экосистеме</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {modules.map((module, index) => (
            <article key={module.title} className="card">
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-wine-600 font-black text-white">0{index + 1}</div>
              <h3 className="text-2xl font-bold">{module.title}</h3>
              <p className="mt-3 text-ink/65">{module.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/75">
                {module.points.map((point) => <li key={point}>• {point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
