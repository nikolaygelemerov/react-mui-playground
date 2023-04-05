module.exports = {
  '*.json': 'pnpm format',
  '*.{ts,tsx}': ['pnpm format', 'pnpm lint --max-warnings 0', () => 'pnpm tsc-check']
};
