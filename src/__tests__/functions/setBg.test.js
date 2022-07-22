import { setBg } from '../../utils/setBg';

describe('setBg util', () => {
  test('setBg will add the correct bg color based on pokemon type', () => {
    expect(setBg('rock')).toBe('bg-[#bbaa66]/70');
    expect(setBg('water')).toBe('bg-[#3399FE]/70');
    expect(setBg('fairy')).toBe('bg-[#ee99ee]/70');
  });
});
