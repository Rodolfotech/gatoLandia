const API_KEY = "v06mB1LRYiJHj06A7lHxqR59cFIxpXMrBODfbBw2";

export interface CatBreed {
  name: string;
  origin: string;
  family_friendly: number;
  shedding: number;
  general_health: number;
  playfulness: number;
  children_friendly: number;
  grooming: number;
  intelligence: number;
  other_pets_friendly: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  length: string;
  weight: string;
  description: string;
}

export async function getAllCats(): Promise<CatBreed[]> {
  const res = await fetch("https://api.api-ninja.com/v1/allcats", {
    headers: { "X-Api-Key": API_KEY },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text}`);
  }
  return res.json();
}

export async function searchCats(name: string): Promise<CatBreed[]> {
  const res = await fetch(
    `https://api.api-ninja.com/v1/cats?name=${encodeURIComponent(name)}`,
    { headers: { "X-Api-Key": API_KEY } }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text}`);
  }
  return res.json();
}
