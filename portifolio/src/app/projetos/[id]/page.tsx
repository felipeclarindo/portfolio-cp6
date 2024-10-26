"use client";

import { ProjectProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarprojetosPage({
  params,
}: {
  params: { id: number };
}) {
  const navigate = useRouter();

  const [projeto, setProjeto] = useState<ProjectProps>({
    id: 0,
    title: "",
    descricao: "",
    link: "",
    author: "",
    categoria: "",
    nota: 0,
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [categorias] = useState(["checkpoint", "global solution", "challenge"]);

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/projetos/${params.id}`
      );
      const data = await response.json();
      setProjeto(data);
    };
    chamadaApi();
  }, [params]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/projetos/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(projeto),
        }
      );

      if (response.ok) {
        alert("Projeto atualizado com sucesso!");
        setProjeto({
          id: 0,
          title: "",
          descricao: "",
          link: "",
          author: "",
          categoria: "",
          nota: 0,
        });
        navigate.push("/projetos");
      }
    } catch (error) {
      console.error("Erro na atualização do projeto...", error);
    }
  };

  const handleCategoriaSelect = (categoria: string) => {
    setProjeto({ ...projeto, categoria });
    setShowDropdown(false);
  };

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-[40px] mb-8">
        Editar projetos
      </h1>
      <div className="flex flex-col justify-center items-center max-w-full">
        <form onSubmit={handleSubmit} className="w-[350px] mx-auto">
          <div className="mb-5">
            <label
              htmlFor="projetoTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Titulo
            </label>
            <input
              type="text"
              id="projetoTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="title"
              value={projeto.title}
              onChange={(e) =>
                setProjeto({ ...projeto, title: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="projetoDescricao"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Descrição
            </label>
            <input
              type="text"
              id="projetoDescricao"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="descricao"
              value={projeto.descricao}
              onChange={(e) =>
                setProjeto({ ...projeto, descricao: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="projetoLink"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Link
            </label>
            <input
              type="text"
              id="projetoLink"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="link"
              value={projeto.link}
              onChange={(e) => setProjeto({ ...projeto, link: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="projetoNota"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Nota
            </label>
            <input
              type="number"
              id="projetoNota"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="nota"
              value={projeto.nota}
              onChange={(e) =>
                setProjeto({ ...projeto, nota: Number(e.target.value) })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="projetoAuthor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
            >
              Author
            </label>
            <input
              type="text"
              id="projetoAuthor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="author"
              value={projeto.author}
              onChange={(e) =>
                setProjeto({ ...projeto, author: e.target.value })
              }
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">
              Categoria
            </label>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-gray-800 text-white p-2 rounded-lg w-full"
            >
              {projeto.categoria || "Selecione uma categoria"}
            </button>

            {showDropdown && (
              <div className="bg-gray-100 border mt-2 rounded-lg p-2 shadow-lg">
                {categorias.map((categoria, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoriaSelect(categoria)}
                    className={`block w-full text-left p-2 hover:bg-gray-300 ${
                      projeto.categoria === categoria ? "bg-blue-200" : ""
                    }`}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Atualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
