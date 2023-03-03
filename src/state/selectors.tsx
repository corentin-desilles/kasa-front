import { getLogement } from 'apis';
import { /*{selector}*/ selectorFamily } from 'recoil';
import { ObjectId } from 'types';
import { logementsState } from './atoms';

export const selectFilteredLogements = selectorFamily({
  key: 'selectFilteredLogements',
  get:
    (filter: string) =>
    ({ get }) => {
      const logements = get(logementsState);
      return logements.filter(l => l.location.toLowerCase().startsWith(filter));
    },
});

export const selectActiveLogement = selectorFamily({
  key: 'selectActiveLogement',
  get: (logementId?: ObjectId) => async () =>
    logementId ? await getLogement(logementId) : null,
});

// export const selectWishedLogement = selector({
//   key: 'selectWishedLogement',
//   get: ({ get }) => get(logementsState)?.filter(l => l.liked),
// });
