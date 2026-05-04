import { Category } from '../../data/cats';
import { Locale, DEFAULT_LOCALE } from '../types';

function mergeCategories(original: Category[], translated: Category[]): Category[] {
  const translatedMap = new Map(translated.map(c => [c.slug, c]));

  return original.map(origCat => {
    const transCat = translatedMap.get(origCat.slug);
    if (!transCat) return origCat;

    const mergedSubcategories = origCat.subcategories.map(origSub => {
      const transSub = transCat.subcategories?.find(s => s.slug === origSub.slug);
      if (!transSub) return origSub;

      const mergedTopics = origSub.topics.map(origTopic => {
        const transTopic = transSub.topics?.find(t => t.slug === origTopic.slug);
        if (!transTopic) return origTopic;

        const mergedSections = origTopic.sections.map((origSec, i) => {
          const transSec = transTopic.sections?.[i];
          if (!transSec) return origSec;
          return {
            heading: transSec.heading || origSec.heading,
            body: transSec.body || origSec.body,
          };
        });

        return {
          ...origTopic,
          title: transTopic.title || origTopic.title,
          intro: transTopic.intro || origTopic.intro,
          sections: mergedSections,
        };
      });

      return {
        ...origSub,
        label: transSub.label || origSub.label,
        topics: mergedTopics,
      };
    });

    return {
      ...origCat,
      label: transCat.label || origCat.label,
      description: transCat.description || origCat.description,
      subcategories: mergedSubcategories,
    };
  });
}

export function getContent(locale: Locale): { categories: Category[] } {
  if (locale === DEFAULT_LOCALE) {
    const { categories } = require('../../data/cats');
    return { categories };
  }

  const { categories: original } = require('../../data/cats');

  try {
    const mod = require(`./content.${locale}`);
    if (mod && mod.categories && mod.categories.length > 0) {
      return { categories: mergeCategories(original, mod.categories) };
    }
  } catch {
    // Fall back to Spanish
  }

  return { categories: original };
}
