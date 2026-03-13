module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // TypeScript handles prop validation
    'react/prop-types': 'off',
    // Allow JSX in .tsx files
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    // React 17+ doesn't require React in scope
    'react/react-in-jsx-scope': 'off',
    // Allow index as key only when no stable id exists — warn instead of error
    'react/no-array-index-key': 'warn',
    // Allow default exports (common in components)
    'import/prefer-default-export': 'off',
    // JSX class strings and data arrays routinely exceed 100 chars — ignore strings/URLs
    'max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    }],
  },
  ignorePatterns: [
    'dist/',
    '.astro/',
    'node_modules/',
    '*.mjs',
    '*.cjs',
  ],
};
