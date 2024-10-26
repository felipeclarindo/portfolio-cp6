import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrantes | Portfolio",
  description: "Integrantes page",
  keywords: "integrantes, portifolio",
};

export default function IntegrantesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
