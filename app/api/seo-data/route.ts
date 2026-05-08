import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "seo-overrides.json");

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
      return NextResponse.json(data);
    }
  } catch {}
  return NextResponse.json({});
}
