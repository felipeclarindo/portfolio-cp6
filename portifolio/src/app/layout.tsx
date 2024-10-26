import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portifolio",
  description:
    "Portifolio com projetos feitos durante as atividades da faculdade.",
  icons: {
    icon: "/favicon.png", // Set the favicon using the Metadata API
    shortcut: "/favicon.png", // Set the shortcut icon as well
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
