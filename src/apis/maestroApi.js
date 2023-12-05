import { API } from 'aws-amplify';
import { createMaestro } from '../graphql/mutations';

export default async function maestroApi(id, key, name, middle_name, last_name, email) {
    const newMaestro = await API.graphql({
        query: createMaestro,
        variables: {
            input: {
                "id": id,
                "name": name,
                "middle_name": middle_name,
                "last_name": last_name,
                "key": key,
                "email": email
            }
        }
    });
    return newMaestro;
}