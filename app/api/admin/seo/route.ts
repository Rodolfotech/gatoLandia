import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "seo-overrides.json");

interface SeoEntry {
  title: string;
  description: string;
  keywords?: string;
}

type SeoData = Record<string, SeoEntry>;

function readSeo(): SeoData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    }
  } catch {}
  return {};
}

function writeSeo(data: SeoData): void {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

function unauthorized() {
  return NextResponse.json({ error: "No autorizado" }, { status: 401 });
}

export async function GET(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token || !verifyToken(token)) return unauthorized();

  const defaults = await getDefaults();
  const overrides = readSeo();

  const merged: Record<string, SeoEntry & { isOverridden?: boolean }> = {};
  for (const [key, val] of Object.entries(defaults)) {
    merged[key] = overrides[key] ? { ...val, ...overrides[key], isOverridden: true } : { ...val, isOverridden: false };
  }
  for (const [key, val] of Object.entries(overrides)) {
    if (!merged[key]) merged[key] = { ...val, isOverridden: true };
  }

  return NextResponse.json({ data: merged, overrides });
}

export async function PUT(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token || !verifyToken(token)) return unauthorized();

  const body = await req.json();
  const current = readSeo();
  const updated = { ...current, ...body };
  writeSeo(updated);

  return NextResponse.json({ ok: true });
}

async function getDefaults(): Promise<SeoData> {
  const raw = await Promise.resolve().then(() => fs.readFileSync(
    path.join(process.cwd(), "app", "data", "cats.ts"), "utf-8"
  ));

  const defaults: SeoData = {
    "/": { title: "Inicio", description: "Todo lo que necesitas saber sobre los gatos: salud, comportamiento, biología, historia y más." },
    "/sobre-nosotros": { title: "Sobre Nosotros", description: "Conoce más sobre GatoLandia, la enciclopedia felina." },
    "/contacto": { title: "Contacto", description: "Ponte en contacto con el equipo de GatoLandia." },
    "/razas": { title: "Guía de Razas de Gatos", description: "Explora todas las razas de gatos con información detallada." },
    "/preguntas": { title: "Preguntas Frecuentes", description: "Respuestas a las preguntas más comunes sobre gatos." },
    "/privacidad": { title: "Política de Privacidad", description: "Política de privacidad de GatoLandia." },
    "/terminos": { title: "Términos y Condiciones", description: "Términos y condiciones de uso de GatoLandia." },
  };

  try {
    const cats = await import("@/app/data/cats").then((m) => m.categories);

    for (const cat of cats) {
      defaults[`/${cat.slug}`] = {
        title: cat.label,
        description: cat.description,
      };
      for (const sub of cat.subcategories) {
        for (const topic of sub.topics) {
          defaults[`/${cat.slug}/${sub.slug}/${topic.slug}`] = {
            title: topic.title,
            description: topic.intro.replace(/\*\*/g, "").slice(0, 160),
          };
        }
      }
    }
  } catch {}

  return defaults;
}
