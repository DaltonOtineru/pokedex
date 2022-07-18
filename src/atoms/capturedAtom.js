import { atom } from 'recoil';

export const capturedState = atom({
  key: 'capturedState',
  default: [],
});
