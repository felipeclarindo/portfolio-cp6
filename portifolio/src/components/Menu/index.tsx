import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-5 ">
        <li className="font-bold text-lg transition-all hover:opacity-65 duration-300 hover:underline hover:underline-offset-2">
          <Link href="/">Home</Link>
        </li>
        <li className="font-bold text-lg transition-all hover:opacity-65 duration-300 hover:underline hover:underline-offset-2">
          <Link href="/projetos">Projetos</Link>
        </li>
        <li className="font-bold text-lg transition-all hover:opacity-65 duration-300 hover:underline hover:underline-offset-2">
          <Link href="/integrantes">Integrantes</Link>
        </li>
      </ul>
    </nav>
  );
}
