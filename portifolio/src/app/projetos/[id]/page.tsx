"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
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
  const [loading, setLoading] = useState(true);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : "http://localhost:3000";

  useEffect(() => {
    const getProjeto = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/projetos/${Number(id)}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar o projeto.");
        }
        const data = await response.json();
        setProjeto(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getProjeto();
  }, [id, apiUrl]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="h-[100vh] px-4 py-8 flex flex-col items-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl border-2 border-black">
        <h1 className="font-bold text-4xl mb-4 text-center">{projeto.title}</h1>
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
        href={`/projetos/editar/${projeto.id}`}
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
