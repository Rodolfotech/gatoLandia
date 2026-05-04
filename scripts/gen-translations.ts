import { categories } from '../app/data/cats';
import * as fs from 'fs';
import * as path from 'path';

const LOCALES = [
  { code: 'en-US', name: 'English (US)', prompt: 'American English' },
  { code: 'en-GB', name: 'English (UK)', prompt: 'British English (use UK spelling: behaviour, colour, centre, organisation, programme, etc.)' },
  { code: 'pt', name: 'Português', prompt: 'Brazilian Portuguese (pt-BR)' },
  { code: 'ru', name: 'Русский', prompt: 'Russian' },
  { code: 'zh', name: '中文', prompt: 'Simplified Chinese (简体中文)' },
];

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

// Extract bold markers and replace with placeholders
function extractBoldMarkers(text: string): { clean: string; placeholders: string[] } {
  const placeholders: string[] = [];
  let clean = text;
  let match;
  const regex = /\*\*(.*?)\*\*/g;
  while ((match = regex.exec(text)) !== null) {
    const placeholder = `__BOLD_${placeholders.length}__`;
    placeholders.push(match[1]); // store the bold text
    clean = clean.replace(`**${match[1]}**`, placeholder);
  }
  return { clean, placeholders };
}

// Restore bold markers from placeholders
function restoreBoldMarkers(translated: string, placeholders: string[]): string {
  let result = translated;
  placeholders.forEach((boldText, i) => {
    const placeholder = `__BOLD_${i}__`;
    // The translated text should have the placeholder; we replace it with **translated equivalent**
    // But since we don't have the translated bold text, we just restore the marker
    // Actually, we need to tell the API to preserve placeholders
    result = result.replace(placeholder, `**${boldText}**`); // This is wrong - we need the translated bold text
  });
  return result;
}

async function translateText(text: string, locale: typeof LOCALES[number], placeholders: string[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) throw new Error('Set OPENROUTER_API_KEY env var');

  // Create a version of text with placeholders that API won't translate
  let textToTranslate = text;
  placeholders.forEach((boldText, i) => {
    textToTranslate = textToTranslate.replace(`**${boldText}**`, `__BOLD_${i}__`);
  });

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'GatoLandia',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.1-8b-instruct',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the user's text to ${locale.prompt}. Return ONLY the translation, nothing else. No explanations, no quotes, no extra text. IMPORTANT: Preserve the placeholders like __BOLD_0__, __BOLD_1__ exactly as they are, do NOT translate them.`,
        },
        { role: 'user', content: textToTranslate },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => 'unknown');
    throw new Error(`API ${response.status}: ${errText}`);
  }

  const data = await response.json();
  let translated = data.choices?.[0]?.message?.content?.trim() || text;

  // Restore bold markers - but we need to translate the bold text too
  // For simplicity, we'll assume the API kept the placeholders
  // Then we need to translate the bold text separately
  for (let i = 0; i < placeholders.length; i++) {
    const placeholder = `__BOLD_${i}__`;
    if (translated.includes(placeholder)) {
      // Translate the bold text
      const boldTranslation = await translateBoldText(placeholders[i], locale);
      translated = translated.replace(placeholder, `**${boldTranslation}**`);
    }
  }

  return translated;
}

async function translateBoldText(text: string, locale: typeof LOCALES[number]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'GatoLandia',
    },
    body: JSON.stringify({
      model: 'meta-llama/llama-3.1-8b-instruct',
      messages: [
        {
          role: 'system',
          content: `You are a professional translator. Translate the user's text to ${locale.prompt}. Return ONLY the translation, nothing else. No explanations, no quotes, no extra text.`,
        },
        { role: 'user', content: text },
      ],
      temperature: 0.3,
      max_tokens: 200,
    }),
  });

  if (!response.ok) return text;
  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || text;
}

