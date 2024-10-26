import Link from "next/link";
import Image from "next/image";

export default function SocialMedias({
  github,
  linkedin,
}: {
  github: string;
  linkedin: string;
}) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link
        target="_blank"
        href={github}
        className="transition-all duration-300 ease-in-out hover:opacity-65"
      >
        <Image
          src="/images/github.svg"
          alt="Icone com o fundo preto e um gato"
          width={40}
          height={40}
        />
      </Link>
      <Link
        target="_blank"
        href={linkedin}
        className="transition-all duration-300 ease-in-out hover:opacity-65"
      >
        <Image
          src={"/images/linkedin.svg"}
          alt="Icone com In em um fundo azul"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}
