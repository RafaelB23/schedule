import { API } from "aws-amplify";
import { createMateria } from '../graphql/mutations';

export default async function materiaApi(key, name, lenguaje, modality){
    const newMateria = await API.graphql({
        query: createMateria,
        variables: {
            input: {
            "materia_key": key,
            "name": name,
            "lenguage": lenguaje,
            "modality": modality
        }
        }
    });
    return newMateria
}