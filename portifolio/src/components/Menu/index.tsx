"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-5">
        <li
          className={`font-bold text-lg transition-all duration-300 hover:opacity-65 hover:underline hover:underline-offset-2 ${
            pathname === "/" ? "underline underline-offset-2 opacity-75" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`font-bold text-lg transition-all duration-300 hover:opacity-65 hover:underline hover:underline-offset-2 ${
            pathname === "/projetos"
              ? "underline underline-offset-2 opacity-75"
              : ""
          }`}
        >
          <Link href="/projetos">Projetos</Link>
        </li>
        <li
          className={`font-bold text-lg transition-all duration-300 hover:opacity-65 hover:underline hover:underline-offset-2 ${
            pathname === "/integrantes"
              ? "underline underline-offset-2 opacity-75"
              : ""
          }`}
        >
          <Link href="/integrantes">Integrantes</Link>
        </li>
      </ul>
    </nav>
  );
}
