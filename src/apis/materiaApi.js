import { API } from "aws-amplify";
import { createMateria, deleteMateria } from '../graphql/mutations';

export async function createMateriaApi(key, name, lenguaje, modality){
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

export async function deleteMateriaApi(materiaId){
    const cDeleteMateria = await API.graphql({
        query: deleteMateria,
        variables: {
            input: {
                "id": materiaId
            }
        }
    })
    return cDeleteMateria.data?.deleteMateria
}
