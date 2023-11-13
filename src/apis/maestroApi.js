import { API } from "aws-amplify";
import { createMaestro } from '../graphql/mutations';

export default async function maestroApi(name, lastname, level, lenguage, key) {
    const newMaestro = await API.graphql({
        query: createMaestro,
        variables: {
            input: {
                "name": name,
                "lastName": lastname,
                "level": level,
                "lenguage": lenguage,
                "maestro_key": key
            }
        }
    });
    return newMaestro
}