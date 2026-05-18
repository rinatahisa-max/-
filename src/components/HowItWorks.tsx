const steps = ["Создайте обращение или дело", "Добавьте документы и задачи", "Используйте AI-поиск и шаблоны", "Общайтесь и синхронизируйте статусы"];

export function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="kicker">Как работает</span>
          <h2 className="mt-5 text-3xl font-black sm:text-5xl">От обращения до результата — в одном маршруте</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="card">
              <span className="text-sm font-black text-wine-600">Шаг {index + 1}</span>
              <p className="mt-4 font-bold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
