"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { ProjectProps } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GrShare as View } from "react-icons/gr";
import { RiDeleteBin2Line as Excluir } from "react-icons/ri";

export default function CategoryFilter({
  category,
}: {
  category: "Checkpoint" | "Challenge" | "Global Solution";
}) {
  const [categoryProjects, setCategoryProjects] = useState<ProjectProps[]>([]);
  const [visibleCategory, setVisibleCategory] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : "http://localhost:3000";

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/projetos`);
        const data = await response.json();
        const filteredCategory = data.filter(
          (project: ProjectProps) =>
            project.categoria.toLowerCase() === category.toLowerCase()
        );
        setCategoryProjects(filteredCategory);
        setVisibleCategory(filteredCategory.slice(0, 5));
      } catch (error) {
        console.error("Erro ao carregar Category:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [category, apiUrl]);

  const handleLoadMore = () => {
    const newVisibleCount = visibleCount + 5;
    setVisibleCount(newVisibleCount);
    setVisibleCategory(categoryProjects.slice(0, newVisibleCount));
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/projetos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Projeto excluído com sucesso.");
        setCategoryProjects((prevProjects) =>
          prevProjects.filter((project) => project.id !== id)
        );
        setVisibleCategory((prevProjects) =>
          prevProjects
            .filter((project) => project.id !== id)
            .slice(0, visibleCount)
        );
      }
    } catch (error) {
      console.error("Falha ao remover o projeto: ", error);
    }
  };

  return (
    <div className="h-[100vh] px-4 py-8 flex flex-col items-center">
      <h1 className="font-bold text-[40px] mb-6">{category}</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="w-full max-w-4xl overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300 shadow-md">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-4 border border-gray-300">ID</th>
                  <th className="p-4 border border-gray-300">Título</th>
                  <th className="p-4 border border-gray-300">Descrição</th>
                  <th className="p-4 border border-gray-300">Nota</th>
                  <th className="p-4 border border-gray-300">Autor</th>
                  <th className="p-4 border border-gray-300">Categoria</th>
                  <th className="p-4 border border-gray-300">Link</th>
                  <th className="p-4 border w-[150px] border-gray-300 text-center">
                    View | Excluir
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleCategory.length > 0 ? (
                  visibleCategory.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-100">
                      <td className="p-4 border border-gray-300 text-center">
                        {project.id}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        {project.title}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        {project.descricao}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        {project.nota}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        {project.author}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        {project.categoria}
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline underline-offset-2 transition-all duration-300 ease-in-out hover:opacity-60"
                        >
                          Github
                        </Link>
                      </td>
                      <td className="p-4 border border-gray-300 text-center">
                        <Link href={`/projetos/${project.id}`}>
                          <View className="inline text-xl text-blue-600 mr-2 cursor-pointer transition-all ease-in-out duration-300 hover:opacity-60" />
                        </Link>
                        |
                        <Excluir
                          onClick={() => handleDelete(project.id)}
                          className="inline text-xl text-red-600 ml-2 cursor-pointer transition-all ease-in-out duration-300 hover:opacity-60"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={8}
                      className="p-4 text-center border border-gray-300"
                    >
                      Nenhum projeto encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className="bg-gray-200 w-full">
                  <td
                    colSpan={8}
                    className="p-4 text-right border border-gray-300"
                  >
                    Quantidade de projetos: {categoryProjects.length}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          {visibleCategory.length < categoryProjects.length && (
            <button
              className="mt-4 font-bold px-8 py-4 text-xl bg-gray-800 text-orange-50 rounded-md hover:opacity-75 transition"
              onClick={handleLoadMore}
            >
              Carregar mais
            </button>
          )}
          <Link
            className="mt-8 font-bold px-8 py-4 text-xl bg-gray-800 text-orange-50 rounded-md hover:opacity-75 transition"
            href="/projetos/cadastrar"
          >
            Adicionar
          </Link>
        </>
      )}
    </div>
  );
}
