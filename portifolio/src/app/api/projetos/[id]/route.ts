import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { ProjectProps } from "@/types/types";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/database.json",
      "utf-8"
    );

    const projetos: ProjectProps[] = JSON.parse(file);

    const projeto = projetos.find((p) => p.id == params.id);

    return NextResponse.json(projeto);
  } catch (error) {
    return NextResponse.json(
      { msg: "Falha na obtenção do projeto : " + error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/database.json",
      "utf-8"
    );

    const projetos: ProjectProps[] = JSON.parse(file);

    const indice = projetos.findIndex((p) => p.id == params.id);

    if (indice != -1) {
      projetos.splice(indice, 1);

      const listaJson = JSON.stringify(projetos);

      await fs.writeFile(process.cwd() + "/src/data/database.json", listaJson);

      return NextResponse.json({ msg: "Projeto excluído com sucesso!" });
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "Falha na exclusão do projeto : " + error },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/database.json",
      "utf-8"
    );

    const projetos: ProjectProps[] = JSON.parse(file);

    const { descricao, id, link, title, author, categoria, nota } =
      await request.json();

    const indice = projetos.findIndex((p) => p.id == params.id);

    if (indice != -1) {
      const projeto: ProjectProps = {
        descricao,
        id,
        link,
        title,
        author,
        categoria,
        nota,
      };

      projeto.id = params.id;

      projetos.splice(indice, 1, projeto);

      const listaJson = JSON.stringify(projetos);

      await fs.writeFile(process.cwd() + "/src/data/database.json", listaJson);

      return NextResponse.json({ msg: "Projeto atualizado com sucesso!" });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Falha na atualização do projeto : " + error },
      { status: 500 }
    );
  }
}
