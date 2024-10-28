import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editar | Portfolio",
  description: "Pagina para Editar Projetos",
  keywords: "projeto, avaliação, projetos, editar",
};

export default function EditarProjetosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
