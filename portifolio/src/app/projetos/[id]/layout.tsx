import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projeto | Portfolio",
  description: "Projeto do portfolio",
};

export default function ProjetoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
