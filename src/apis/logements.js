const LOGEMENT_API = '/api/logements';

export async function getLogements(queryParam) {
  const response = await fetch(
    `${LOGEMENT_API}${queryParam ? `?${queryParam}` : ''} `
  );
  if (response.ok) {
    const body = await response.json();
    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error('Error fetch logements');
  }
}

export async function getLogement(_id) {}
