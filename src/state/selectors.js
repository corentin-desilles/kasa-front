import { selectorFamily } from 'recoil';
import { logementsState } from './atoms';

export const selectFilteredLogements = selectorFamily({
  key: 'selectFilteredLogements',
  get:
    filter =>
    ({ get }) => {
      const logements = get(logementsState);
      return (
        logements.length &&
        logements.filter(l => l.location.toLowerCase().startsWith(filter))
      );
    },
});
