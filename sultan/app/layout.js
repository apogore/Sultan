import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Header from "@shared/header/header";
import Footer from "@shared/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Султан | Главная",
  description:
    "Султан - это интернет-магазин для продажи товаров для хозяйства и дома.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
