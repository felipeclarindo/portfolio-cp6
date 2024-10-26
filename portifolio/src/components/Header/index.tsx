import Image from "next/image";
import Menu from "../Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[120px] flex justify-center items-center gap-2 bg-orange-50 text-black p-4">
       <Link className="absolute left-4 cursor-pointer transition-all duration-300 ease-in-out hover:opacity-65" href="/">
        <Image
          src="/favicon.png"
          alt="icone de uma mão"
          width={75}
          height={75}
        />
      </Link>
      <Menu/>
    </header>
  );
}
