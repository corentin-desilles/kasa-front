const { atom } = require('recoil');

export const logementsState = atom({
  key: 'logementsState',
  default: [],
});

export const wishlistDisplayState = atom({
  key: 'wishlistDisplayState',
  default: false,
});
