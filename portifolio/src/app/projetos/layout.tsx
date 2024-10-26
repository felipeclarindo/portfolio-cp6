import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portifolio",
  description:
    "Portifolio com projetos feitos durante as atividades da faculdade.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
