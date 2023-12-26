import { API } from "aws-amplify";
import { createMateriaMaestro, deleteMateriaMaestro } from '../graphql/mutations';

export async function createMateriaMaestroApi(fMateriaId, fMaestroId) {
    const newMateriaMaestro = await API.graphql({
        query: createMateriaMaestro,
        variables: {
            input: {
                "materiaMaestroFMateriaId": fMateriaId,
                "materiaMaestroFMaestroId": fMaestroId
            }
        }
    });
    return newMateriaMaestro
}

export async function deleteMateriaMaestroApi(materiaMaestriId){
    const cDeleteMateriaMaestro = await API.graphql({
        query: deleteMateriaMaestro,
        variables: {
            input: {
                "id": materiaMaestriId
            }
        }
    })
    return cDeleteMateriaMaestro.data?.deleteMateriaMaestro
}