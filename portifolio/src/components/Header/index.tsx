import Image from "next/image";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className="h-[120px] flex justify-center items-center gap-2 bg-orange-50 text-black p-4">
      <Image
        className="absolute left-4"
        src="/favicon.png"
        alt="icone de uma mão"
        width={75}
        height={75}
      />
      <Menu />
    </header>
  );
}
