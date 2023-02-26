import { useEffect, useState } from 'react';
import { getLogements } from '../apis';

export function useFetchLogements(url, page) {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);

        const queryParam = new URLSearchParams();
        if (page) {
          queryParam.append('limit', 9);
          queryParam.append('skip', (page - 1) * 9);
        }
        const fetchedLogements = await getLogements(queryParam);
        setLogements(fetchedLogements);
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
  }, [url, page]);

  return [logements, isLoading, error];
}
