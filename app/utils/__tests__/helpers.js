import { convert_to_sqrMeter, truncate } from "../helpers.js";

test('Convert from squareFoot to squareMeter', () => {
  expect(convert_to_sqrMeter(50)).toBe(4);
});

test('Truncate correctly', () => {
  expect(truncate("Hello world", 3)).toBe('Hel...');
})