async function main() {
  const args = process.argv.slice(2);
  const targetLocales = args.length > 0
    ? LOCALES.filter(l => args.includes(`--locale=${l.code}`))
    : LOCALES;

  if (targetLocales.length === 0) {
    console.log('Usage: npx tsx scripts/gen-translations.ts --locale=en-US');
    console.log('   or: npx tsx scripts/gen-translations.ts --locale=en-US --locale=pt');
    process.exit(1);
  }

  for (const locale of targetLocales) {
    console.log(`\n═══════════════════════════════════════`);
    console.log(`  ${locale.name} (${locale.code})`);
    console.log(`═══════════════════════════════════════`);

    const translated = categories.map(cat => ({
      slug: cat.slug, label: '', emoji: cat.emoji, color: cat.color, bg: cat.bg, description: '',
      subcategories: cat.subcategories.map(sub => ({
        slug: sub.slug, label: '',
        topics: sub.topics.map(topic => ({
          slug: topic.slug, title: '', intro: '',
          sections: topic.sections.map(sec => ({ heading: '', body: '' })),
        })),
      })),
    }));

    let totalItems = 0;

    for (let ci = 0; ci < categories.length; ci++) {
      const cat = categories[ci];
      const items: { text: string; type: string; si?: number; ti?: number; sci?: number }[] = [];

      items.push({ text: cat.label, type: 'cat_label' });
      items.push({ text: cat.description, type: 'cat_desc' });

      for (let si = 0; si < cat.subcategories.length; si++) {
        const sub = cat.subcategories[si];
        items.push({ text: sub.label, type: 'sub_label', si });

        for (let ti = 0; ti < sub.topics.length; ti++) {
          const topic = sub.topics[ti];
          items.push({ text: topic.title, type: 'topic_title', si, ti });
          items.push({ text: topic.intro, type: 'topic_intro', si, ti });

          for (let sci = 0; sci < topic.sections.length; sci++) {
            const sec = topic.sections[sci];
            items.push({ text: sec.heading, type: 'sec_heading', si, ti, sci });
            items.push({ text: sec.body, type: 'sec_body', si, ti, sci });
          }
        }
      }

      // Translate in batches of 5
      for (let i = 0; i < items.length; i += 5) {
        const batch = items.slice(i, i + 5);
        
        for (const item of batch) {
          const { clean, placeholders } = extractBoldMarkers(item.text);
          item.translatedText = await translateText(clean, locale, placeholders);
          await sleep(200);
        }

        // Map results back
        for (const item of batch) {
          const val = item.translatedText || item.text;
          if (item.type === 'cat_label') translated[ci].label = val;
          else if (item.type === 'cat_desc') translated[ci].description = val;
          else if (item.type === 'sub_label') translated[ci].subcategories[item.si!].label = val;
          else if (item.type === 'topic_title') translated[ci].subcategories[item.si!].topics[item.ti!].title = val;
          else if (item.type === 'topic_intro') translated[ci].subcategories[item.si!].topics[item.ti!].intro = val;
          else if (item.type === 'sec_heading') translated[ci].subcategories[item.si!].topics[item.ti!].sections[item.sci!].heading = val;
          else if (item.type === 'sec_body') translated[ci].subcategories[item.si!].topics[item.ti!].sections[item.sci!].body = val;
        }

        await sleep(300);
      }

      totalItems += items.length;
      console.log(`  ✓ ${cat.label} → ${translated[ci].label} (${items.length} items)`);
    }

    const ts = `import { Category } from '../../data/cats';\n\nexport const categories: Category[] = ${JSON.stringify(translated, null, 2)};\n`;
    const outPath = path.join(__dirname, '..', 'app', 'i18n', 'content', `content.${locale.code}.ts`);
    fs.writeFileSync(outPath, ts, 'utf-8');
    console.log(`\n  💾 Saved to content.${locale.code}.ts (${totalItems} items total)`);
  }
  console.log('\n✅ ALL TRANSLATIONS COMPLETE!');
}

main().catch(e => { console.error(e); process.exit(1); });
