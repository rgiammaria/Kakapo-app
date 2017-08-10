import { safe } from 'utils/';

/* eslint-disable no-undef */
test('[utils/safe]', () => {
  expect.assertions(3);
  expect(safe(() => 'hello')).toBe('hello');
  expect(safe(() => foo)).toBe(undefined);
  expect(safe(() => bar, 'baz')).toBe('baz');
});
/* eslint-enable */
