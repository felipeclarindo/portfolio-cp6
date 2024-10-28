"use client";

import { ProjectProps } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { use } from "react";

export default function ProjetoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [projeto, setProjeto] = useState<ProjectProps>({
    author: "",
    categoria: "",
    descricao: "",
    id: 0,
    link: "",
    nota: 0,
    title: "",
  });

  useEffect(() => {
    const getProjeto = async () => {
      try {
        const response = await fetch(`/api/projetos/${Number(id)}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar o projeto.");
        }
        const data = await response.json();
        setProjeto(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProjeto();
  }, [id]);

  return (
    <div className="h-[100vh] px-4 py-8 flex flex-col items-center">
      <h1 className="font-bold text-4xl mb-6">{projeto.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Detalhes do Projeto</h2>
        <p className="mb-2">
          <strong>Autor:</strong> {projeto.author}
        </p>
        <p className="mb-2">
          <strong>Descrição:</strong> {projeto.descricao}
        </p>
        <p className="mb-2">
          <strong>Link:</strong>{" "}
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {projeto.link}
          </a>
        </p>
        <p className="mb-2">
          <strong>Categoria:</strong> {projeto.categoria}
        </p>
        <p className="mb-2">
          <strong>Nota:</strong> {projeto.nota}
        </p>
      </div>
      <Link
        className="mt-6 font-bold px-8 py-2 text-xl bg-gray-800 text-orange-50 rounded-md hover:opacity-75 transition"
        href={`/projetos/${projeto.id}/editar`}
      >
        Editar Projeto
      </Link>
      <Link
        className="mt-2 font-bold px-8 py-2 text-xl bg-red-600 text-white rounded-md hover:opacity-75 transition"
        href={`/projetos`}
      >
        Voltar para Projetos
      </Link>
    </div>
  );
}
