export type ProjectProps = {
  id: number;
  title: string;
  descricao: string;
  link: string;
  author: string | undefined;
  categoria: "checkpoint" | "global solution" | "challenge" | string;
  nota: number;
};

export type IntegrantesProps = {
  id: number;
  nome: string;
  github: string;
  linkedin: string;
  image: string;
};
