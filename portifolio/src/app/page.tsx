import Link from "next/link";

export default function HomePage() {
  const generateDescription = (category: string) => {
    category = category.toLowerCase();
    if (category === "checkpoint") {
      return "Avaliação de projetos de CheckPoint";
    } else if (category === "globalsolution") {
      return "Avaliação de projetos de Global Solution";
    } else {
      return "Avaliação de projetos de Challenge";
    }
  };

  return (
    <div className="min-h-[100vh] py-12 px-4 flex flex-col items-center gap-6">
      <h1 className="font-bold text-[40px] mb-4">Dashboard de Avaliações</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {["CheckPoints", "GlobalSolution", "Challenge"].map((category) => (
          <div
            key={category.toLowerCase()}
            className="w-[300px] h-[180px] bg-gray-200 rounded-lg flex flex-col items-center justify-center shadow-md"
          >
            <h2 className="font-semibold text-2xl">{category}</h2>
            <p className="text-center mt-2 text-gray-600">
              {generateDescription(category)}
            </p>
            <Link
              href={`/projetos/${category.toLowerCase()}`}
              className="mt-4 py-2 px-4 font-semibold bg-gray-700 text-white rounded-lg transition-all duration-300 ease-in-out hover:opacity-70"
            >
              Ver Mais
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="/projetos"
        className="px-5 py-3 mt-4 font-semibold text-[24px] bg-gray-700 text-white rounded-lg transition-all duration-300 ease-in-out hover:opacity-70"
      >
        Ver todos
      </Link>

      <hr className="text-black w-100vw h-[2px]" />

      <div className="w-full max-w-4xl flex flex-col items-center mt-2 gap-8">
        <h2 className="font-semibold text-[40px]">Desempenho Geral</h2>
        <div className="w-full flex flex-wrap justify-center gap-8">
          <div className="w-[320px] h-[200px] border-black bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-lg text-black font-bold">
              Gráfico: Média Geral de Notas
            </p> 
          </div>

          <div className="w-[320px] h-[200px] border-black bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-lg text-black font-bold">Gráfico: Taxa de Conclusão</p>
          </div>

          <div className="w-[320px] h-[200px] border-black bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-lg text-black font-bold">
              Gráfico: Desempenho dos Alunos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
