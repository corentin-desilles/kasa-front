import { useEffect, useState } from 'react';
import { getLogements } from 'apis';
import { useSetRecoilState } from 'recoil';
import { logementsState } from 'state';

export function useFetchLogements() {
  const setLogements = useSetRecoilState(logementsState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedLogements = await getLogements();
        if (!cancel) {
          setLogements(fetchedLogements);
        }
      } catch (e) {
        console.log('Erreur');
        setError('erreur');
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    fetchData();
    return () => (cancel = true);
  }, [setLogements]);

  return [isLoading, error];
}
