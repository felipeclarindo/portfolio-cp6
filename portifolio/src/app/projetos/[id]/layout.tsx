import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkpoints | Portfolio",
  description: "Avaliação de projetos de CheckPoint",
  keywords: "checkpoint, avaliação, projetos",
};

export default function EditarProjetosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return { children };
}
