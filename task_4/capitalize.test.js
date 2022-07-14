import capitalize from "./capitalize.js";

test('capitalize word', () => {
  expect(capitalize('word')).toBe('Word');
});