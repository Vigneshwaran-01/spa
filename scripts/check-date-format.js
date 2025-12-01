const { formatShortDate } = require('../lib/utils');

const cases = [
  { input: '2025-03-09T12:00:00Z', expected: '03/09/2025' },
  { input: '2025-3-9', expected: '03/09/2025' },
  { input: new Date('2025-03-09T00:00:00Z'), expected: '03/09/2025' },
  { input: 'invalid-date', expected: '' }
];

let failed = 0;

cases.forEach(({ input, expected }) => {
  const out = formatShortDate(input);
  const ok = out === expected;
  console.log(`${ok ? '✓' : '✗'} Input: ${String(input)} -> ${out} ${ok ? '' : `(expected ${expected})`}`);
  if (!ok) failed += 1;
});

if (failed > 0) {
  console.error(`\n${failed} date-format test(s) failed.`);
  process.exit(1);
} else {
  console.log('\nAll date-format tests passed.');
  process.exit(0);
}
