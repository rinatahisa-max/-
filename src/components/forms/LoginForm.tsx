"use client";

import { FormEvent, useState } from "react";

export function LoginForm() {
  const [message, setMessage] = useState("");
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");
    setMessage(/^\S+@\S+\.\S+$/.test(email) && password.length >= 6 ? "Демо-вход подтверждён. Backend будет подключён позже." : "Проверьте email и пароль от 6 символов.");
  }
  return (
    <form onSubmit={onSubmit} className="card mx-auto max-w-md space-y-4">
      <h1 className="text-3xl font-black">Вход в Правум</h1>
      <input name="email" type="email" placeholder="Email" className="input" />
      <input name="password" type="password" placeholder="Пароль" className="input" />
      <button type="submit" className="btn-primary w-full">Войти</button>
      {message && <p className="text-sm font-semibold text-wine-700">{message}</p>}
    </form>
  );
}
