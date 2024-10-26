import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkpoints | Portfolio",
  description: "Checkpoints page",
  keywords: "checkpoints, portifolio",
};

export default function CheckPointsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
