export function FeatureCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-wine-100 bg-white p-5 shadow-sm">
      <div className="mb-4 size-2 rounded-full bg-wine-500" />
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/60">Инструмент встроен в общий процесс дела, коммуникаций и документов Правум.</p>
    </div>
  );
}
