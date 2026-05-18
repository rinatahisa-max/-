import { statuses } from "@/data/site";
import { StatusBadge } from "./StatusBadge";

export function StatusSyncBlock() {
  return (
    <section className="section bg-wine-900 text-white">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white">Синхронизация статусов</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">Юрист меняет статус в CRM — клиент сразу видит обновление</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">Когда юрист обновляет этап дела в рабочем месте Правум, статус автоматически появляется в карточке дела клиента и в защищённом чате. Клиент понимает, что происходит, а юристу не нужно дублировать сообщения вручную.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {statuses.map((status) => <StatusBadge key={status} tone={status === "Подготовка документа" ? "wine" : "sand"}>{status}</StatusBadge>)}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-5 text-ink shadow-soft">
            <p className="text-sm font-semibold text-wine-700">CRM юриста</p>
            <div className="mt-5 rounded-2xl border border-sand-200 p-4">
              <p className="text-xs uppercase tracking-wide text-ink/40">Дело</p>
              <p className="mt-1 font-bold">Взыскание задолженности</p>
              <div className="mt-4 rounded-2xl bg-wine-50 p-4">
                <p className="text-sm text-ink/55">Статус дела:</p>
                <p className="mt-1 text-lg font-black text-wine-700">Подготовка документа</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-sand-50 p-5 text-ink shadow-soft md:mt-10">
            <p className="text-sm font-semibold text-wine-700">Чат клиента</p>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white p-4 text-sm shadow-sm">Здравствуйте! Документы получены.</div>
              <div className="rounded-2xl bg-wine-600 p-4 text-sm font-semibold text-white">Статус дела изменён: Подготовка документа</div>
              <div className="rounded-2xl bg-white p-4 text-sm shadow-sm">Я увижу проект в карточке дела?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
