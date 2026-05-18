"use client";

import { FormEvent, useState } from "react";

export function RegistrationForm() {
  const [message, setMessage] = useState("");
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "");
    const role = String(form.get("role") || "");
    setMessage(name && /^\S+@\S+\.\S+$/.test(email) && role ? "Заявка на регистрацию в Правум принята." : "Заполните имя, роль и корректный email.");
  }
  return (
    <form onSubmit={onSubmit} className="card mx-auto max-w-xl space-y-4">
      <h1 className="text-3xl font-black">Регистрация в Правум</h1>
      <input name="name" placeholder="Имя и фамилия" className="input" />
      <input name="email" type="email" placeholder="Email" className="input" />
      <select name="role" className="input" defaultValue="">
        <option value="" disabled>Выберите роль</option>
        <option>Клиент</option>
        <option>Юрист</option>
        <option>Юридическая фирма</option>
        <option>Юридический отдел</option>
      </select>
      <button type="submit" className="btn-primary w-full">Создать аккаунт</button>
      {message && <p className="text-sm font-semibold text-wine-700">{message}</p>}
    </form>
  );
}
