import { LogementI } from 'interfaces';
import { ObjectId } from 'types';

const LOGEMENT_API = '/api/logements';

export async function getLogements() {
  const response = await fetch(LOGEMENT_API);
  if (response.ok) {
    const body = await response.json();
    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error('Error fetch logements');
  }
}

export async function getLogement(_id: ObjectId): Promise<LogementI> {
  const response = await fetch(`${LOGEMENT_API}/${_id}`);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error fetch one recipe');
  }
}

export async function addLogement(
  newLogement: Partial<LogementI>
): Promise<LogementI> {
  const response = await fetch(LOGEMENT_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newLogement),
  });
  const body = await response.json();
  if (response.ok) {
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error('Error api createUser');
    }
  }
}

export async function deleteLogement(_id: ObjectId): Promise<ObjectId> {
  const response = await fetch(`${LOGEMENT_API}/${_id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return _id;
  } else {
    throw new Error('Error delete logement');
  }
}

export async function updateLogement(
  updatedLogement: Partial<LogementI>
): Promise<LogementI> {
  const { _id, ...values } = updatedLogement;
  const response = await fetch(`${LOGEMENT_API}/${_id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Error update logement');
  }
}
