import { API } from 'aws-amplify';
import { createHorario } from '../graphql/mutations';

export default async function horarioApi(schedule, materiamateriaMaestroIdId) {
  const newHorario = await API.graphql({
    query: createHorario,
    variables: {
      input: {
        "schedule": schedule,
        "horarioFMateriaMaestroId": materiamateriaMaestroIdId
      }
    }
  });
  return newHorario;
}
