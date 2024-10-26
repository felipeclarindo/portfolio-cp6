import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { ProjectProps } from "@/types/types";

export async function GET() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/database.json",
      "utf-8"
    );

    const projetos: ProjectProps[] = JSON.parse(file);

    return NextResponse.json(projetos);
  } catch (error) {
    return NextResponse.json(
      { error: "Falha na obtenção dos projetos: " + error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const file = await fs.readFile(
      process.cwd() + "/src/data/database.json",
      "utf-8"
    );

    const projetos: ProjectProps[] = JSON.parse(file);

    const { title, descricao, link, categoria, author, nota } =
      await request.json();
    const projeto = {
      title,
      descricao,
      link,
      categoria,
      author,
      nota,
    } as ProjectProps;

    const novoId =
      projetos.length > 0
        ? parseInt(projetos[projetos.length - 1].id.toString()) + 1
        : 1;

    projeto.id = novoId;

    projetos.push(projeto);

    const listaJson = JSON.stringify(projetos);

    await fs.writeFile(process.cwd() + "/src/data/database.json", listaJson);

    return NextResponse.json(projeto, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Falha na criação do projeto : " + error },
      { status: 500 }
    );
  }
}
