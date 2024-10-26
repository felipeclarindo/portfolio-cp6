import Image from "next/image";
import ErroImage from "../images/error.png";

export default function NotFoundPage() {
  return (
    <div className="bg-slate-200 h-[100vh] gap-0 flex flex-col justify-center items-center">
      <h1 className="font-bold text-[40px]">404 - Page Not Found</h1>
      <Image src={ErroImage} alt="Erro 404" width={250} height={250} />
    </div>
  );
}
