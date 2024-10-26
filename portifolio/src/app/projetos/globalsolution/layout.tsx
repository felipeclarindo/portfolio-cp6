import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Solution | Portfolio",
  description: "Global Solution page",
  keywords: "global solution, portifolio",
};

export default function GlobalSolutionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
