import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Султан | Главная",
  description: "Султан - это интернет-магазин для продажи товаров для хозяйства и дома.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
