import { getLogement } from 'apis';
import { selector, selectorFamily } from 'recoil';
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

export const selectActiveLogement = selectorFamily({
  key: 'selectActiveLogement',
  get: logementId => async () => logementId && (await getLogement(logementId)),
});

export const selectWishedLogement = selector({
  key: 'selectWishedLogement',
  get: ({ get }) => get(logementsState)?.filter(l => l.liked),
});
