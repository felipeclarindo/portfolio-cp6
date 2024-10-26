import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastrar Projetos | Portfolio",
  description: "Cadastro de projetos no portifólio",
  keywords: "cadastro, projetos, portifolio",
};

export default function CadastrarProjetoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
