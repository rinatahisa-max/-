"use client";

import { FormEvent, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nextErrors: Errors = {};
    if (!String(form.get("name") || "").trim()) nextErrors.name = "Укажите имя";
    if (!/^\S+@\S+\.\S+$/.test(String(form.get("email") || ""))) nextErrors.email = "Укажите корректный email";
    if (String(form.get("message") || "").trim().length < 10) nextErrors.message = "Опишите запрос минимум в 10 символов";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      event.currentTarget.reset();
      setSuccess(true);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <div><label className="label">Имя</label><input name="name" className="input mt-2" />{errors.name && <p className="mt-1 text-sm text-wine-600">{errors.name}</p>}</div>
      <div><label className="label">Email</label><input name="email" type="email" className="input mt-2" />{errors.email && <p className="mt-1 text-sm text-wine-600">{errors.email}</p>}</div>
      <div><label className="label">Запрос</label><textarea name="message" rows={4} className="input mt-2" />{errors.message && <p className="mt-1 text-sm text-wine-600">{errors.message}</p>}</div>
      <button className="btn-primary w-full" type="submit">Отправить заявку</button>
      {success && <p className="rounded-2xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">Спасибо! Заявка отправлена, команда Правум свяжется с вами.</p>}
    </form>
  );
}
