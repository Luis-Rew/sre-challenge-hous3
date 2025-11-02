import js from '@eslint/js';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/**'],
  },
  js.configs.recommended,
  ...tseslint.config(
    {
      files: ['src/**/*.ts'],
      extends: [tseslint.configs.recommendedTypeChecked, prettier],
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json',
          tsconfigRootDir: import.meta.dirname,
        },
        globals: {
          ...globals.node,
        },
      },
      plugins: {
        import: pluginImport,
      },
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
            js: 'never',
          },
        ],
        'import/no-unresolved': ['error', { ignore: ['\\.js$'] }],
      },
    }
  ),
];

