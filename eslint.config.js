import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^node:', '^(fs|path|url|buffer|process)$'],
            ['^react', '^next'],
            ['^(@[a-zA-Z][\\w-]*/)?\\w'],
            ['^@/'],
            ['^.*\\u0000$'],
            ['^\\.\\.(/|$)'],
            ['^\\.(/|$)'],
            ['^.+\\.(css|scss|sass|less|styl)$'],
          ],
        },
      ],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;