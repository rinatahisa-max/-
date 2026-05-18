import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="rounded-[2rem] bg-wine-600 p-8 text-center text-white shadow-soft sm:p-12">
          <h2 className="text-3xl font-black sm:text-5xl">Запустите юридическую работу в Правум</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">Подключите CRM, AI-анализ и маркетплейс в едином интерфейсе для клиентов, юристов и юридических отделов.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/marketplace" className="btn-secondary">Найти юриста</Link>
            <Link href="/contacts" className="btn-secondary">Запросить демо</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
