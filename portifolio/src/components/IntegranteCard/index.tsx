// components/integranteCard.tsx
import { IntegrantesProps } from "@/types/types";
import Image from "next/image";
import SocialMedias from "../SocialMedias";

// Função de loader personalizada
const loaderImage = ({ src }: { src: string }) => {
  return src;
};

export default function IntegranteCard({
  integrante,
}: {
  integrante: IntegrantesProps;
}) {
  return (
    <div className="w-[380px] h-[480px] p-8 border flex flex-col gap-2 justify-center items-center border-black rounded-lg shadow-md bg-white">
      <Image
        className=" max-h-[70%] rounded-full"
        loader={loaderImage}
        src={integrante.image}
        alt={integrante.nome}
        width={200}
        height={200}
      />
      <h2 className="mt-2 text-lg font-semibold">{integrante.nome}</h2>
      <SocialMedias github={integrante.github} linkedin={integrante.linkedin} />
    </div>
  );
}
