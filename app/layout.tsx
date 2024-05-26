import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Даня Шинкаренко",
  description:
    "Даня Шинкаренко - Создаю видео с 2017 года. Всегда стремлюсь к искренности и простоте визуального языка. Работаю в Ростове-на-Дону и Санкт-Петербурге",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextTopLoader color="#ff6e00" height={5} />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
