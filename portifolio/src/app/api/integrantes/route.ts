import { NextResponse } from "next/server";
import { integrantes } from "./integrantes";

export async function GET() {
  return NextResponse.json(integrantes);
}
