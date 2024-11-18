import { Inter } from "next/font/google";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import Header from "@shared/header/header";
import Footer from "@shared/footer/footer";
import "@styles/globals.css";
const inter = Inter({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata = {
  title: "Султан | Главная",
  description:
    "Султан - это интернет-магазин для продажи товаров для хозяйства и дома.",
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
