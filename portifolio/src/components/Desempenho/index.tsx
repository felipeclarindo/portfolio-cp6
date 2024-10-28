"use client";

import { DesempenhoProps } from "@/types/types";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

function getCategoryPerfomance(
  color: boolean,
  nota: number
): "Mediocre" | "Razoável" | "Bom" | string {
  if (color) {
    if (nota <= 5.9) return "text-red-800";
    if (nota <= 7) return "text-orange-300";
    return "text-green-600";
  } else {
    if (nota <= 5.9) return "Mediocre";
    if (nota <= 7) return "Razoável";
    return "Bom";
  }
}

export default function Desempenho() {
  const [loading, setLoading] = useState(true);
  const [mediaPorAutor, setMediaPorAutor] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    async function getNotas() {
      const response = await fetch("http://localhost:3000/api/projetos");
      const data = await response.json();
      setLoading(false);

      const medias: { [key: string]: { total: number; count: number } } = {};

      data.forEach((item: DesempenhoProps) => {
        if (!medias[item.author]) {
          medias[item.author] = { total: 0, count: 0 };
        }
        medias[item.author].total += item.nota;
        medias[item.author].count += 1;
      });

      const mediasCalculadas: { [key: string]: number } = {};
      Object.keys(medias).forEach((author) => {
        mediasCalculadas[author] = medias[author].total / medias[author].count;
      });
      setMediaPorAutor(mediasCalculadas);
    }

    getNotas();
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left font-semibold bg-gray-200 border-b">
                Autor
              </th>
              <th className="px-4 py-2 text-left font-semibold bg-gray-200 border-b">
                Média das Notas
              </th>
              <th className="px-4 py-2 text-left font-semibold bg-gray-200 border-b">
                Desempenho
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(mediaPorAutor).map(([author, media]) => (
              <tr key={author} className="border-b">
                <td className="px-4 py-2">{author}</td>
                <td className="px-4 py-2">{media.toFixed(2)}</td>
                <td
                  className={`px-4 py-2 font-bold ${getCategoryPerfomance(
                    true,
                    media
                  )} `}
                >
                  {getCategoryPerfomance(false, media)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
