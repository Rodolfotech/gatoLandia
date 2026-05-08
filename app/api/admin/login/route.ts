import { NextResponse } from "next/server";
import { generateToken } from "@/app/lib/auth";

export async function POST(req: Request) {
  const { password } = await req.json();
  const secret = process.env.ADMIN_PASSWORD || "gatitos2024";

  if (password !== secret) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const token = generateToken();
  return NextResponse.json({ token });
}
