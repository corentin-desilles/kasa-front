import { LogementI } from 'interfaces';
import { atom } from 'recoil';

export const logementsState = atom<LogementI[]>({
  key: 'logementsState',
  default: [],
});

export const wishlistDisplayState = atom({
  key: 'wishlistDisplayState',
  default: false,
});
