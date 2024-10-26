import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-[130px] px-4 py-8 bg-orange-50 flex justify-center items-center flex-col">
      <Image
        src="/favicon.png"
        alt="Mão enconstando em bola de codigo"
        width={90}
        height={90}
      />
      <p>Todos direitos reservados.</p>
    </footer>
  );
}
