import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge | Portfolio",
  description: "Challenge page",
  keywords: "challenge, portifolio",
};

export default function ChallengeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
