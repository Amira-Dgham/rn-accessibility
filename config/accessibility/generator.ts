export const createSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const createI18nKey = (name: string) =>
  name.replace(/\s+/g, '').charAt(0).toLowerCase() + name.replace(/\s+/g, '').slice(1);

export const createExamplesFor = (Component: any) => ({
  A: Component({ level: 'A' }),
  AA: Component({ level: 'AA' }),
  AAA: Component({ level: 'AAA' }),
  none: Component({ level: 'none' }),
});

export const createRequirementsFor = (key: string, counts = { A: 4, AA: 4, AAA: 4 }) => {
  const requirements: any = { A: {}, AA: {}, AAA: {} };

  (['A', 'AA', 'AAA'] as const).forEach((level) => {
    for (let i = 1; i <= counts[level]; i++) {
      requirements[level][i] = `accessibility.components.${key}.requirements.${level}.${i}`;
    }
  });

  return requirements;
};
