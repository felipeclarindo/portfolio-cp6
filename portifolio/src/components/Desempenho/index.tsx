"use client"

import { DesempenhoProps} from "@/types/types";
import { useEffect, useState } from "react";

function getCategoryPerfomance(color:boolean, nota: number): "Mediocre" | "Razoável" | "Bom" | string{
    if (color) {
      if (nota <= 5) return "text-red-800"
      if (nota <= 7) return "text-orange-300"
      return "text-green-900"
    } else {
      if (nota <= 5) return "Mediocre";
      if (nota <= 7) return "Razoável";
      return "Bom";
    }
  }


export default function Desempenho() {
  const [desempenhos, setDesempenhos] = useState<DesempenhoProps[]>([]);

  useEffect(() => {
      async function getNotas() {
          const response = await fetch('http://localhost:3000/api/projetos');
          const data = await response.json();
          setDesempenhos(data);
      }
      getNotas();
  },[])
  

  return (
    <div className="w-full">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-semibold bg-gray-200 border-b">Nota</th>
            <th className="px-4 py-2 text-left font-semibold bg-gray-200 border-b">Author</th>
            <th className="px-4 py-2 text-left font-semibold bg-gray-200 border-b">Desempenho</th>
          </tr>
        </thead>
        <tbody>
          {desempenhos.map((desempenho) => (
            <tr key={desempenho.id} className="border-b">
              <td className="px-4 py-2">{desempenho.nota}</td>
              <td className="px-4 py-2">{desempenho.author}</td>
              <td className={`px-4 py-2 font-bold ${getCategoryPerfomance(true, desempenho.nota)} `}>
                {getCategoryPerfomance(false, desempenho.nota)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}