import { setIdNumber } from '../../utils/setIdNumber';

describe('setIdNumber util', () => {
  test('setIdNumber returns correct numbers', () => {
    expect(setIdNumber('50')).toBe('#050');
    expect(setIdNumber('50')).toBe('#050');
    expect(setIdNumber('100')).toBe('#100');
  });
});
