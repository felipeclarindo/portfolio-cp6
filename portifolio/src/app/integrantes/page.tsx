"use client";

import IntegranteCard from "@/components/IntegranteCard";
import { IntegrantesProps } from "@/types/types";
import { useEffect, useState } from "react";

export default function IntegrantesPage() {
  const [integrantes, setIntegrantes] = useState<IntegrantesProps[]>([]);

  useEffect(() => {
    const chamadaApi = async () => {
      const response = await fetch("http://localhost:3000/api/integrantes");
      const data = await response.json();
      setIntegrantes(data);
    };
    chamadaApi();
  }, []);

  return (
    <div className="min-h-[100vh] px-6 py-10">
      <h1 className="text-center font-bold text-[40px]">Participantes</h1>
      <div className="mt-10 flex flex-col gap-8 justify-center items-center">
        {integrantes.map((integrante) => (
          <div key={integrante.id}>
            <IntegranteCard integrante={integrante} />
          </div>
        ))}
      </div>
    </div>
  );
}
