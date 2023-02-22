import {data} from './logements'


export async function seedLogements() {
    await fetch('https://restapi.fr/api/logements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}