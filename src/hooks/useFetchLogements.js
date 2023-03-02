import { useEffect, useState } from 'react';
import { getLogements } from '../apis';

export function useFetchLogements() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedLogements = await getLogements();
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
  }, []);

  return [logements, setLogements, isLoading, error];
}
