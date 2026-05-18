import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["cyrillic", "latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Правум — LegalTech-платформа",
  description:
    "CRM для юридических дел, AI-анализ судебной практики, генерация документов и быстрый подбор юриста в одном цифровом пространстве."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
