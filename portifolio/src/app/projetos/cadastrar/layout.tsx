import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastrar Projeto | Portfolio",
  description: "Cadastro de projeto no portfólio",
  keywords: "cadastro, projeto, portfólio",
};

export default function CadastrarProjetoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
