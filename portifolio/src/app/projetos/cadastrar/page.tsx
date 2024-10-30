"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProjectProps } from "@/types/types";

export default function CadastrarProjetoPage() {
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
  const [categorias] = useState(["Checkpoint", "Global Solution", "Challenge"]);

  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PRODUCTION_URL
      : "http://localhost:3000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjeto({ ...projeto, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/projetos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projeto),
      });

      if (!projeto.title || !projeto.descricao || !projeto.link) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (response.ok) {
        alert("Projeto cadastrado com sucesso.");
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
      console.error("Falha ao criar o projeto: ", error);
    }
  };

  const handleCategoriaSelect = (categoria: string) => {
    setProjeto({ ...projeto, categoria });
    setShowDropdown(false);
  };

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center py-4">
      <h1 className="font-bold text-[45px] mt-15">Cadastrar</h1>
      <form onSubmit={handleSubmit} className="w-[25%] mx-auto m-10">
        <div className="mb-5">
          <label
            htmlFor="idProjeto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Título Projeto
          </label>
          <input
            type="text"
            id="idProjeto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="title"
            value={projeto.title}
            onChange={handleChange}
            placeholder="Digite o título do projeto:"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="descricaoProjeto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Descrição do Projeto
          </label>
          <input
            type="text"
            id="descricaoProjeto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="descricao"
            value={projeto.descricao}
            onChange={handleChange}
            placeholder="Digite a descrição do projeto:"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="linkProjeto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Link do Projeto
          </label>
          <input
            type="text"
            id="linkProjeto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="link"
            value={projeto.link}
            onChange={handleChange}
            placeholder="Digite o link do projeto:"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="notaProjeto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Nota
          </label>
          <input
            type="text"
            id="notaProjeto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="nota"
            value={projeto.nota}
            onChange={handleChange}
            placeholder="Digite a nota do projeto:"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="authorProjeto"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            Author
          </label>
          <input
            type="text"
            id="authorProjeto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="author"
            value={projeto.author}
            onChange={handleChange}
            placeholder="Digite o author do projeto:"
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

        <button
          type="submit"
          className=" text-lg bg-gray-800 py-2.5 block m-auto px-6 rounded-md text-white mx-auto transition-all duration-300 ease-in-out hover:opacity-60"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
