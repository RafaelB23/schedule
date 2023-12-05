import { API } from "aws-amplify";
import { createMateriaMaestro } from '../graphql/mutations';

export default async function materiaMaestroApi(fMateriaId, fMaestroId) {
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