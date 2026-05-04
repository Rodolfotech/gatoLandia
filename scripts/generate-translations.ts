// Script para generar archivos de traducción usando OpenRouter
// Ejecutar: npx tsx scripts/generate-translations.ts

import { categories, Category, Topic, Section, Subcategory } from '../app/data/cats';

const LOCALES = [
  { code: 'en-US', name: 'English (US)', prompt: 'American English' },
  { code: 'en-GB', name: 'English (UK)', prompt: 'British English' },
  { code: 'pt', name: 'Português', prompt: 'Portuguese' },
  { code: 'ru', name: 'Русский', prompt: 'Russian' },
  { code: 'zh', name: '中文', prompt: 'Simplified Chinese' },
];

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function translateText(text: string, locale: { code: string; name: string; prompt: string }): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error('OPENROUTER_API_KEY not set');

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'GatoLandia Translation Generator',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.1-8b-instruct',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the following text to ${locale.prompt} (${locale.code}). Return ONLY the translation, nothing else. Do not add quotes, explanations, or any extra text.`,
        },
        { role: 'user', content: text },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`API error ${response.status}: ${err}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

async function translateBatch(texts: string[], locale: { code: string; name: string; prompt: string }): Promise<string[]> {
  const combined = texts.map((t, i) => `__BATCH_ITEM_${i}__: ${t}`).join('\n\n');
  const translated = await translateText(combined, locale);
  
  return texts.map((_, i) => {
    const regex = new RegExp(`__BATCH_ITEM_${i}__:\\s*(.*?)(?=\\n\\n__BATCH_ITEM_${i + 1}__:|$)`, 's');
    const match = translated.match(regex);
    return match ? match[1].trim() : texts[i];
  });
}

function buildTranslatedCategories(locale: { code: string; name: string; prompt: string }): Category[] {
  return categories.map(cat => ({
    slug: cat.slug,
    label: '',
    emoji: cat.emoji,
    color: cat.color,
    bg: cat.bg,
    description: '',
    subcategories: cat.subcategories.map(sub => ({
      slug: sub.slug,
      label: '',
      topics: sub.topics.map(topic => ({
        slug: topic.slug,
        title: '',
        intro: '',
        sections: topic.sections.map(sec => ({
          heading: '',
          body: '',
        })),
      })),
    })),
  }));
}

async function generateTranslations(locale: { code: string; name: string; prompt: string }) {
  console.log(`\n=== Translating to ${locale.name} (${locale.code}) ===`);
  const result = buildTranslatedCategories(locale);
  let item = 0;
  let total = 0;

  for (const cat of categories) total += cat.subcategories.reduce((a, s) => a + s.topics.reduce((b, t) => b + 2 + t.sections.length * 2, 0), 0) + cat.subcategories.length + 2;
  console.log(`Total items to translate: ~${total}`);

  for (let ci = 0; ci < categories.length; ci++) {
    const cat = categories[ci];
    console.log(`\n  Category: ${cat.label} (${ci + 1}/${categories.length})`);

    result[ci].label = await translateText(cat.label, locale);
    await sleep(300);

    result[ci].description = await translateText(cat.description, locale);
    await sleep(300);

    for (let si = 0; si < cat.subcategories.length; si++) {
      const sub = cat.subcategories[si];
      console.log(`    Subcategory: ${sub.label} (${si + 1}/${cat.subcategories.length})`);

      result[ci].subcategories[si].label = await translateText(sub.label, locale);
      await sleep(300);

      for (let ti = 0; ti < sub.topics.length; ti++) {
        const topic = sub.topics[ti];
        console.log(`      Topic: ${topic.title.substring(0, 40)}...`);

        result[ci].subcategories[si].topics[ti].title = await translateText(topic.title, locale);
        await sleep(300);

        result[ci].subcategories[si].topics[ti].intro = await translateText(topic.intro, locale);
        await sleep(300);

        for (let sci = 0; sci < topic.sections.length; sci++) {
          const sec = topic.sections[sci];
          result[ci].subcategories[si].topics[ti].sections[sci].heading = await translateText(sec.heading, locale);
          await sleep(300);
          result[ci].subcategories[si].topics[ti].sections[sci].body = await translateText(sec.body, locale);
          await sleep(300);
        }
      }
    }
  }

  const output = `import { Category } from '../../data/cats';\n\nexport const categories: Category[] = ${JSON.stringify(result, null, 2)};\n`;
  const fs = require('fs');
  const path = require('path');
  const outPath = path.join(__dirname, '..', 'app', 'i18n', 'content', `content.${locale.code}.ts`);
  fs.writeFileSync(outPath, output, 'utf-8');
  console.log(`\n  Saved to ${outPath}`);
}

async function main() {
  const targetLocales = LOCALES.filter(l => process.argv.includes(`--locale=${l.code}`) || process.argv.includes('--all'));
  if (targetLocales.length === 0) {
    console.log('Usage: npx tsx scripts/generate-translations.ts --all');
    console.log('   or: npx tsx scripts/generate-translations.ts --locale=en-US --locale=pt');
    process.exit(1);
  }

  for (const locale of targetLocales) {
    await generateTranslations(locale);
  }
  console.log('\nAll translations generated successfully!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
