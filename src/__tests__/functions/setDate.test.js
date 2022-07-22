import { setDate } from '../../utils/setDate';

describe('setDate util', () => {
  test('setDate will convert to correct date string', () => {
    expect(setDate('07-28-2022')).toBe('Jul 28, 2022');
    expect(setDate('04-26-2020')).toBe('Apr 26, 2020');
    expect(setDate('12-13-1998')).toBe('Dec 13, 1998');
  });
});
