import { API } from "aws-amplify";
import { createHorario } from '../graphql/mutations';

export default async function horarioApi(scheduleJson, maestro, materia) {
    const newHorario = await API.graphql({
        query: createHorario,
        variables: {
            input: {
            "schedule": scheduleJson,
            "id_maestro": maestro,
            "id_materia": materia
        }
        }
    });
    return newHorario
}